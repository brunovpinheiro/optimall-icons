"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/AnalisarNotas.tsx
var AnalisarNotas_exports = {};
__export(AnalisarNotas_exports, {
  AnalisarNotas: () => AnalisarNotas,
  default: () => AnalisarNotas_default
});
module.exports = __toCommonJS(AnalisarNotas_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var AnalisarNotas = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.91 9.9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.52 9.99c.71-1.01 2.67-3.34 5.38-3.34s4.66 2.34 5.38 3.34l.005.007c.179.248.365.507.365.903s-.186.655-.365.903l-.005.007c-.71 1.01-2.68 3.34-5.38 3.34s-4.66-2.34-5.38-3.34l-.005-.007c-.179-.248-.365-.507-.365-.903s.186-.655.365-.903zm5.38 3.66c2.01 0 3.58-1.9 4.16-2.71.01-.01.03-.03.03-.04-.01-.01-.03-.04-.03-.04-.58-.82-2.15-2.71-4.16-2.71s-3.58 1.9-4.16 2.71c-.01.01-.03.03-.03.04l.015.02.015.02c.58.82 2.15 2.71 4.16 2.71", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M19.66 2.15C18.52 1 16.88 1 13.9 1h-4C6.92 1 5.28 1 4.14 2.15S3 4.96 3 7.95v10.59c0 1.72 0 2.76.88 3.32 1.13.73 2.41-.16 3.17-.69a9 9 0 0 1 .83-.54c.062.015.23.12.41.231l.16.099 1.92 1.21c.6.38.99.62 1.54.62.545 0 .933-.246 1.525-.62l1.925-1.22c.18-.12.49-.31.53-.33.062.015.23.12.41.231l.16.099q.135.09.3.21c.76.53 2.04 1.42 3.17.69.88-.56.88-1.6.88-3.32V7.95c0-3 0-4.65-1.14-5.8zM19 18.55c0 .74 0 1.5-.08 1.79-.29-.04-.9-.47-1.14-.64-.14-.1-.27-.19-.37-.25l-.046-.028c-.534-.335-.898-.562-1.404-.582-.553-.036-.942.207-1.42.506l-.15.094-1.92 1.21-.388.247-.162.103c-.073-.016-.26-.132-.467-.261l-.143-.089-1.91-1.21-.044-.028c-.536-.335-.9-.562-1.406-.572h-.06c-.55 0-.98.27-1.51.61q-.08.052-.168.114a7 7 0 0 1-.202.136c-.24.17-.85.59-1.14.64-.08-.29-.08-1.05-.08-1.79V7.95c0-2.78.02-3.93.62-4.53.59-.6 1.73-.62 4.48-.62h4c2.75 0 3.89.02 4.48.62s.62 1.75.62 4.53v10.59z", clipRule: "evenodd" })
  ] });
});
AnalisarNotas.displayName = "AnalisarNotas";
var AnalisarNotas_default = AnalisarNotas;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnalisarNotas
});
//# sourceMappingURL=AnalisarNotas.cjs.map