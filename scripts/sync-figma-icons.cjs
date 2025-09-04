#!/usr/bin/env node
/* eslint-disable */
require("dotenv").config();
const { request } = require("undici");
const fs = require("fs");
const path = require("path");

const CONFIG_PATH = path.resolve(__dirname, "../figma.config.json");
const OUTPUT_DIR = path.resolve(__dirname, "../icons/svg");

function assert(value, msg) {
	if (!value) {
		throw new Error(msg);
	}
}

function toKebabCase(name) {
	return name
		.trim()
		.replace(/\s+/g, "-")
		.replace(/[^a-zA-Z0-9\-]/g, "")
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.toLowerCase();
}

function normalizeNodeIdFromUrl(id) {
	if (!id) return id;
	try {
		const decoded = decodeURIComponent(id);
		// URLs recentes usam 1-2; API aceita 1:2
		if (/^\d+[\-:]\d+(?:[\-:]\d+)*$/.test(decoded)) {
			return decoded.replace(/-/g, ":");
		}
		return decoded;
	} catch {
		return id;
	}
}

function parseFigmaFrameUrl(frameUrl) {
	try {
		const url = new URL(frameUrl);
		const pathName = url.pathname;
		let fileKey = null;
		let m = pathName.match(/\/file\/([a-zA-Z0-9]+)\//);
		if (!m) m = pathName.match(/\/design\/([a-zA-Z0-9]+)\//);
		if (m) fileKey = m[1];
		const nodeParam = url.searchParams.get("node-id") || url.searchParams.get("node_id");
		const nodeId = normalizeNodeIdFromUrl(nodeParam);
		return { fileKey, nodeId };
	} catch {
		return { fileKey: null, nodeId: null };
	}
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseRetryAfter(headerValue) {
	if (!headerValue) return null;
	const seconds = Number(headerValue);
	if (!Number.isNaN(seconds)) return seconds * 1000;
	const date = new Date(headerValue);
	const diff = date.getTime() - Date.now();
	return diff > 0 ? diff : null;
}

async function requestWithRetry(url, options, { maxRetries = 5, baseDelayMs = 500 } = {}) {
	let attempt = 0;
	let delay = baseDelayMs;
	while (true) {
		const res = await request(url, options);
		if (res.statusCode >= 200 && res.statusCode < 300) {
			return res;
		}
		const bodyText = await res.body.text();
		if (res.statusCode === 429 && attempt < maxRetries) {
			const retryAfterMs = parseRetryAfter(res.headers?.["retry-after"]) || delay;
			// jitter simples
			const jitter = Math.floor(Math.random() * 200);
			await sleep(retryAfterMs + jitter);
			attempt++;
			delay = Math.min(delay * 2, 8000);
			continue;
		}
		throw new Error(`HTTP ${res.statusCode}: ${bodyText}`);
	}
}

async function fetchJsonWithRetry(url, headers, retryOpts) {
	const res = await requestWithRetry(url, { headers }, retryOpts);
	return res.body.json();
}

async function fetchTextWithRetry(url, headers, retryOpts) {
	const res = await requestWithRetry(url, { headers }, retryOpts);
	return res.body.text();
}

function chunk(array, size) {
	const out = [];
	for (let i = 0; i < array.length; i += size) {
		out.push(array.slice(i, i + size));
	}
	return out;
}

async function runQueue(tasks, concurrency) {
	const executing = new Set();
	const results = [];
	for (const task of tasks) {
		const p = Promise.resolve().then(task);
		results.push(p);
		executing.add(p);
		p.finally(() => executing.delete(p));
		if (executing.size >= concurrency) {
			await Promise.race(executing);
		}
	}
	await Promise.allSettled(results);
}

async function main() {
	const token = process.env.FIGMA_TOKEN || process.env.FIGMA_ACCESS_TOKEN;
	assert(token, "Defina FIGMA_TOKEN ou FIGMA_ACCESS_TOKEN no ambiente (ou em .env).");

	if (!fs.existsSync(CONFIG_PATH)) {
		throw new Error(`Arquivo de configuração não encontrado: ${CONFIG_PATH}`);
	}
	const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
	let { fileKey, nodeIds, scale = 1, frameUrl, batchSize = 100, downloadConcurrency = 6, onlyNew = true } = config;

	const base = "https://api.figma.com/v1";
	const headers = { "X-Figma-Token": token };

	let namesByNode = {};

	// Se frameUrl for fornecido, derive fileKey e colete os filhos do frame como nodeIds
	if (frameUrl) {
		const parsed = parseFigmaFrameUrl(frameUrl);
		assert(parsed.fileKey && parsed.nodeId, "frameUrl inválido: não foi possível extrair fileKey e node-id");
		fileKey = parsed.fileKey;
		// Busca o frame e pega filhos imediatos
		const frameMeta = await fetchJsonWithRetry(`${base}/files/${fileKey}/nodes?ids=${encodeURIComponent(parsed.nodeId)}`, headers);
		const frameNode = frameMeta.nodes?.[parsed.nodeId]?.document;
		assert(frameNode && Array.isArray(frameNode.children), "frameUrl não aponta para um frame válido com filhos");
		nodeIds = frameNode.children.map((c) => c.id);
		for (const child of frameNode.children) {
			namesByNode[child.id] = toKebabCase(child.name || child.id);
		}
	} else {
		assert(fileKey, "Config fileKey ausente em figma.config.json");
		assert(Array.isArray(nodeIds) && nodeIds.length > 0, "Config nodeIds deve ser um array com IDs dos frames/páginas que contêm ícones");
		// Busca nomes dos nodes
		const nodesMeta = await fetchJsonWithRetry(`${base}/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeIds.join(","))}`, headers);
		for (const nodeId of nodeIds) {
			const node = nodesMeta.nodes?.[nodeId]?.document;
			const name = node?.name || nodeId;
			namesByNode[nodeId] = toKebabCase(name);
		}
	}

	if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

	// Baixa imagens SVG em batches para reduzir chamadas e erros 429
	const batches = chunk(nodeIds, Math.max(1, Math.min(Number(batchSize) || 100, 100)));
	for (const ids of batches) {
		const idsParam = encodeURIComponent(ids.join(","));
		const imagesResp = await fetchJsonWithRetry(`${base}/images/${fileKey}?ids=${idsParam}&format=svg&scale=${scale}`, headers);
		const images = imagesResp.images || {};

		const tasks = [];
		for (const id of ids) {
			const filename = `${namesByNode[id] || id}.svg`;
			const outPath = path.join(OUTPUT_DIR, filename);
			if (onlyNew && fs.existsSync(outPath)) {
				console.log(`Ignorado (já existe): ${outPath}`);
				continue;
			}
			const imageUrl = images[id];
			if (!imageUrl) {
				console.warn(`Nenhuma URL de imagem para node ${id}`);
				continue;
			}
			tasks.push(async () => {
				const svg = await fetchTextWithRetry(imageUrl);
				fs.writeFileSync(outPath, svg, "utf8");
				console.log(`Baixado: ${outPath}`);
				// pequeno atraso para aliviar a CDN
				await sleep(30);
			});
		}

		await runQueue(tasks, Math.max(1, Number(downloadConcurrency) || 6));
		// breve pausa entre batches
		await sleep(200);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
