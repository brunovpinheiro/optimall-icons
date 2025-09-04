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

// src/icons/QrCode.tsx
var QrCode_exports = {};
__export(QrCode_exports, {
  QrCode: () => QrCode,
  default: () => QrCode_default
});
module.exports = __toCommonJS(QrCode_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var QrCode = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.7 2.7C3.41 2 4.34 2 5.9 2s2.5 0 3.2.7.7 1.64.7 3.2 0 2.5-.7 3.2c-.71.7-1.64.7-3.2.7h-.064c-1.522 0-2.446 0-3.136-.7C2 8.39 2 7.46 2 5.9s0-2.5.7-3.2M5.9 8c.97 0 1.74 0 1.92-.18C8 7.65 8 6.87 8 5.9s0-1.75-.18-1.92c-.17-.18-.95-.18-1.92-.18s-1.74 0-1.92.18c-.18.17-.18.95-.18 1.92s.01 1.74.18 1.92S4.93 8 5.9 8m-3.2 6.7c.71-.7 1.65-.7 3.2-.7 1.56 0 2.5 0 3.2.7.7.71.7 1.64.7 3.2s0 2.5-.7 3.2c-.71.7-1.64.7-3.2.7h-.064c-1.522 0-2.446 0-3.136-.7-.7-.71-.7-1.64-.7-3.2s0-2.5.7-3.2M5.9 20c.97 0 1.74 0 1.92-.18v.01c.18-.17.18-.94.18-1.92s0-1.75-.18-1.93c-.17-.17-.95-.17-1.92-.17s-1.74 0-1.92.17-.18.95-.18 1.92.01 1.74.18 1.92.95.18 1.92.18", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M8.9 11h-6c-.5 0-.9.4-.9.9s.4.9.9.9h6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9m3.9-3.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-5c0-.5.4-.9.9-.9s.9.4.9.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.9 9.8c1.56 0 2.49 0 3.2-.7.7-.7.7-1.64.7-3.2s0-2.5-.7-3.2-1.64-.7-3.2-.7-2.49 0-3.2.7c-.7.7-.7 1.64-.7 3.2s0 2.49.7 3.2c.69.7 1.614.7 3.136.7zm-1.92-5.82c.18-.18.95-.18 1.92-.18s1.75 0 1.92.18c.18.17.18.95.18 1.92s0 1.75-.18 1.92c-.18.18-.95.18-1.92.18s-1.75 0-1.92-.18-.18-.95-.18-1.92 0-1.75.18-1.92", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11 17.67c0-.5.4-.9.9-.9s.9.4.9.9v2.77c0 .5-.4.9-.9.9s-.9-.4-.9-.9zM17.9 14c-.5 0-.9.4-.9.9s.4.9.9.9c.98 0 1.75 0 1.92.17.18.18.18.95.18 1.93s0 1.75-.18 1.93c-.1.1-.39.15-.95.17a.89.89 0 0 0-.87.93c.01.49.41.87.9.87h.03c.77-.02 1.57-.1 2.17-.7.7-.7.7-1.64.7-3.2s0-2.5-.7-3.2-1.64-.7-3.2-.7m-3-3h6v.01c.5 0 .9.4.9.9s-.4.9-.9.9h-6c-.97 0-1.74 0-1.92.17s-.18.94-.18 1.92c0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-1.56 0-2.5.7-3.2.71-.7 1.65-.7 3.2-.7m1 9h-1c-.5 0-.9.4-.9.9s.4.9.9.9h1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M16.9 17c1.05 0 1.9.85 1.9 1.9 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.06-.04-.1-.1-.1-1.01 0-2.9 0-2.9-2.4v-1.5c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 .39.08.5.08.5.12.1.77.1 1.02.1" })
  ] });
});
QrCode.displayName = "QrCode";
var QrCode_default = QrCode;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  QrCode
});
//# sourceMappingURL=QrCode.cjs.map