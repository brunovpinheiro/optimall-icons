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

// src/icons/Table.tsx
var Table_exports = {};
__export(Table_exports, {
  Table: () => Table,
  default: () => Table_default
});
module.exports = __toCommonJS(Table_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Table = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.75 3.25C19.09 1.6 16.73 1.6 12 1.6s-7.09 0-8.75 1.65S1.6 7.28 1.6 12s0 7.09 1.65 8.75C4.9 22.4 7.27 22.4 12 22.4s7.09 0 8.75-1.65c1.65-1.66 1.65-4.03 1.65-8.75s0-7.09-1.65-8.75M12 3.4c4.22 0 6.34 0 7.47 1.13.71.71.97 1.81 1.07 3.57H3.46c.1-1.76.36-2.86 1.07-3.57C5.66 3.4 7.78 3.4 12 3.4m8.6 8.6v.1h-7.7V9.9h7.69V12zM3.4 12V9.9h7.69v2.2H3.4zm7.7 1.9v2.2H3.47c-.04-.64-.06-1.37-.07-2.2zm1.8 0h7.69c0 .83-.03 1.56-.07 2.2h-7.63v-2.2zm-9.17 4h7.37v2.7c-3.62 0-5.53-.08-6.57-1.13-.39-.39-.64-.9-.8-1.57m9.17 2.7v-2.7h7.37c-.17.67-.41 1.18-.8 1.57-1.04 1.04-2.96 1.12-6.57 1.13" }) });
});
Table.displayName = "Table";
var Table_default = Table;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table
});
//# sourceMappingURL=Table.cjs.map