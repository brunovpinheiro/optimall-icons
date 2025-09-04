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

// src/icons/ZoomIn.tsx
var ZoomIn_exports = {};
__export(ZoomIn_exports, {
  ZoomIn: () => ZoomIn,
  default: () => ZoomIn_default
});
module.exports = __toCommonJS(ZoomIn_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ZoomIn = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10 14.4c0 .5.4.9.9.9s.9-.4.9-.9v-2.6h2.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.6V7.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9V10H7.4c-.5 0-.9.4-.9.9s.4.9.9.9H10z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.9 20.8c-5.46 0-9.9-4.44-9.9-9.9S5.44 1 10.9 1s9.9 4.44 9.9 9.9c0 2.41-.865 4.62-2.3 6.34l4.03 4.03a.9.9 0 0 1 0 1.27.9.9 0 0 1-.635.26.94.94 0 0 1-.635-.26l-4.032-4.032A9.86 9.86 0 0 1 10.9 20.8m0-18c-4.47 0-8.1 3.63-8.1 8.1S6.43 19 10.9 19s8.1-3.63 8.1-8.1-3.63-8.1-8.1-8.1", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M21.895 22.8h.005-.01z" })
  ] });
});
ZoomIn.displayName = "ZoomIn";
var ZoomIn_default = ZoomIn;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ZoomIn
});
//# sourceMappingURL=ZoomIn.cjs.map