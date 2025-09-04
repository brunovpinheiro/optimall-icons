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

// src/icons/Invoice.tsx
var Invoice_exports = {};
__export(Invoice_exports, {
  Invoice: () => Invoice,
  default: () => Invoice_default
});
module.exports = __toCommonJS(Invoice_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Invoice = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.36 22.8c-3.45 0-5.19 0-6.53-1.08-.27-.22-.52-.47-.74-.74-1.08-1.34-1.08-3.08-1.08-6.53V9.91C3 5.89 3 3.87 4.44 2.44 5.87 1 7.89 1 11.9 1s6.03 0 7.47 1.44C20.8 3.88 20.8 5.89 20.8 9.9v3.34c0 .91 0 1.41-.22 1.94s-.57.89-1.21 1.53l-4.74 4.74c-.55.55-.86.86-1.3 1.07-.09.04-.19.08-.28.12-.47.17-.9.17-1.68.17zm.54-20c-3.52 0-5.28 0-6.19.91S4.8 6.38 4.8 9.9v4.54c0 3.03 0 4.55.69 5.4.14.17.29.33.47.47.85.69 2.37.69 5.4.69H12v-.09c0-2.98 0-4.61 1.14-5.76 1.14-1.14 2.78-1.14 5.76-1.14h.09v-4.1c0-3.52 0-5.28-.91-6.19s-2.67-.91-6.19-.91zm5.82 13c-1.92.02-2.81.11-3.31.61s-.59 1.39-.61 3.31z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.9 14.8c-.5 0-.9-.4-.9-.9v-.22c-.81-.21-1.48-.72-1.8-1.4a.903.903 0 0 1 .43-1.2c.45-.21.99-.02 1.2.43.11.23.52.48 1.07.48.67 0 1.1-.36 1.1-.6s-.43-.6-1.1-.6c-1.63 0-2.9-1.05-2.9-2.4 0-1.08.83-1.98 2-2.29v-.21c0-.5.4-.9.9-.9s.9.4.9.9v.22c.81.22 1.48.72 1.8 1.4.21.45.02.99-.43 1.2s-.99.02-1.2-.43c-.11-.23-.52-.48-1.07-.48-.67 0-1.1.36-1.1.6s.43.6 1.1.6c1.63 0 2.9 1.05 2.9 2.4 0 1.08-.83 1.98-2 2.29v.21c0 .5-.4.9-.9.9" })
  ] });
});
Invoice.displayName = "Invoice";
var Invoice_default = Invoice;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Invoice
});
//# sourceMappingURL=Invoice.cjs.map