#!/usr/bin/env node
/* eslint-disable */
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "../src");
const DIST_DIR = path.resolve(__dirname, "../dist");

function cleanDir(dir) {
	if (fs.existsSync(dir)) {
		fs.rmSync(dir, { recursive: true, force: true });
	}
	fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
	if (!fs.existsSync(src)) {
		console.error(`Pasta de origem não encontrada: ${src}`);
		process.exit(1);
	}
	fs.cpSync(src, dest, { recursive: true });
}

function generateIndexFile() {
	const files = fs.readdirSync(DIST_DIR);
	const iconFiles = files.filter((file) => file.endsWith(".js") && file !== "index.js");

	const exports = iconFiles
		.map((file) => {
			const iconName = path.basename(file, ".js");
			return `export { default as ${iconName} } from './${iconName}';`;
		})
		.sort()
		.join("\n");

	const indexPath = path.join(DIST_DIR, "index.js");
	fs.writeFileSync(indexPath, exports + "\n");

	console.log(`Arquivo index.js criado com ${iconFiles.length} exportações de ícones.`);
}

function build() {
	cleanDir(DIST_DIR);
	copyDir(SRC_DIR, DIST_DIR);
	generateIndexFile();
	console.log("dist/ gerado copiando arquivos JSX diretamente de src/.");
}

build();
