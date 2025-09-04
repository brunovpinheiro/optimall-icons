#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src');
const OUT_FILE = path.join(SRC_DIR, 'index.js');

if (!fs.existsSync(SRC_DIR)) {
  console.error('Pasta src/ não encontrada');
  process.exit(1);
}

const files = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith('Icon.js'))
  .sort();

const body = files
  .map((f) => {
    const name = path.basename(f, '.js');
    return `export { default as ${name} } from './${f}';`;
  })
  .join('\n') + '\n';

fs.writeFileSync(OUT_FILE, body, 'utf8');
console.log(`index.js atualizado com ${files.length} ícones`);
