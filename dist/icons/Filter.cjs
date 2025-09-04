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

// src/icons/Filter.tsx
var Filter_exports = {};
__export(Filter_exports, {
  Filter: () => Filter,
  default: () => Filter_default
});
module.exports = __toCommonJS(Filter_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Filter = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.69 21.8c-.23 0-.46-.05-.67-.14-.59-.26-1-.83-1.08-1.47-.13-1.1-.39-3.46-.68-6.95 0-.06-.03-.1-.04-.11-2.4-1.79-4.13-3.72-5.38-5.2-.46-.54-.59-.99-.66-1.54-.23-1.73-.36-2.77.38-3.59C3.29 2 4.3 2 6.13 2h11.53c1.83 0 2.84 0 3.57.8.74.82.61 1.86.38 3.59-.08.65-.26 1.07-.66 1.54-1.24 1.48-2.98 3.41-5.39 5.21-.01 0-.04.05-.04.11-.25 2.74-.48 4.27-.63 5.07-.25 1.34-1.54 2.12-2.58 2.75-.25.15-.48.29-.67.43-.29.2-.62.31-.96.31zm-1.4-10.11c.44.33.71.84.76 1.4.28 3.42.54 5.75.67 6.85.2-.13.43-.27.66-.42.69-.42 1.64-1 1.74-1.55.14-.76.36-2.23.6-4.9.05-.56.33-1.07.76-1.39 2.26-1.69 3.91-3.52 5.09-4.92.18-.21.21-.3.25-.61.14-1.09.25-1.95.07-2.15-.19-.21-1.1-.21-2.24-.21H6.13c-1.14 0-2.05 0-2.24.21-.18.2-.07 1.06.07 2.15.04.31.08.4.25.61 1.18 1.4 2.83 3.23 5.08 4.92z", clipRule: "evenodd" }) });
});
Filter.displayName = "Filter";
var Filter_default = Filter;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Filter
});
//# sourceMappingURL=Filter.cjs.map