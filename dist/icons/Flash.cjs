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

// src/icons/Flash.tsx
var Flash_exports = {};
__export(Flash_exports, {
  Flash: () => Flash,
  default: () => Flash_default
});
module.exports = __toCommonJS(Flash_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Flash = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "m12.797 3.238-6.783 8.706A.1.1 0 0 0 6 11.98a.1.1 0 0 0 .001.035h3.303c1.16 0 1.899 1.02 1.899 2.015v6.732l6.782-8.706a.1.1 0 0 0 .014-.037.1.1 0 0 0 0-.034h-3.303c-1.16 0-1.9-1.02-1.9-2.015zm.81-2.09c.707.3 1.19 1.015 1.19 1.87v6.967H18.1c.886 0 1.496.598 1.748 1.225.25.627.217 1.432-.284 2.075l-6.998 8.983c-.562.72-1.444.895-2.173.584-.707-.3-1.19-1.015-1.19-1.87v-6.967H5.9c-.886 0-1.496-.598-1.747-1.225a2.1 2.1 0 0 1 .284-2.075l6.998-8.983c.561-.72 1.444-.895 2.173-.585", clipRule: "evenodd" }) });
});
Flash.displayName = "Flash";
var Flash_default = Flash;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Flash
});
//# sourceMappingURL=Flash.cjs.map