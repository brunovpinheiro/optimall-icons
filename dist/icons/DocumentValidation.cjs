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

// src/icons/DocumentValidation.tsx
var DocumentValidation_exports = {};
__export(DocumentValidation_exports, {
  DocumentValidation: () => DocumentValidation,
  default: () => DocumentValidation_default
});
module.exports = __toCommonJS(DocumentValidation_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var DocumentValidation = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.88 9.32h-.05a.93.93 0 0 1-.76-.5c-.42-.84-.83-1.27-.84-1.27a.91.91 0 0 1 .01-1.27.9.9 0 0 1 1.27 0c.03.03.2.2.43.51.67-.84 1.64-1.87 2.64-2.22.47-.17.98.08 1.15.55s-.08.98-.55 1.15c-.77.27-1.95 1.7-2.54 2.63-.17.26-.45.42-.76.42" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.32 22.8c-2.21 0-4.54-.06-6.18-.15-3.12-.18-4.13-3.45-4.13-5C1 16.38 1 13.84 1 11.12V6.87c.01-4.96 3.37-5.59 4.4-5.66.01 0 1.98-.29 4.53-.18.5.02.88.44.86.94s-.48.88-.94.86C7.48 2.73 5.61 3 5.59 3c-1.31.1-2.79.84-2.79 3.87v4.26c-.01 2.71-.02 5.24 0 6.51 0 .66.41 3.1 2.43 3.22 3.06.18 8.58.22 11.1 0 .05 0 2.19-.15 2.44-2.26.26-2.24.24-3.87.23-4.48v-.19c0-.5.4-.9.9-.9s.9.4.9.9v.17c0 .65.03 2.36-.25 4.71-.31 2.68-2.62 3.77-4.1 3.85-1.22.11-3.14.15-5.15.15z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M16.9 12.82c-3.26 0-5.91-2.65-5.91-5.9s2.65-5.9 5.91-5.9 5.91 2.65 5.91 5.9-2.65 5.9-5.91 5.9m0-10c-2.26 0-4.1 1.84-4.1 4.1s1.84 4.1 4.1 4.1S21 9.18 21 6.92s-1.84-4.1-4.1-4.1m-6.02 11h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9m4 4h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9" })
  ] });
});
DocumentValidation.displayName = "DocumentValidation";
var DocumentValidation_default = DocumentValidation;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DocumentValidation
});
//# sourceMappingURL=DocumentValidation.cjs.map