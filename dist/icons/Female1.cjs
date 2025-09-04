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

// src/icons/Female1.tsx
var Female1_exports = {};
__export(Female1_exports, {
  Female1: () => Female1,
  default: () => Female1_default
});
module.exports = __toCommonJS(Female1_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Female1 = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.156 8.906C20.156 4.41 16.497.75 12 .75S3.844 4.41 3.844 8.906c0 4.148 3.112 7.583 7.125 8.091v1.472H9.28a1.031 1.031 0 1 0 0 2.062h1.688v1.688a1.031 1.031 0 1 0 2.062 0V20.53h1.688a1.031 1.031 0 1 0 0-2.062H13.03v-1.472c4.013-.508 7.125-3.943 7.125-8.09m-14.25 0A6.1 6.1 0 0 1 12 2.812a6.1 6.1 0 0 1 6.094 6.094A6.1 6.1 0 0 1 12 15a6.1 6.1 0 0 1-6.094-6.094" }) });
});
Female1.displayName = "Female1";
var Female1_default = Female1;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Female1
});
//# sourceMappingURL=Female1.cjs.map