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

function build() {
	cleanDir(DIST_DIR);
	copyDir(SRC_DIR, DIST_DIR);
	console.log("dist/ gerado copiando arquivos JSX diretamente de src/.");
}

build();
