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

// src/icons/CheckmarkBadge.tsx
var CheckmarkBadge_exports = {};
__export(CheckmarkBadge_exports, {
  CheckmarkBadge: () => CheckmarkBadge,
  default: () => CheckmarkBadge_default
});
module.exports = __toCommonJS(CheckmarkBadge_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CheckmarkBadge = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.1 15.07a.9.9 0 0 0 .6.23h.07a.9.9 0 0 0 .62-.32l4.2-5c.32-.38.27-.95-.11-1.27a.903.903 0 0 0-1.27.11l-3.6 4.29-1.11-.99a.9.9 0 0 0-1.2 1.34z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.25 21.2c.63.68 1.49 1.6 2.65 1.6h-.01c1.147 0 1.986-.893 2.612-1.56l.038-.04c.1-.12.2-.22.3-.32.52-.52.76-.62 1.5-.62h.38c.84.03 2 .06 2.8-.73.799-.788.771-1.936.751-2.783v-.417c0-.74.1-.98.67-1.55 1.16-1.16 1.86-1.86 1.86-2.9s-.7-1.74-1.86-2.9c-.56-.57-.67-.81-.67-1.55v-.39c.02-.858.046-2.013-.75-2.81-.788-.778-1.915-.751-2.761-.73h-.04c-.85.02-1.35-.09-1.93-.67-1.16-1.16-1.86-1.86-2.9-1.86s-1.74.7-2.9 1.86c-.58.59-1.08.7-1.92.67h-.04c-.855-.021-1.992-.048-2.78.75-.79.8-.76 1.95-.73 2.8v.38c0 .64-.18 1.06-.67 1.55-1.16 1.16-1.86 1.86-1.86 2.9s.7 1.74 1.86 2.9c.56.57.67.81.67 1.55v.39c-.02.858-.047 2.013.75 2.81.788.778 1.926.751 2.763.73h.417c.74 0 .98.1 1.5.62.09.1.19.21.3.32m.97-1.59c-.86-.86-1.56-1.15-2.77-1.15h-.4c-.52.02-1.23.04-1.48-.21-.236-.236-.222-.892-.212-1.402l.002-.088v-.43c0-1.23-.29-1.91-1.2-2.82-.78-.77-1.34-1.33-1.34-1.62s.56-.85 1.34-1.63c.83-.83 1.2-1.7 1.2-2.82v-.43c-.02-.52-.03-1.24.21-1.48.235-.234.926-.22 1.443-.21h.467c1.12 0 1.99-.37 2.82-1.2.77-.78 1.33-1.34 1.62-1.34s.85.56 1.62 1.34c.83.83 1.7 1.2 2.82 1.2h.43l.09-.002c.508-.01 1.154-.024 1.39.212s.223.892.212 1.402l-.002.088v.43c0 1.22.29 1.91 1.2 2.82.77.77 1.33 1.33 1.33 1.62s-.55.85-1.33 1.63c-.91.91-1.2 1.59-1.2 2.82v.43l.001.04c.01.524.023 1.206-.22 1.45-.237.236-.883.223-1.392.212l-.089-.002c-1.5-.04-2.25.19-3.2 1.14-.11.11-.23.24-.35.37l-.052.055c-.378.399-.915.965-1.278.965-.38 0-.95-.61-1.33-1.02-.12-.14-.24-.26-.35-.37", clipRule: "evenodd" })
  ] });
});
CheckmarkBadge.displayName = "CheckmarkBadge";
var CheckmarkBadge_default = CheckmarkBadge;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckmarkBadge
});
//# sourceMappingURL=CheckmarkBadge.cjs.map