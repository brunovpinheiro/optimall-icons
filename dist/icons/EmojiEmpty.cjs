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

// src/icons/EmojiEmpty.tsx
var EmojiEmpty_exports = {};
__export(EmojiEmpty_exports, {
  EmojiEmpty: () => EmojiEmpty,
  default: () => EmojiEmpty_default
});
module.exports = __toCommonJS(EmojiEmpty_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var EmojiEmpty = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.575 20.99a9.2 9.2 0 0 0 2.85 0 .9.9 0 1 1 .28 1.778 11 11 0 0 1-3.41 0 .901.901 0 0 1 .28-1.779M3.38 17.15a.9.9 0 0 1 1.257.199 9.2 9.2 0 0 0 2.014 2.014.9.9 0 1 1-1.06 1.455 11 11 0 0 1-2.41-2.41.9.9 0 0 1 .199-1.258m15.983.199a.9.9 0 1 1 1.455 1.06 11 11 0 0 1-2.41 2.41.9.9 0 0 1-1.06-1.456 9.2 9.2 0 0 0 2.015-2.014M7.46 14.28a.9.9 0 0 1 1.26.18c.75.997 1.94 1.64 3.28 1.64s2.53-.643 3.28-1.64a.9.9 0 0 1 1.44 1.08A5.9 5.9 0 0 1 12 17.9c-1.93 0-3.645-.93-4.72-2.36a.9.9 0 0 1 .18-1.26M2.262 9.546a.9.9 0 0 1 .749 1.03 9.2 9.2 0 0 0 0 2.849.9.9 0 1 1-1.779.28 11 11 0 0 1 0-3.41.9.9 0 0 1 1.03-.75m19.476.001a.9.9 0 0 1 1.03.75 11 11 0 0 1 0 3.408.901.901 0 0 1-1.779-.28 9.2 9.2 0 0 0 0-2.849.9.9 0 0 1 .75-1.03M8.009 7.75a1.25 1.25 0 0 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5zm7.991 0a1.25 1.25 0 1 1 0 2.5h-.009a1.25 1.25 0 0 1 0-2.5zM5.592 3.182a.9.9 0 0 1 1.06 1.455A9.2 9.2 0 0 0 4.636 6.65a.9.9 0 1 1-1.455-1.06 11 11 0 0 1 2.41-2.41m11.559.2a.9.9 0 0 1 1.258-.198 11 11 0 0 1 2.41 2.41.9.9 0 0 1-1.455 1.06 9.2 9.2 0 0 0-2.014-2.015.9.9 0 0 1-.199-1.257M12 1.1q.87 0 1.704.132a.9.9 0 0 1-.28 1.779 9.2 9.2 0 0 0-2.849 0 .9.9 0 1 1-.28-1.779A11 11 0 0 1 12 1.1" }) });
});
EmojiEmpty.displayName = "EmojiEmpty";
var EmojiEmpty_default = EmojiEmpty;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EmojiEmpty
});
//# sourceMappingURL=EmojiEmpty.cjs.map