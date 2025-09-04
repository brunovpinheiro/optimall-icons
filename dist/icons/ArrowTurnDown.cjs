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

// src/icons/ArrowTurnDown.tsx
var ArrowTurnDown_exports = {};
__export(ArrowTurnDown_exports, {
  ArrowTurnDown: () => ArrowTurnDown,
  default: () => ArrowTurnDown_default
});
module.exports = __toCommonJS(ArrowTurnDown_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowTurnDown = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.5 3.1a5.4 5.4 0 0 1 5.4 5.4v9.654l.217-.244a25 25 0 0 0 1.069-1.323l.067-.09.017-.024.004-.005.001-.001.059-.072a.9.9 0 0 1 1.441 1.062l-.05.077-.001.001-.001.002-.006.007-.02.027-.075.1a30 30 0 0 1-1.146 1.419 12 12 0 0 1-1.078 1.116c-.18.16-.377.314-.578.436a1.7 1.7 0 0 1-.82.258l-.129-.006a1.7 1.7 0 0 1-.691-.252 4 4 0 0 1-.578-.436 12 12 0 0 1-1.078-1.116 27 27 0 0 1-1.146-1.42q-.048-.062-.074-.099l-.02-.027-.007-.007v-.002h-.002l-.05-.078a.9.9 0 0 1 1.441-1.062l.059.07v.003l.005.005.017.023.068.09a28 28 0 0 0 1.285 1.57V8.5a3.6 3.6 0 1 0-7.2 0V20a.9.9 0 0 1-1.8 0V8.5a5.4 5.4 0 0 1 5.4-5.4" }) });
});
ArrowTurnDown.displayName = "ArrowTurnDown";
var ArrowTurnDown_default = ArrowTurnDown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowTurnDown
});
//# sourceMappingURL=ArrowTurnDown.cjs.map