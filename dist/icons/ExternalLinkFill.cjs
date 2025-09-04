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

// src/icons/ExternalLinkFill.tsx
var ExternalLinkFill_exports = {};
__export(ExternalLinkFill_exports, {
  ExternalLinkFill: () => ExternalLinkFill,
  default: () => ExternalLinkFill_default
});
module.exports = __toCommonJS(ExternalLinkFill_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ExternalLinkFill = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M3.58 20.22c1.58 1.58 3.83 1.58 8.32 1.58l-.02-.01c4.49 0 6.74 0 8.32-1.58 1.5-1.5 1.58-3.69 1.58-7.42 0-.49-.4-.9-.9-.9s-.9.4-.9.9c0 3.55-.1 5.2-1.05 6.15-1.05 1.05-3.06 1.05-7.04 1.05s-5.99 0-7.04-1.05S3.8 15.89 3.8 11.9s0-5.99 1.05-7.05C5.8 3.91 7.45 3.8 11 3.8c.5 0 .9-.4.9-.9S11.5 2 11 2c-3.74 0-5.92.08-7.42 1.58C2 5.16 2 7.41 2 11.9s0 6.74 1.58 8.32" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.32 13.6c.17.17.4.26.63.26l-.01.01c.23 0 .46-.09.64-.27l8.35-8.4c.05.6.08 1.47.06 2.72 0 .49.39.91.89.91h.01c.49 0 .9-.4.9-.89.06-4.41-.41-4.89-.7-5.18-.28-.28-.75-.75-5.17-.7-.5 0-.89.41-.89.91.01.49.41.89.9.89h.01c1.26-.02 2.13.02 2.73.06l-8.35 8.41a.9.9 0 0 0 0 1.27" })
  ] });
});
ExternalLinkFill.displayName = "ExternalLinkFill";
var ExternalLinkFill_default = ExternalLinkFill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExternalLinkFill
});
//# sourceMappingURL=ExternalLinkFill.cjs.map