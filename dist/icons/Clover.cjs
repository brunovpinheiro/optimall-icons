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

// src/icons/Clover.tsx
var Clover_exports = {};
__export(Clover_exports, {
  Clover: () => Clover,
  default: () => Clover_default
});
module.exports = __toCommonJS(Clover_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Clover = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M21.66 6.39c-.83-.83-2.01-1.18-3.15-1.07.01-.14.04-.27.04-.42 0-1.04-.41-2.02-1.14-2.76C15.94.67 13.38.66 11.9 2.13a3.91 3.91 0 0 0-5.51.01c-.87.87-1.22 2.04-1.1 3.18-1.14-.11-2.31.24-3.15 1.07a3.91 3.91 0 0 0-.01 5.51 3.91 3.91 0 0 0 .01 5.51c.74.74 1.72 1.14 2.76 1.14.13 0 .25-.02.38-.04-.11 1.12.25 2.28 1.1 3.14a3.91 3.91 0 0 0 5.51.01 3.914 3.914 0 0 0 5.51-.01c.74-.74 1.14-1.72 1.14-2.76 0-.13-.02-.25-.04-.38.13.01.25.04.38.04 1 0 2-.38 2.76-1.14a3.91 3.91 0 0 0 .01-5.51 3.91 3.91 0 0 0-.01-5.51zm-14-2.97c.41-.41.95-.62 1.49-.62s1.08.21 1.49.61l.62.63c.17.17.4.26.64.26a.9.9 0 0 0 .64-.26l.63-.63a2.112 2.112 0 0 1 3.6 1.49c0 .56-.22 1.09-.62 1.49l-4.24 4.24-4.24-4.24c-.82-.82-.82-2.16 0-2.98zM3.41 16.14c-.82-.82-.82-2.16 0-2.98l.62-.62a.9.9 0 0 0 0-1.27l-.62-.63c-.4-.4-.62-.93-.62-1.49s.22-1.09.62-1.49.93-.62 1.49-.62 1.09.22 1.49.62l4.24 4.24-4.24 4.24a2.1 2.1 0 0 1-2.97 0zm13.34 2.76c0 .56-.22 1.09-.62 1.49-.8.79-2.18.79-2.97 0l-.63-.63a.9.9 0 0 0-.64-.26c-.24 0-.47.1-.64.26l-.62.63a2.1 2.1 0 0 1-2.97 0c-.82-.82-.82-2.16 0-2.98l4.24-4.24 4.24 4.24c.4.4.62.93.62 1.49zm3.01-6.36.62.62c.82.82.82 2.16 0 2.98s-2.15.82-2.98 0l-4.24-4.24 4.24-4.24c.79-.8 2.18-.79 2.98 0 .4.4.62.93.62 1.49s-.22 1.09-.62 1.49l-.62.63a.9.9 0 0 0 0 1.27" }) });
});
Clover.displayName = "Clover";
var Clover_default = Clover;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Clover
});
//# sourceMappingURL=Clover.cjs.map