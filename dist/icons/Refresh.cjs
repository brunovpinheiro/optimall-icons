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

// src/icons/Refresh.tsx
var Refresh_exports = {};
__export(Refresh_exports, {
  Refresh: () => Refresh,
  default: () => Refresh_default
});
module.exports = __toCommonJS(Refresh_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Refresh = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.1 12C1.1 5.98 5.98 1.1 12 1.1c2.72 0 5.2.99 7.11 2.64V2c0-.5.4-.9.9-.9s.9.4.9.9v3.13c0 1.13-1.4 1.64-2.13.79A9.07 9.07 0 0 0 12 2.89C6.97 2.9 2.9 6.97 2.9 12s4.07 9.1 9.1 9.1 9.1-4.07 9.1-9.1c0-.5.4-.9.9-.9s.9.4.9.9c0 6.02-4.88 10.9-10.9 10.9S1.1 18.02 1.1 12", clipRule: "evenodd" }) });
});
Refresh.displayName = "Refresh";
var Refresh_default = Refresh;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Refresh
});
//# sourceMappingURL=Refresh.cjs.map