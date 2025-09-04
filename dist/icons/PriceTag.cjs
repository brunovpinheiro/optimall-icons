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

// src/icons/PriceTag.tsx
var PriceTag_exports = {};
__export(PriceTag_exports, {
  PriceTag: () => PriceTag,
  default: () => PriceTag_default
});
module.exports = __toCommonJS(PriceTag_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PriceTag = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.4 8.81c-1.32 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4 2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4m0-3c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9.896 17.81H9.9h-.01zm-.636-.26a.94.94 0 0 0 .636.26.9.9 0 0 0 .634-.26.9.9 0 0 0 0-1.27l-3-3a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.71 22.81c-.88 0-1.76-.29-2.5-.86a35 35 0 0 1-6.35-6.35c-1.2-1.55-1.14-3.72.15-5.15 2.74-3.07 5.62-5.88 8.78-8.6.46-.39 1.01-.63 1.6-.68 3.31-.3 7.58-.35 9.09 1.16s1.46 5.78 1.16 9.09c-.05.59-.29 1.14-.68 1.6a93 93 0 0 1-8.6 8.78c-.75.67-1.69 1.01-2.65 1.01M3.35 11.65c-.71.79-.73 1.99-.06 2.85 1.77 2.28 3.74 4.25 6.03 6.03.87.67 2.06.64 2.85-.06a91 91 0 0 0 8.43-8.61c.15-.17.24-.38.25-.59.35-3.84.1-6.92-.64-7.66-.73-.73-3.81-.99-7.66-.64-.21.02-.42.11-.59.26-3.1 2.66-5.92 5.42-8.61 8.43z", clipRule: "evenodd" })
  ] });
});
PriceTag.displayName = "PriceTag";
var PriceTag_default = PriceTag;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PriceTag
});
//# sourceMappingURL=PriceTag.cjs.map