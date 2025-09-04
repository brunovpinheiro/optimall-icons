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

// src/icons/SmartphoneLands.tsx
var SmartphoneLands_exports = {};
__export(SmartphoneLands_exports, {
  SmartphoneLands: () => SmartphoneLands,
  default: () => SmartphoneLands_default
});
module.exports = __toCommonJS(SmartphoneLands_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var SmartphoneLands = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M18.9 13.8c-.5 0-.9-.4-.9-.9v-2c0-.5.4-.9.9-.9s.9.4.9.9v2c0 .5-.4.9-.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.9 19.8h-6c-3.43 0-5.32 0-6.61-1.29S1 15.33 1 11.9s0-5.32 1.29-6.61S5.47 4 8.9 4h6c3.43 0 5.32 0 6.61 1.29s1.29 3.18 1.29 6.61 0 5.32-1.29 6.61-3.18 1.29-6.61 1.29m-6-14c-3.05 0-4.58 0-5.34.76-.344.344-.533.847-.636 1.577 1.077.182 1.758.343 2.266.923.6.68.6 1.53.6 2.82s0 2.08-.53 2.74c-.518.645-1.258.82-2.341 1.004.102.751.29 1.266.641 1.616.76.76 2.29.76 5.34.76h6c3.05 0 4.58 0 5.34-.76s.76-2.29.76-5.34 0-4.58-.76-5.34-2.29-.76-5.34-.76zm-6.09 8.03c.535-.095.953-.192 1.06-.33.13-.16.13-.77.13-1.61 0-.78 0-1.46-.15-1.63-.107-.123-.504-.21-1.04-.308-.01.569-.01 1.214-.01 1.948 0 .726 0 1.367.01 1.93", clipRule: "evenodd" })
  ] });
});
SmartphoneLands.displayName = "SmartphoneLands";
var SmartphoneLands_default = SmartphoneLands;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SmartphoneLands
});
//# sourceMappingURL=SmartphoneLands.cjs.map