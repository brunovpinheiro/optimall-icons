#!/usr/bin/env node
/* eslint-disable */
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

function parseSVG(svgContent) {
	// Extract viewBox
	const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
	const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

	// Extract paths
	const pathMatches = svgContent.match(/<path[^>]*>/g) || [];
	const paths = pathMatches.map((pathTag) => {
		const dMatch = pathTag.match(/d="([^"]+)"/);
		const fillMatch = pathTag.match(/fill="([^"]+)"/);
		const strokeMatch = pathTag.match(/stroke="([^"]+)"/);
		const strokeWidthMatch = pathTag.match(/stroke-width="([^"]+)"/);
		const strokeLinecapMatch = pathTag.match(/stroke-linecap="([^"]+)"/);
		const strokeLinejoinMatch = pathTag.match(/stroke-linejoin="([^"]+)"/);
		const fillRuleMatch = pathTag.match(/fill-rule="([^"]+)"/);
		const clipRuleMatch = pathTag.match(/clip-rule="([^"]+)"/);

		const attrs = {};
		if (dMatch) attrs.d = dMatch[1];
		if (fillMatch && fillMatch[1] !== "none") {
			attrs.fill = fillMatch[1] === "#181D27" || fillMatch[1] === "#000" || fillMatch[1] === "#000000" || fillMatch[1] === "black" ? "currentColor" : fillMatch[1];
		}
		if (strokeMatch) {
			attrs.stroke = strokeMatch[1] === "#181D27" || strokeMatch[1] === "#000" || strokeMatch[1] === "#000000" || strokeMatch[1] === "black" ? "currentColor" : strokeMatch[1];
		}
		if (strokeWidthMatch) attrs.strokeWidth = strokeWidthMatch[1];
		if (strokeLinecapMatch) attrs.strokeLinecap = strokeLinecapMatch[1];
		if (strokeLinejoinMatch) attrs.strokeLinejoin = strokeLinejoinMatch[1];
		if (fillRuleMatch) attrs.fillRule = fillRuleMatch[1];
		if (clipRuleMatch) attrs.clipRule = clipRuleMatch[1];

		return attrs;
	});

	return { viewBox, paths };
}

function generateReactComponent(componentName, ariaDefault, svgData) {
	const { viewBox, paths } = svgData;

	// Generate path elements
	const pathElements = paths
		.map((pathAttrs) => {
			const attrs = Object.entries(pathAttrs)
				.map(([key, value]) => `${key}: "${value}"`)
				.join(",\n  ");
			return `/*#__PURE__*/React.createElement("path", {\n  ${attrs}\n})`;
		})
		.join(", ");

	return `function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ${componentName} = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  size = 24,
  width,
  height,
  ...props
}, ref) => {
  const iconSize = width || height || size;
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    className: className,
    "aria-label": ariaLabel || "${ariaDefault}",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "${viewBox}",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ${pathElements});
});
export default ${componentName};`;
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
		const svgContent = fs.readFileSync(filePath, "utf8");

		const svgData = parseSVG(svgContent);
		const code = generateReactComponent(componentName, ariaDefault, svgData);

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
