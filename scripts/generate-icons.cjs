#!/usr/bin/env node
/* eslint-disable */
const { transform } = require("@svgr/core");
const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");

const SVG_INPUT_DIR = path.resolve(__dirname, "../icons/svg");
const OUT_DIR = path.resolve(__dirname, "../src/icons");

/**
 * Converte nomes de arquivo em nomes de componentes (PascalCase)
 * ex: align-horizontal-distribute-start.svg -> AlignHorizontalDistributeStart
 */
function toComponentName(fileName) {
	const noExt = fileName.replace(/\.svg$/i, "");
	return noExt
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean)
		.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
		.join("");
}

async function build() {
	if (!fs.existsSync(SVG_INPUT_DIR)) {
		fs.mkdirSync(SVG_INPUT_DIR, { recursive: true });
	}
	if (!fs.existsSync(OUT_DIR)) {
		fs.mkdirSync(OUT_DIR, { recursive: true });
	}

	const svgFiles = await fg(["**/*.svg"], { cwd: SVG_INPUT_DIR, absolute: true });

	const exports = [];

	for (const filePath of svgFiles) {
		const fileName = path.basename(filePath);
		const componentName = toComponentName(fileName);
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
					const name = variables.componentName && variables.componentName.name
						? variables.componentName.name
						: String(variables.componentName || "Icon");
					const jsx = variables.jsx;
					return tpl`
import * as React from 'react';

const ${name} = React.forwardRef(function ${name}(props, ref) {
  const {
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    className,
    ...rest
  } = props;

  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth
    ? (Number(strokeWidthPx) * 24) / Number(size)
    : strokeWidthPx;

  return ${jsx}
});

${name}.displayName = '${name}';

export { ${name} };
export default ${name};
`;
				},
				// Substituições para stroke/fill
				replaceAttrValues: {
					"#000": "currentColor",
					"#000000": "currentColor",
					black: "currentColor",
				},
				svgProps: {
					xmlns: "http://www.w3.org/2000/svg",
					role: "img",
					width: "{size}",
					height: "{size}",
					stroke: "{color}",
					strokeWidth: "{computedStrokeWidth}",
					className: "{className}",
					fill: "none",
				},
				memo: false,
				prettier: true,
			},
			{ componentName }
		);

		const outFile = path.join(OUT_DIR, `${componentName}.js`);
		fs.writeFileSync(outFile, code, "utf8");
		exports.push(`export { ${componentName} } from './${componentName}.js';`);
	}

	const indexFile = path.join(OUT_DIR, "index.js");
	fs.writeFileSync(indexFile, exports.join("\n") + "\n", "utf8");
	console.log(`Gerados ${exports.length} ícones (.js).`);
}

build().catch((err) => {
	console.error(err);
	process.exit(1);
});
