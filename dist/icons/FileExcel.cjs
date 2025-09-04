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

// src/icons/FileExcel.tsx
var FileExcel_exports = {};
__export(FileExcel_exports, {
  FileExcel: () => FileExcel,
  default: () => FileExcel_default
});
module.exports = __toCommonJS(FileExcel_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var FileExcel = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.63 21h4.27l-.01-.01c.5 0 .9.4.9.9s-.4.9-.9.9h-4.27c-3.45 0-5.17 0-6.54-.96-.39-.27-.74-.61-1.04-.98C2 19.54 2 17.9 2 14.62V11.9c0-2.95.01-4.46.53-5.78.85-2.14 2.64-3.83 4.93-4.62 1.27-.45 2.75-.49 5.45-.49h.81c1.89 0 2.85 0 3.71.3 1.41.49 2.51 1.54 3.04 2.87.33.84.33 1.75.33 3.55v2.18c0 .5-.4.9-.9.9s-.9-.4-.9-.9V7.73c0-1.57 0-2.36-.21-2.88-.34-.84-1.05-1.51-1.96-1.83-.58-.2-1.43-.2-3.12-.2h-.82c-1.34 0-2.43 1.09-2.43 2.43q.001.125.01.255.009.138.01.285l.002.064c.02.544.042 1.149-.112 1.726-.23.88-.93 1.57-1.81 1.81-.6.16-1.23.14-1.79.11-.18-.02-.37-.02-.54-.02-1.34 0-2.43 1.09-2.43 2.43v2.72c0 2.86 0 4.29.65 5.11.19.24.42.45.67.63.9.63 2.44.63 5.51.63M9.37 2.91c-.52.06-.95.15-1.33.28l-.01.01c-1.78.62-3.17 1.93-3.83 3.59-.17.43-.26.95-.32 1.6a4.2 4.2 0 0 1 2.35-.72c.19 0 .39.01.6.019l.03.001c.45.02.91.04 1.24-.05.26-.07.47-.28.54-.54.09-.33.07-.79.05-1.24-.02-.22-.02-.43-.02-.63 0-.86.26-1.65.7-2.32", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.68 14.5c.45 0 .75 0 1.07.14v-.01c1.05.45 1.05 1.5 1.05 2 0 .54 0 1.58-1.05 2.03-.32.14-.62.14-1.07.14h-1.03c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h1.34v-.7h-.31c-.45 0-.75 0-1.07-.14-1.05-.45-1.05-1.5-1.05-2 0-.54 0-1.58 1.05-2.03.32-.13.62-.13 1.07-.13h.95c.5 0 .9.4.9.9s-.4.9-.9.9h-1.26v.7zm-9.11-2.1a.9.9 0 0 1 1.25-.24v-.01a.9.9 0 0 1 .24 1.25l-1.36 1.99 1.36 1.99a.9.9 0 0 1-.24 1.25c-.16.11-.34.16-.51.16-.28 0-.57-.14-.74-.39l-.96-1.41-.96 1.41a.9.9 0 0 1-1.49-1.01l1.36-1.99-1.36-1.99a.9.9 0 0 1 1.49-1.01l.96 1.41zm5.89 4.6h-1.64c-.02-.17-.02-.49-.02-.77V12.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v3.33c0 .9 0 1.56.52 2.07.51.5 1.14.5 2.09.5h.85c.5 0 .9-.4.9-.9s-.4-.9-.9-.9" })
  ] });
});
FileExcel.displayName = "FileExcel";
var FileExcel_default = FileExcel;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileExcel
});
//# sourceMappingURL=FileExcel.cjs.map