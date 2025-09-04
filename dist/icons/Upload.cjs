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

// src/icons/Upload.tsx
var Upload_exports = {};
__export(Upload_exports, {
  Upload: () => Upload,
  default: () => Upload_default
});
module.exports = __toCommonJS(Upload_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Upload = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.89 14.8h.01-.02zm-.89-.9c0 .497.395.895.89.9a.896.896 0 0 0 .89-.9V5.86q.12.148.219.274l.131.166.131.163c.193.24.356.444.48.567.34.36.91.37 1.27.02a.89.89 0 0 0 .02-1.27 5 5 0 0 1-.31-.372l-.17-.218c-1.03-1.31-1.78-2.18-2.66-2.18s-1.62.86-2.66 2.18l-.172.218a5 5 0 0 1-.309.372.89.89 0 0 0 .02 1.27c.35.35.92.34 1.27-.02.124-.123.287-.327.48-.567l.13-.163c.09-.12.21-.27.35-.44z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.68 20.8h2.44c2.83 0 4.39 0 5.66-.9s1.79-2.37 2.73-5.04l.23-.66a.907.907 0 0 0-.55-1.15.9.9 0 0 0-1.15.55l-.24.67c-.84 2.39-1.27 3.59-2.07 4.16s-2.08.57-4.62.57h-2.44c-2.54 0-3.81 0-4.62-.57-.793-.565-1.213-1.75-2.049-4.11l-.02-.06-.23-.66a.9.9 0 0 0-1.15-.55c-.47.17-.72.68-.55 1.15l.24.67c.94 2.66 1.46 4.13 2.73 5.03s2.83.9 5.66.9" })
  ] });
});
Upload.displayName = "Upload";
var Upload_default = Upload;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Upload
});
//# sourceMappingURL=Upload.cjs.map