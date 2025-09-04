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

// src/icons/Checkbox.tsx
var Checkbox_exports = {};
__export(Checkbox_exports, {
  Checkbox: () => Checkbox,
  default: () => Checkbox_default
});
module.exports = __toCommonJS(Checkbox_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Checkbox = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.26 16.04c.17.17.4.26.64.26v.01h.02c.24 0 .47-.11.64-.29l5.5-6A.9.9 0 0 0 17 8.75a.89.89 0 0 0-1.27.05l-4.86 5.31-1.84-1.84a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.65 21.14c1.66 1.66 4.03 1.66 8.75 1.66v.01c4.73 0 7.1 0 8.75-1.66s1.65-4.02 1.65-8.75 0-7.1-1.65-8.75C19.49 2 17.12 2 12.4 2h-.084C7.652 2 5.29 2 3.65 3.65 2 5.31 2 7.66 2 12.39s0 7.1 1.65 8.75M4.93 4.93C6.05 3.8 8.18 3.8 12.4 3.8s6.34 0 7.47 1.13C21 6.05 21 8.18 21 12.4s-.01 6.34-1.13 7.47S16.62 21 12.4 21s-6.34 0-7.47-1.13S3.8 16.62 3.8 12.4s.01-6.34 1.13-7.47", clipRule: "evenodd" })
  ] });
});
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
//# sourceMappingURL=Checkbox.cjs.map