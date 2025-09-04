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

// src/icons/Download.tsx
var Download_exports = {};
__export(Download_exports, {
  Download: () => Download,
  default: () => Download_default
});
module.exports = __toCommonJS(Download_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Download = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9.24 12.62c1.03 1.32 1.78 2.18 2.66 2.18v-.01c.88 0 1.63-.86 2.66-2.18.19-.25.36-.47.48-.59a.9.9 0 0 0-.02-1.27.9.9 0 0 0-1.27.02c-.15.16-.36.42-.61.74-.041.057-.097.125-.158.201q-.087.106-.182.229V3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.05l-.194-.246q-.081-.105-.146-.184l-.02-.026c-.241-.309-.444-.568-.59-.714a.9.9 0 0 0-1.27-.02.89.89 0 0 0-.02 1.27c.084.091.202.24.341.415l.14.175" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.68 20.8h2.44c2.83 0 4.39 0 5.66-.9s1.79-2.37 2.73-5.04l.23-.66a.907.907 0 0 0-.55-1.15.907.907 0 0 0-1.15.55l-.23.66c-.84 2.4-1.27 3.6-2.07 4.17s-2.08.57-4.62.57h-2.44c-2.54 0-3.82 0-4.62-.57-.793-.565-1.213-1.75-2.049-4.11l-.02-.06-.23-.66a.9.9 0 0 0-1.15-.55c-.47.17-.72.68-.55 1.15l.23.66c.94 2.67 1.46 4.14 2.73 5.04s2.83.9 5.66.9" })
  ] });
});
Download.displayName = "Download";
var Download_default = Download;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Download
});
//# sourceMappingURL=Download.cjs.map