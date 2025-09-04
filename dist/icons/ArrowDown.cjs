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

// src/icons/ArrowDown.tsx
var ArrowDown_exports = {};
__export(ArrowDown_exports, {
  ArrowDown: () => ArrowDown,
  default: () => ArrowDown_default
});
module.exports = __toCommonJS(ArrowDown_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowDown = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "m6.805 8.407.003.003.008.012.036.048.139.185a54 54 0 0 0 2.171 2.69c.64.737 1.308 1.449 1.896 1.968q.444.39.747.573c.095.057.159.087.195.101.036-.014.1-.044.195-.101q.302-.18.748-.573c.587-.52 1.255-1.231 1.895-1.969a51 51 0 0 0 2.31-2.874l.036-.048.008-.012.003-.002m-10.39-.001a1 1 0 0 0-1.61 1.186L6 9l-.805.593.004.005.01.014.04.053q.05.07.146.196a55 55 0 0 0 2.257 2.795c.662.762 1.396 1.55 2.081 2.156.342.302.695.58 1.039.787.317.19.752.401 1.228.401s.911-.21 1.228-.401a7.4 7.4 0 0 0 1.039-.787c.685-.606 1.419-1.394 2.081-2.156a53 53 0 0 0 2.404-2.991l.039-.052.01-.014.004-.005L18 9l.805.594a1 1 0 1 0-1.61-1.186", clipRule: "evenodd" }) });
});
ArrowDown.displayName = "ArrowDown";
var ArrowDown_default = ArrowDown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowDown
});
//# sourceMappingURL=ArrowDown.cjs.map