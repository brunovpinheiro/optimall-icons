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

// src/icons/CodeSSlash.tsx
var CodeSSlash_exports = {};
__export(CodeSSlash_exports, {
  CodeSSlash: () => CodeSSlash,
  default: () => CodeSSlash_default
});
module.exports = __toCommonJS(CodeSSlash_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CodeSSlash = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M16.365 7.362a.9.9 0 0 1 1.273.003l1.84 1.85.037.038c.354.356.681.685.912.989.254.335.473.742.473 1.258s-.22.923-.473 1.258c-.23.304-.558.633-.912.989l-.037.037-1.84 1.85a.9.9 0 1 1-1.277-1.269l1.84-1.85c.405-.407.643-.649.792-.844a.8.8 0 0 0 .103-.163l.003-.008-.003-.008a.8.8 0 0 0-.103-.163c-.149-.195-.387-.437-.792-.844l-1.84-1.85a.9.9 0 0 1 .004-1.273m-8.731 0a.9.9 0 0 1 .004 1.273l-1.84 1.85c-.405.407-.643.649-.791.845a.8.8 0 0 0-.106.17l.002.008a1 1 0 0 0 .104.163c.148.195.386.437.791.844l1.84 1.85a.9.9 0 1 1-1.277 1.27l-1.84-1.85-.037-.038c-.354-.357-.681-.685-.911-.989-.255-.335-.473-.742-.473-1.258s.218-.923.473-1.258c.23-.304.557-.632.911-.989l.038-.038 1.84-1.85a.9.9 0 0 1 1.272-.003m7.134-4.221a.9.9 0 0 1 .59 1.127l-5 16a.9.9 0 1 1-1.717-.536l5-16a.9.9 0 0 1 1.127-.591", clipRule: "evenodd" }) });
});
CodeSSlash.displayName = "CodeSSlash";
var CodeSSlash_default = CodeSSlash;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CodeSSlash
});
//# sourceMappingURL=CodeSSlash.cjs.map