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

// src/icons/FileSend.tsx
var FileSend_exports = {};
__export(FileSend_exports, {
  FileSend: () => FileSend,
  default: () => FileSend_default
});
module.exports = __toCommonJS(FileSend_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FileSend = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9.966 3.55C8.796 2.06 7.896 1 6.916 1l-.02.01c-.97 0-1.88 1.06-3.05 2.55l-.135.17c-.183.23-.342.429-.455.55a.9.9 0 0 0 .02 1.27.9.9 0 0 0 1.27-.02c.177-.176.42-.487.703-.848l.017-.022.205-.254c.155-.195.34-.428.535-.656V9.9c0 .5.4.9.9.9s.9-.4.9-.9V3.74c.29.34.57.69.74.91.29.37.55.69.72.87.34.36.91.37 1.27.02a.89.89 0 0 0 .02-1.27c-.14-.14-.35-.41-.59-.72" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.02.02c.78 0 1.22 0 1.69-.17l.14-.06.14-.06c.44-.21.75-.52 1.3-1.07l4.74-4.74.056-.056c.605-.605.95-.95 1.164-1.474.22-.54.22-1.03.22-1.94V9.91c0-4.01 0-6.03-1.44-7.46-1.43-1.44-2.94-1.44-6.95-1.44-.5 0-.9.4-.9.9s.4.9.9.9c3.52 0 4.77 0 5.68.91s.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14S12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4V12.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.54c0 3.45 0 5.18 1.09 6.53.22.28.47.52.74.74m9.58-5.3c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31", clipRule: "evenodd" })
  ] });
});
FileSend.displayName = "FileSend";
var FileSend_default = FileSend;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileSend
});
//# sourceMappingURL=FileSend.cjs.map