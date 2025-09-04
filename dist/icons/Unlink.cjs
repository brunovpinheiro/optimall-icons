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

// src/icons/Unlink.tsx
var Unlink_exports = {};
__export(Unlink_exports, {
  Unlink: () => Unlink,
  default: () => Unlink_default
});
module.exports = __toCommonJS(Unlink_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Unlink = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.9 4.88c.5 0 .9-.4.9-.9V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.08c0 .5.4.9.9.9m9.21 10.26a.9.9 0 0 1 0-1.27v-.01l2.61-2.61A4.35 4.35 0 0 0 20 8.16c0-1.17-.45-2.26-1.28-3.09a4.364 4.364 0 0 0-6.18 0L9.93 7.68a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l2.61-2.61a6.174 6.174 0 0 1 8.73 0 6.1 6.1 0 0 1 1.81 4.36c0 1.65-.64 3.2-1.81 4.37l-2.61 2.61c-.18.17-.41.26-.64.26s-.46-.08-.64-.26m-4.85 3.58 2.61-2.61h.01a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a6.15 6.15 0 0 1-4.37 1.81c-1.64 0-3.19-.64-4.36-1.81A6.1 6.1 0 0 1 2 15.63c0-1.64.64-3.19 1.81-4.36l2.61-2.61a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a4.364 4.364 0 0 0 0 6.18A4.35 4.35 0 0 0 8.17 20c1.17 0 2.26-.45 3.09-1.28M21.9 16h-2.08c-.5 0-.9.4-.9.9s.4.9.9.9h2.08c.5 0 .9-.4.9-.9s-.4-.9-.9-.9M16 19.82c0-.5.4-.9.9-.9s.9.4.9.9v2.08c0 .5-.4.9-.9.9s-.9-.4-.9-.9zM3.98 6c.5 0 .9.4.9.9s-.4.9-.9.9H1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" }) });
});
Unlink.displayName = "Unlink";
var Unlink_default = Unlink;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Unlink
});
//# sourceMappingURL=Unlink.cjs.map