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

// src/icons/ArrowLeftDown.tsx
var ArrowLeftDown_exports = {};
__export(ArrowLeftDown_exports, {
  ArrowLeftDown: () => ArrowLeftDown,
  default: () => ArrowLeftDown_default
});
module.exports = __toCommonJS(ArrowLeftDown_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowLeftDown = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.636 6.636a.9.9 0 1 0-1.273-1.272L6.96 15.767a20 20 0 0 1-.06-1.836 41 41 0 0 1 .123-2.797l.004-.045v-.01l.001-.004a.9.9 0 1 0-1.794-.15v.005l-.001.013-.004.05a30 30 0 0 0-.057.849c-.032.55-.065 1.297-.071 2.075-.006.771.014 1.599.096 2.301.041.35.1.695.188.998.081.277.219.638.49.909.27.27.632.409.908.49.303.088.648.147.998.187.703.082 1.53.103 2.302.097a43 43 0 0 0 2.924-.128l.05-.004.013-.001h.005L13 17.867l.075.897a.9.9 0 1 0-.151-1.793h-.014l-.045.004a30 30 0 0 1-.81.055 41 41 0 0 1-1.986.068 20 20 0 0 1-1.836-.06M6.13 11l-.897-.075z", clipRule: "evenodd" }) });
});
ArrowLeftDown.displayName = "ArrowLeftDown";
var ArrowLeftDown_default = ArrowLeftDown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowLeftDown
});
//# sourceMappingURL=ArrowLeftDown.cjs.map