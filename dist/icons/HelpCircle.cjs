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

// src/icons/HelpCircle.tsx
var HelpCircle_exports = {};
__export(HelpCircle_exports, {
  HelpCircle: () => HelpCircle,
  default: () => HelpCircle_default
});
module.exports = __toCommonJS(HelpCircle_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var HelpCircle = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.113 15.905a1.1 1.1 0 0 1 0 2.19l-.112.005h-.009a1.1 1.1 0 1 1 0-2.2h.009zM12 6.1a2.9 2.9 0 0 1 2.44 4.466v.001a9 9 0 0 1-.57.77c-.197.244-.369.452-.525.667-.32.438-.445.74-.445.996v.5a.9.9 0 0 1-1.8 0V13c0-.849.417-1.542.79-2.055.19-.26.401-.518.577-.736a8 8 0 0 0 .459-.615L13 9.46q.098-.211.1-.46a1.1 1.1 0 1 0-2.2 0 .9.9 0 0 1-1.8 0A2.9 2.9 0 0 1 12 6.1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9", clipRule: "evenodd" })
  ] });
});
HelpCircle.displayName = "HelpCircle";
var HelpCircle_default = HelpCircle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HelpCircle
});
//# sourceMappingURL=HelpCircle.cjs.map