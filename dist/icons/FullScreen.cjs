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

// src/icons/FullScreen.tsx
var FullScreen_exports = {};
__export(FullScreen_exports, {
  FullScreen: () => FullScreen,
  default: () => FullScreen_default
});
module.exports = __toCommonJS(FullScreen_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FullScreen = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M2.1 15.5a.9.9 0 0 1 1.8 0c0 1.46.01 1.992.133 2.4l.063.183A3.1 3.1 0 0 0 6.1 19.967c.306.093.68.121 1.465.13l.934.003.092.005a.9.9 0 0 1 0 1.79L8.5 21.9l-.915-.002c-.838-.007-1.461-.043-2.007-.209a4.9 4.9 0 0 1-3.169-2.977l-.098-.29C2.09 17.694 2.1 16.83 2.1 15.5m18 0a.9.9 0 0 1 1.8 0c0 1.164.008 1.971-.138 2.643l-.073.279a4.9 4.9 0 0 1-2.977 3.169l-.29.098c-.728.221-1.592.211-2.922.211a.9.9 0 0 1 0-1.8c1.46 0 1.992-.01 2.4-.133l.183-.063a3.1 3.1 0 0 0 1.884-2.005l.04-.16c.085-.395.093-.96.093-2.239m-18-7c0-1.33-.01-2.195.21-2.923l.1-.289a4.9 4.9 0 0 1 3.167-2.977l.28-.073C6.53 2.092 7.337 2.1 8.5 2.1a.9.9 0 0 1 0 1.8c-1.278 0-1.844.008-2.24.092l-.16.041a3.1 3.1 0 0 0-2.004 1.884l-.063.184C3.91 6.508 3.9 7.04 3.9 8.5a.9.9 0 0 1-1.8 0m18 0c0-1.46-.01-1.992-.133-2.4l-.063-.183a3.1 3.1 0 0 0-1.82-1.821l-.184-.063c-.306-.092-.682-.121-1.466-.13L15.5 3.9l-.092-.004A.9.9 0 0 1 15.5 2.1l.915.002c.838.007 1.461.043 2.007.209l.29.098a4.9 4.9 0 0 1 2.879 2.88l.098.288.073.28c.146.672.139 1.48.139 2.643a.9.9 0 0 1-1.801 0" }) });
});
FullScreen.displayName = "FullScreen";
var FullScreen_default = FullScreen;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FullScreen
});
//# sourceMappingURL=FullScreen.cjs.map