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

// src/icons/Loader.tsx
var Loader_exports = {};
__export(Loader_exports, {
  Loader: () => Loader,
  default: () => Loader_default
});
module.exports = __toCommonJS(Loader_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Loader = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 2.1a.9.9 0 0 1 .9.9v3a.9.9 0 1 1-1.8 0V3a.9.9 0 0 1 .9-.9m0 15a.9.9 0 0 1 .9.9v3a.9.9 0 1 1-1.8 0v-3a.9.9 0 0 1 .9-.9m5.1-5.1a.9.9 0 0 1 .9-.9h3a.9.9 0 0 1 0 1.8h-3a.9.9 0 0 1-.9-.9m-15 0a.9.9 0 0 1 .9-.9h3a.9.9 0 0 1 0 1.8H3a.9.9 0 0 1-.9-.9M19 5a.9.9 0 0 1 0 1.273l-2.122 2.121a.9.9 0 0 1-1.273-1.272L17.727 5A.9.9 0 0 1 19 5M8.394 15.606a.9.9 0 0 1 0 1.273l-2.121 2.12A.9.9 0 1 1 5 17.728l2.121-2.121a.9.9 0 0 1 1.273 0m7.211-.001a.9.9 0 0 1 1.273 0L19 17.727A.9.9 0 1 1 17.727 19l-2.122-2.121a.9.9 0 0 1 0-1.273M5 5a.9.9 0 0 1 1.273 0l2.121 2.122a.9.9 0 1 1-1.273 1.272L5 6.274A.9.9 0 0 1 5 5", clipRule: "evenodd" }) });
});
Loader.displayName = "Loader";
var Loader_default = Loader;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loader
});
//# sourceMappingURL=Loader.cjs.map