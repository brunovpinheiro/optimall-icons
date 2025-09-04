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

// src/icons/Chart.tsx
var Chart_exports = {};
__export(Chart_exports, {
  Chart: () => Chart,
  default: () => Chart_default
});
module.exports = __toCommonJS(Chart_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Chart = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.5 17.4c0 .5.4.9.9.9s.9-.4.9-.9v-10c0-.5-.4-.9-.9-.9s-.9.4-.9.9zm-5 0c0 .5.4.9.9.9s.9-.4.9-.9v-4c0-.5-.4-.9-.9-.9s-.9.4-.9.9zm10.9.9c-.5 0-.9-.4-.9-.9v-6c0-.5.4-.9.9-.9s.9.4.9.9v6c0 .5-.4.9-.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.65 21.15c1.66 1.65 4.03 1.65 8.75 1.65s7.09 0 8.75-1.65c1.65-1.66 1.65-4.02 1.65-8.75s0-7.09-1.65-8.75C19.49 2 17.12 2 12.4 2S5.31 2 3.66 3.65C2 5.31 1.99 7.67 1.99 12.4s0 7.1 1.66 8.75M4.93 4.93C6.06 3.8 8.18 3.8 12.4 3.8s6.34 0 7.47 1.13S21 8.18 21 12.4s0 6.34-1.13 7.47S16.62 21 12.4 21s-6.34 0-7.47-1.13S3.8 16.62 3.8 12.4s0-6.34 1.13-7.47", clipRule: "evenodd" })
  ] });
});
Chart.displayName = "Chart";
var Chart_default = Chart;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Chart
});
//# sourceMappingURL=Chart.cjs.map