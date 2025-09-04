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

// src/icons/ArrowRightDown.tsx
var ArrowRightDown_exports = {};
__export(ArrowRightDown_exports, {
  ArrowRightDown: () => ArrowRightDown,
  default: () => ArrowRightDown_default
});
module.exports = __toCommonJS(ArrowRightDown_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowRightDown = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.53 5.47a.75.75 0 0 0-1.06 1.06l10.625 10.625-.068.009c-.603.07-1.352.09-2.097.085a41 41 0 0 1-2.807-.123l-.046-.004h-.014a.75.75 0 1 0-.126 1.494h.005l.013.001.05.004a30 30 0 0 0 .846.057c.549.032 1.293.065 2.067.071.77.006 1.59-.014 2.283-.095.346-.04.682-.099.973-.184.27-.078.601-.208.845-.451.243-.244.373-.575.451-.845.085-.291.143-.627.184-.973.08-.694.101-1.514.095-2.283a43 43 0 0 0-.128-2.913l-.004-.05v-.013l-.001-.005-.747.063.747-.063a.75.75 0 1 0-1.495.127l.001.013.004.045.013.176a42 42 0 0 1 .11 2.632c.006.745-.015 1.494-.085 2.097l-.009.068M11 17.869l-.062.747z", clipRule: "evenodd" }) });
});
ArrowRightDown.displayName = "ArrowRightDown";
var ArrowRightDown_default = ArrowRightDown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowRightDown
});
//# sourceMappingURL=ArrowRightDown.cjs.map