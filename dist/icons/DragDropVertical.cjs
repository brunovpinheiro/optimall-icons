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

// src/icons/DragDropVertical.tsx
var DragDropVertical_exports = {};
__export(DragDropVertical_exports, {
  DragDropVertical: () => DragDropVertical,
  default: () => DragDropVertical_default
});
module.exports = __toCommonJS(DragDropVertical_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var DragDropVertical = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "m8.007 16.5.153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 1 1 0-3zM16 4.5a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3z" }) });
});
DragDropVertical.displayName = "DragDropVertical";
var DragDropVertical_default = DragDropVertical;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DragDropVertical
});
//# sourceMappingURL=DragDropVertical.cjs.map