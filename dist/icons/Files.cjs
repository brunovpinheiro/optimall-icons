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

// src/icons/Files.tsx
var Files_exports = {};
__export(Files_exports, {
  Files: () => Files,
  default: () => Files_default
});
module.exports = __toCommonJS(Files_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Files = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.4 15.8h7c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7c-.5 0-.9.4-.9.9s.4.9.9.9m0-4h4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4c-.5 0-.9.4-.9.9s.4.9.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.65 18.66c-.512.512-1.125.794-1.915.95A3.91 3.91 0 0 1 14.9 22.8h-5c-2.98 0-4.62 0-5.76-1.14S3 18.88 3 15.9v-8c0-1.907 1.377-3.5 3.189-3.835.154-.795.437-1.41.951-1.925C8.28 1 9.92 1 12.9 1h1.34c.91 0 1.4 0 1.94.22.53.22.9.59 1.52 1.21l2.66 2.66c.62.62.99.99 1.21 1.53s.22 1.03.22 1.94v4.34c0 2.98 0 4.62-1.14 5.76M12.9 19.8h1.99c.71 0 1.345 0 1.915-.015A2.1 2.1 0 0 1 14.9 21h-5c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-8a2.1 2.1 0 0 1 1.215-1.905C6 6.562 6 7.193 6 7.9v5c0 2.98 0 4.62 1.14 5.76s2.78 1.14 5.76 1.14M8.42 3.41c.59-.59 1.73-.61 4.48-.61h1.6v.6c0 2.06 0 3.2.85 4.05s1.99.85 4.05.85h.6v4.6c0 2.75-.02 3.89-.61 4.48-.6.6-1.74.62-4.49.62h-2c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-5c0-2.76.03-3.9.62-4.49M19.23 6.5l-.13-.13-2.8-2.8c0 1.43.012 2.302.32 2.61s1.18.32 2.61.32", clipRule: "evenodd" })
  ] });
});
Files.displayName = "Files";
var Files_default = Files;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Files
});
//# sourceMappingURL=Files.cjs.map