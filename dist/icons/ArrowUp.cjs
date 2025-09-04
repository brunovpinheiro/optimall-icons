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

// src/icons/ArrowUp.tsx
var ArrowUp_exports = {};
__export(ArrowUp_exports, {
  ArrowUp: () => ArrowUp,
  default: () => ArrowUp_default
});
module.exports = __toCommonJS(ArrowUp_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowUp = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 3.1c-.416 0-.791.183-1.058.344-.292.176-.59.41-.875.663-.575.507-1.189 1.167-1.741 1.803A44 44 0 0 0 6.32 8.406l-.033.044-.009.012-.003.004a.9.9 0 1 0 1.45 1.067l.001-.002.007-.01.03-.04a31 31 0 0 1 .542-.709c.36-.46.851-1.073 1.38-1.682.476-.548.968-1.077 1.415-1.49V20a.9.9 0 0 0 1.8 0V5.6c.446.413.938.942 1.414 1.49a43 43 0 0 1 1.922 2.392l.03.04.009.012a.9.9 0 1 0 1.449-1.068l-.003-.004-.009-.012-.032-.044a32 32 0 0 0-.567-.741 44 44 0 0 0-1.44-1.755c-.552-.636-1.166-1.296-1.74-1.803a6 6 0 0 0-.876-.663C12.79 3.284 12.415 3.1 12 3.1M17 9l.724-.534zM7 9l-.725-.534z", clipRule: "evenodd" }) });
});
ArrowUp.displayName = "ArrowUp";
var ArrowUp_default = ArrowUp;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowUp
});
//# sourceMappingURL=ArrowUp.cjs.map