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

// src/icons/MapPin.tsx
var MapPin_exports = {};
__export(MapPin_exports, {
  MapPin: () => MapPin,
  default: () => MapPin_default
});
module.exports = __toCommonJS(MapPin_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var MapPin = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.5 10.9a4.4 4.4 0 1 0 8.8 0 4.4 4.4 0 0 0-8.8 0m1.8 0c0-1.43 1.17-2.6 2.6-2.6s2.6 1.17 2.6 2.6-1.17 2.6-2.6 2.6-2.6-1.17-2.6-2.6", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.67 21.92c.6.57 1.39.88 2.23.88v.01c.83 0 1.63-.32 2.23-.88l.92-.86c3.85-3.54 8.64-7.96 5.99-14.14C19.53 3.38 15.85 1 11.9 1S4.28 3.38 2.76 6.93C.133 13.082 4.868 17.469 8.675 20.997l.015.013c.31.282.621.573.923.857zM4.41 7.63C5.65 4.74 8.66 2.8 11.9 2.8l-.01.01c3.24 0 6.25 1.94 7.49 4.83 2.147 5.003-1.76 8.61-5.535 12.096l-.945.874c-.53.5-1.47.5-2 0l-.06-.056q-.451-.426-.93-.864l-.002-.002C6.148 16.208 2.27 12.62 4.41 7.63", clipRule: "evenodd" })
  ] });
});
MapPin.displayName = "MapPin";
var MapPin_default = MapPin;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MapPin
});
//# sourceMappingURL=MapPin.cjs.map