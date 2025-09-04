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

// src/icons/ArrowGoBack.tsx
var ArrowGoBack_exports = {};
__export(ArrowGoBack_exports, {
  ArrowGoBack: () => ArrowGoBack,
  default: () => ArrowGoBack_default
});
module.exports = __toCommonJS(ArrowGoBack_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowGoBack = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M5.738 15.8H15.4c2.98 0 5.4-2.42 5.4-5.4S18.38 5 15.4 5h-4.5c-.5 0-.9.4-.9.9s.4.9.9.9h4.5c1.99 0 3.6 1.62 3.6 3.6S17.39 14 15.4 14H5.76a23 23 0 0 1 1.68-1.37c.4-.3.48-.86.19-1.26-.3-.4-.86-.48-1.26-.19C3 13.65 3 14.6 3 14.9s0 1.24 3.37 3.72c.16.12.34.18.53.18v.02c.28 0 .55-.13.73-.37.3-.4.21-.97-.19-1.26a23 23 0 0 1-1.702-1.39" }) });
});
ArrowGoBack.displayName = "ArrowGoBack";
var ArrowGoBack_default = ArrowGoBack;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowGoBack
});
//# sourceMappingURL=ArrowGoBack.cjs.map