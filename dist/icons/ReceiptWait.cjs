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

// src/icons/ReceiptWait.tsx
var ReceiptWait_exports = {};
__export(ReceiptWait_exports, {
  ReceiptWait: () => ReceiptWait,
  default: () => ReceiptWait_default
});
module.exports = __toCommonJS(ReceiptWait_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ReceiptWait = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 13.1a1.9 1.9 0 0 1 1.9 1.9 3.9 3.9 0 0 1-1.409 3 3.9 3.9 0 0 1 1.41 3A1.9 1.9 0 0 1 20 22.9h-4a1.9 1.9 0 0 1-1.9-1.9c0-1.206.548-2.285 1.408-3a3.9 3.9 0 0 1-1.408-3 1.9 1.9 0 0 1 1.9-1.9zm-2 5.8a2.1 2.1 0 0 0-2.1 2.1.1.1 0 0 0 .1.1h4a.1.1 0 0 0 .1-.1 2.1 2.1 0 0 0-2.1-2.1m-2-4a.1.1 0 0 0-.1.1 2.1 2.1 0 0 0 1.885 2.089l.215.01.215-.01A2.1 2.1 0 0 0 20.1 15a.1.1 0 0 0-.1-.1z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M14.26 1c2.82 0 4.38 0 5.47 1.16C20.8 3.3 20.8 4.93 20.8 7.9v3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3c0-2.5 0-3.88-.58-4.5-.54-.58-1.6-.6-4.16-.6H9.55c-2.57 0-3.63.03-4.17.6-.58.61-.58 1.99-.58 4.5v10.64c0 .74 0 1.5.08 1.79.29-.05.9-.47 1.14-.64q.108-.07.202-.136.088-.062.168-.114c.57-.37 1-.63 1.57-.61.506.02.87.247 1.404.581l.046.03 1.91 1.21.2.122c.18.111.343.212.41.227l-.01.01c.5 0 .89.4.89.9s-.41.9-.91.9c-.545 0-.934-.246-1.525-.62L8.45 20.97l-.072-.045c-.216-.136-.426-.267-.498-.285a4 4 0 0 0-.187.116c-.106.067-.237.15-.343.214q-.135.09-.3.21l-.02.014c-.763.532-2.02 1.41-3.15.676C3 21.31 3 20.27 3 18.55V7.9c0-2.97 0-4.6 1.07-5.74C5.17 1 6.72 1 9.55 1z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.9 10c.5 0 .9.4.9.9s-.4.9-.9.9h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9zm4-4c.5 0 .9.4.9.9s-.4.9-.9.9h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" })
  ] });
});
ReceiptWait.displayName = "ReceiptWait";
var ReceiptWait_default = ReceiptWait;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReceiptWait
});
//# sourceMappingURL=ReceiptWait.cjs.map