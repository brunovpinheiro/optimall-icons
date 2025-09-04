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

// src/icons/ArrowGoForward.tsx
var ArrowGoForward_exports = {};
__export(ArrowGoForward_exports, {
  ArrowGoForward: () => ArrowGoForward,
  default: () => ArrowGoForward_default
});
module.exports = __toCommonJS(ArrowGoForward_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowGoForward = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.8 14.922c-.006.343-.145 1.314-3.37 3.678-.16.12-.35.18-.53.18v.02a.91.91 0 0 1-.73-.37c-.29-.4-.21-.96.19-1.26a23 23 0 0 0 1.68-1.37H8.4c-2.98 0-5.4-2.42-5.4-5.4S5.42 5 8.4 5h4.5c.5 0 .9.4.9.9s-.4.9-.9.9H8.4c-1.99 0-3.6 1.62-3.6 3.6S6.41 14 8.4 14h9.662a23 23 0 0 0-1.702-1.39.897.897 0 0 1-.19-1.26c.29-.4.86-.49 1.26-.19 3.37 2.48 3.37 3.42 3.37 3.72z" }) });
});
ArrowGoForward.displayName = "ArrowGoForward";
var ArrowGoForward_default = ArrowGoForward;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowGoForward
});
//# sourceMappingURL=ArrowGoForward.cjs.map