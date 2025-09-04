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

// src/icons/AddPi.tsx
var AddPi_exports = {};
__export(AddPi_exports, {
  AddPi: () => AddPi,
  default: () => AddPi_default
});
module.exports = __toCommonJS(AddPi_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var AddPi = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M5 3.4a2.1 2.1 0 0 0-2.1 2.1v10c0 1.16.94 2.1 2.1 2.1h14a2.1 2.1 0 0 0 2.1-2.1v-3a.9.9 0 0 1 1.8 0v3a3.9 3.9 0 0 1-3.9 3.9h-6.1v2.1a.9.9 0 1 1-1.8 0v-2.1H5a3.9 3.9 0 0 1-3.9-3.9v-10A3.9 3.9 0 0 1 5 1.6h6a.9.9 0 1 1 0 1.8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M18.9 2.5a.9.9 0 1 0-1.8 0v3.1H14a.9.9 0 0 0 0 1.8h3.1v3.1a.9.9 0 0 0 1.8 0V7.4H22a.9.9 0 1 0 0-1.8h-3.1z" })
  ] });
});
AddPi.displayName = "AddPi";
var AddPi_default = AddPi;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddPi
});
//# sourceMappingURL=AddPi.cjs.map