#!/usr/bin/env node
/* eslint-disable */
const { transform } = require("@svgr/core");
const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");

const SVG_INPUT_DIR = path.resolve(__dirname, "../icons/svg");
const OUT_DIR = path.resolve(__dirname, "../src");

function toComponentName(fileName) {
	const noExt = fileName.replace(/\.svg$/i, "");
	const base = noExt
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean)
		.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
		.join("");
	return base.endsWith("Icon") ? base : `${base}Icon`;
}

function toAriaLabel(fileName) {
	const noExt = fileName.replace(/\.svg$/i, "");
	return noExt.replace(/[-_]+/g, ", ");
}

async function build() {
	if (!fs.existsSync(SVG_INPUT_DIR)) {
		fs.mkdirSync(SVG_INPUT_DIR, { recursive: true });
	}
	if (!fs.existsSync(OUT_DIR)) {
		fs.mkdirSync(OUT_DIR, { recursive: true });
	}

	const svgFiles = await fg(["**/*.svg"], { cwd: SVG_INPUT_DIR, absolute: true });

	for (const filePath of svgFiles) {
		const fileName = path.basename(filePath);
		const componentName = toComponentName(fileName);
		const ariaDefault = toAriaLabel(fileName);
		const svgCode = fs.readFileSync(filePath, "utf8");

		const code = await transform(
			svgCode,
			{
				icon: true,
				typescript: false,
				ref: true,
				expandProps: "end",
				plugins: [require("@svgr/plugin-svgo"), require("@svgr/plugin-jsx")],
				svgoConfig: {
					multipass: true,
					plugins: [
						{ name: "preset-default", params: { overrides: { removeViewBox: false } } },
						{ name: "convertColors", params: { currentColor: true } },
					],
				},
				jsxRuntime: "classic",
				template: (variables, { tpl }) => {
					const name = variables.componentName && variables.componentName.name ? variables.componentName.name : String(variables.componentName || "Icon");
					const jsx = variables.jsx;
					return tpl`
import React, { forwardRef } from 'react';

export const ${name} = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
  ${jsx}
));

export default ${name};
`;
				},
				replaceAttrValues: {
					"#000": "currentColor",
					"#000000": "currentColor",
					black: "currentColor",
				},
				svgProps: {
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: "{className}",
					style: "{style}",
					"aria-label": `{ariaLabel || "${ariaDefault}"}`,
					fill: "none",
				},
				memo: false,
				prettier: true,
			},
			{ componentName }
		);

		const outFile = path.join(OUT_DIR, `${componentName}.js`);
		fs.writeFileSync(outFile, code, "utf8");
		console.log(`Gerado: ${outFile}`);
	}

	console.log(`Gerados ${svgFiles.length} ícones (.js) em src/`);
}

build().catch((err) => {
	console.error(err);
	process.exit(1);
});
