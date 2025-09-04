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

// src/icons/FileAttachment.tsx
var FileAttachment_exports = {};
__export(FileAttachment_exports, {
  FileAttachment: () => FileAttachment,
  default: () => FileAttachment_default
});
module.exports = __toCommonJS(FileAttachment_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FileAttachment = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.5 9.17c0 1.45 1.19 2.63 2.65 2.63s2.65-1.18 2.65-2.63V5.36C11.8 2.96 9.83 1 7.4 1S3 2.96 3 5.36v2.77c0 .5.4.9.9.9s.9-.4.9-.9V5.36c0-1.41 1.17-2.56 2.6-2.56S10 3.95 10 5.36v3.81c0 .46-.38.83-.85.83s-.85-.37-.85-.83V5.36c0-.5-.4-.9-.9-.9s-.9.4-.9.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.02.01c.78 0 1.22 0 1.68-.17.09-.03.19-.07.29-.12.44-.21.76-.53 1.3-1.07l4.74-4.74c.65-.64 1-1 1.22-1.53.22-.54.22-1.03.22-1.94V9.9c0-4.01 0-6.02-1.44-7.46-1.35-1.35-3.33-1.42-6.43-1.43-.5 0-.9.4-.9.9 0 .49.4.9.9.9 2.9.01 4.35.11 5.16.91.91.91.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14S12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4v-2.55c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.55c0 3.45 0 5.18 1.09 6.53.22.27.47.52.74.74m9.58-5.3c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31", clipRule: "evenodd" })
  ] });
});
FileAttachment.displayName = "FileAttachment";
var FileAttachment_default = FileAttachment;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileAttachment
});
//# sourceMappingURL=FileAttachment.cjs.map