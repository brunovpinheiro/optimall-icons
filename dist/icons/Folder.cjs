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

// src/icons/Folder.tsx
var Folder_exports = {};
__export(Folder_exports, {
  Folder: () => Folder,
  default: () => Folder_default
});
module.exports = __toCommonJS(Folder_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Folder = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.15 21.8H11.9c-4.96 0-7.44 0-9.17-1.73S1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4c.35-.63.87-1.15 1.51-1.51C3.89 2 4.88 2 6.84 2c1.23 0 1.91 0 2.57.25 1.44.54 2.05 1.76 2.58 2.83l.46.92h4.19c2.29 0 3.43 0 4.42.66.42.28.79.64 1.07 1.07.66.99.66 2.13.66 4.42 0 3.69 0 5.54-.99 7.03-.43.65-.98 1.2-1.63 1.63-1.49 1-3.34 1-7.03 1zm-6.31-18c-1.61 0-2.49 0-2.97.27-.34.19-.62.47-.81.81-.27.48-.27 1.36-.27 2.97v3.06c0 4.46 0 6.7 1.2 7.9s3.44 1.2 7.9 1.2h1.25c3.32 0 4.99 0 6.03-.69.45-.3.83-.68 1.13-1.13.69-1.03.69-2.7.69-6.03 0-1.86 0-2.89-.35-3.42-.15-.23-.35-.43-.58-.58-.53-.36-1.56-.36-3.42-.36H7.89c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.54l-.06-.12c-.51-1.03-.86-1.67-1.6-1.95-.36-.13-.89-.13-1.94-.13z", clipRule: "evenodd" }) });
});
Folder.displayName = "Folder";
var Folder_default = Folder;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Folder
});
//# sourceMappingURL=Folder.cjs.map