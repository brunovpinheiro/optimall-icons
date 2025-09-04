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

// src/icons/CheckboxFill.tsx
var CheckboxFill_exports = {};
__export(CheckboxFill_exports, {
  CheckboxFill: () => CheckboxFill,
  default: () => CheckboxFill_default
});
module.exports = __toCommonJS(CheckboxFill_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CheckboxFill = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.932 1.6h.135c2.182 0 3.911 0 5.265.182 1.393.187 2.522.582 3.413 1.473.89.89 1.285 2.02 1.473 3.413.182 1.353.182 3.083.182 5.264v.136c0 2.181 0 3.91-.182 5.264-.188 1.393-.582 2.522-1.473 3.413-.89.89-2.02 1.286-3.413 1.473-1.354.182-3.083.182-5.265.182h-.135c-2.182 0-3.91 0-5.264-.182-1.394-.187-2.523-.582-3.414-1.473-.89-.89-1.285-2.02-1.472-3.413-.182-1.354-.182-3.083-.182-5.264v-.136c0-2.181 0-3.91.182-5.264.187-1.393.582-2.522 1.472-3.413.891-.89 2.02-1.286 3.414-1.473C8.02 1.6 9.75 1.6 11.932 1.6m4.731 8.008a.9.9 0 1 0-1.327-1.216l-4.865 5.307-1.835-1.835a.9.9 0 1 0-1.273 1.272l2.5 2.5a.9.9 0 0 0 1.3-.028z", clipRule: "evenodd" }) });
});
CheckboxFill.displayName = "CheckboxFill";
var CheckboxFill_default = CheckboxFill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckboxFill
});
//# sourceMappingURL=CheckboxFill.cjs.map