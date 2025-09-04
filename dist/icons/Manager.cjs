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

// src/icons/Manager.tsx
var Manager_exports = {};
__export(Manager_exports, {
  Manager: () => Manager,
  default: () => Manager_default
});
module.exports = __toCommonJS(Manager_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Manager = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.95 12.85C19.1 12 17.96 12 15.9 12c-.36 0-.68.21-.82.53l-2 4.51-.25-1.98.88-1.76a.907.907 0 0 0-.81-1.31h-2c-.31 0-.6.16-.77.43-.16.27-.18.6-.04.88l.88 1.76-.25 1.98-2-4.51A.89.89 0 0 0 7.9 12c-2.06 0-3.2 0-4.05.85S3 14.84 3 16.9v5c0 .5.4.9.9.9s.9-.4.9-.9v-5c0-1.53 0-2.46.32-2.78.28-.28 1.01-.32 2.19-.32l3.76 8.46c.29.65 1.36.65 1.64 0l3.76-8.46c1.18 0 1.91.04 2.19.32.32.32.32 1.25.32 2.78v5c0 .5.4.9.9.9s.9-.4.9-.9v-5c0-2.06 0-3.2-.85-4.05zM11.9 10.8a4.4 4.4 0 0 0 4.4-4.4v-1a4.4 4.4 0 0 0-8.8 0v1a4.4 4.4 0 0 0 4.4 4.4M9.3 5.4c0-1.43 1.17-2.6 2.6-2.6s2.6 1.17 2.6 2.6v1c0 1.43-1.17 2.6-2.6 2.6S9.3 7.83 9.3 6.4z" }) });
});
Manager.displayName = "Manager";
var Manager_default = Manager;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Manager
});
//# sourceMappingURL=Manager.cjs.map