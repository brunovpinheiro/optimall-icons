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

// src/icons/Target.tsx
var Target_exports = {};
__export(Target_exports, {
  Target: () => Target,
  default: () => Target_default
});
module.exports = __toCommonJS(Target_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Target = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.996 10.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12S5.98 22.9 12 22.9 22.9 18.02 22.9 12 18.02 1.1 12 1.1M2.944 12.9H6a.9.9 0 1 0 0-1.8H2.944A9.1 9.1 0 0 1 11.1 2.944V6a.9.9 0 0 0 1.8 0V2.944a9.1 9.1 0 0 1 8.156 8.156H18a.9.9 0 0 0 0 1.8h3.056a9.1 9.1 0 0 1-8.156 8.156V18a.9.9 0 0 0-1.8 0v3.056A9.1 9.1 0 0 1 2.944 12.9", clipRule: "evenodd" })
  ] });
});
Target.displayName = "Target";
var Target_default = Target;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Target
});
//# sourceMappingURL=Target.cjs.map