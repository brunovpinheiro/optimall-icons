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

// src/icons/CloverFill.tsx
var CloverFill_exports = {};
__export(CloverFill_exports, {
  CloverFill: () => CloverFill,
  default: () => CloverFill_default
});
module.exports = __toCommonJS(CloverFill_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CloverFill = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "m12.1 10.83 4.24-4.24c.4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49c-.82-.82-2.15-.82-2.98 0L12.1 4.87l-1.26-1.26c-.4-.4-.93-.62-1.49-.62s-1.09.22-1.49.62c-.82.82-.82 2.15 0 2.98zm0 2.54-4.24 4.24c-.82.82-.82 2.16 0 2.98s2.15.82 2.98 0l1.26-1.26 1.26 1.26c.82.82 2.16.82 2.98 0s.82-2.16 0-2.98zm7.22-1.27 1.26-1.26c.4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49c-.82-.82-2.16-.82-2.98 0l-4.24 4.24 4.24 4.24c.79.8 2.18.79 2.97 0 .4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49l-1.26-1.26zM6.59 7.86c-.82-.82-2.16-.82-2.98 0s-.82 2.15 0 2.98l1.26 1.26-1.26 1.26c-.4.4-.62.93-.62 1.49s.22 1.09.62 1.49c.79.79 2.18.79 2.98 0l4.24-4.24z" }) });
});
CloverFill.displayName = "CloverFill";
var CloverFill_default = CloverFill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CloverFill
});
//# sourceMappingURL=CloverFill.cjs.map