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

// src/icons/PlugSocket.tsx
var PlugSocket_exports = {};
__export(PlugSocket_exports, {
  PlugSocket: () => PlugSocket,
  default: () => PlugSocket_default
});
module.exports = __toCommonJS(PlugSocket_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PlugSocket = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "m21.26 2.27-1.52 1.52a3.14 3.14 0 0 0-2.56-.75l-.72.12c-1.33.22-2.56.79-3.57 1.65l-1.23 1.05c-.4.34-.63.83-.65 1.36-.03.55.19 1.1.59 1.5l4.48 4.48c.38.39.89.6 1.42.6l.01-.01h.08c.53-.02 1.02-.25 1.36-.65L20 11.91a7.34 7.34 0 0 0 1.65-3.57l.12-.72a3.11 3.11 0 0 0-.76-2.561l1.52-1.519a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0M17.51 12l.013.01a.2.2 0 0 1-.153-.07l-4.48-4.48c-.07-.07-.07-.14-.05-.22l1.23-1.05a5.56 5.56 0 0 1 2.7-1.25l.72-.12c.4-.06.82.08 1.13.39l.99.99c.3.31.45.73.38 1.13l-.12.72a5.56 5.56 0 0 1-1.25 2.7l-1.05 1.23.69.58-.737-.55h.007z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M2.895 22.8H2.9h-.01z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.53 22.54a.9.9 0 0 1-.635.26.94.94 0 0 1-.635-.26.9.9 0 0 1 0-1.27l1.534-1.534a3.12 3.12 0 0 1-.754-2.566l.12-.72c.22-1.33.79-2.56 1.65-3.57l1.05-1.23c.34-.4.82-.63 1.36-.66.55-.04 1.1.19 1.5.59l.115.115 1.425-1.425a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-1.425 1.425 1.73 1.73 1.425-1.425a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-1.425 1.425.095.095c.4.4.62.95.59 1.5-.02.53-.25 1.02-.66 1.36l-1.23 1.05a7.34 7.34 0 0 1-3.57 1.65l-.72.12c-.16.03-.33.04-.5.04l.02.02c-.747 0-1.485-.28-2.066-.794zM7.3 12.8l-.06.02-1.05 1.23a5.56 5.56 0 0 0-1.25 2.7l-.12.72c-.07.4.08.82.38 1.13l.99.99c.31.31.73.46 1.13.39l.73-.12a5.56 5.56 0 0 0 2.7-1.25l1.23-1.05c.02-.08.02-.15-.05-.22l-4.48-4.48a.22.22 0 0 0-.15-.07z", clipRule: "evenodd" })
  ] });
});
PlugSocket.displayName = "PlugSocket";
var PlugSocket_default = PlugSocket;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PlugSocket
});
//# sourceMappingURL=PlugSocket.cjs.map