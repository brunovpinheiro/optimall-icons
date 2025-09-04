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

// src/icons/FileSync.tsx
var FileSync_exports = {};
__export(FileSync_exports, {
  FileSync: () => FileSync,
  default: () => FileSync_default
});
module.exports = __toCommonJS(FileSync_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FileSync = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9.9 22.8h-.01c-2.31-.03-4.19-.16-5.45-1.43C3 19.93 3 17.92 3 13.9V9.35c0-3.44 0-5.18 1.09-6.52.22-.27.47-.52.74-.74C6.18 1 7.91 1 11.36 1c.78 0 1.21 0 1.68.17.1.03.19.07.29.12.44.21.74.51 1.29 1.06l4.75 4.75c.64.64.99.99 1.21 1.53.22.53.22 1.03.22 1.94v3.34c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-4.1h-.09c-2.98 0-4.62 0-5.76-1.14s-1.14-2.78-1.14-5.76v-.09h-.64c-3.03 0-4.55 0-5.4.69-.17.14-.33.3-.47.47-.69.85-.69 2.38-.69 5.41v4.55c0 3.52 0 5.29.91 6.2.64.64 1.67.86 4.21.9.5 0 .89.42.89.91a.9.9 0 0 1-.9.89zm3.9-18.72c.02 1.92.11 2.81.61 3.31s1.39.59 3.31.61z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.4 22.8c-1.44 0-2.79-.71-3.61-1.89a.905.905 0 0 1 .22-1.25c.41-.28.97-.18 1.25.22.49.7 1.28 1.11 2.13 1.11 1.31 0 2.43-.96 2.61-2.23a.902.902 0 0 1 1.7-.27l1 2c.22.44.04.99-.4 1.21s-.99.04-1.21-.4l-.14-.28a4.48 4.48 0 0 1-3.56 1.78zm-3.5-4c-.34 0-.65-.19-.8-.5l-1-2a.91.91 0 0 1 .4-1.21c.44-.22.98-.04 1.21.4l.14.28a4.48 4.48 0 0 1 3.56-1.78c1.44 0 2.79.71 3.61 1.89.28.41.18.97-.22 1.25-.41.28-.97.18-1.25-.22a2.59 2.59 0 0 0-2.13-1.11c-1.31 0-2.43.96-2.61 2.23-.06.39-.36.7-.75.76-.05 0-.1.01-.14.01z" })
  ] });
});
FileSync.displayName = "FileSync";
var FileSync_default = FileSync;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileSync
});
//# sourceMappingURL=FileSync.cjs.map