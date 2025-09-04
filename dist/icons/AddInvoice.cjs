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

// src/icons/AddInvoice.tsx
var AddInvoice_exports = {};
__export(AddInvoice_exports, {
  AddInvoice: () => AddInvoice,
  default: () => AddInvoice_default
});
module.exports = __toCommonJS(AddInvoice_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var AddInvoice = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.9 22.8c-.55 0-.94-.25-1.54-.63l-1.91-1.2c-.24-.15-.49-.31-.57-.33l-.52.33c-.09.05-.19.13-.3.21-.76.53-2.04 1.42-3.17.69-.87-.56-.87-1.6-.87-3.32V7.9C2 4.93 2 3.3 3.07 2.16 4.17 1 5.72 1 8.55 1h4.71c2.83 0 4.38 0 5.47 1.16C19.8 3.3 19.8 4.93 19.8 7.9v4c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-4c0-2.51 0-3.89-.58-4.5-.54-.57-1.6-.6-4.16-.6H8.55c-2.56 0-3.63.02-4.17.6-.58.62-.58 2-.58 4.5v10.65c0 .74 0 1.5.08 1.79.29-.04.9-.47 1.14-.64.14-.1.26-.19.37-.25.58-.36.98-.64 1.57-.61.51.02.88.25 1.44.6l1.91 1.21c.24.16.52.33.61.35.03-.02.31-.2.55-.35.42-.26.98-.14 1.24.28s.14.98-.28 1.24c-.6.38-.99.63-1.54.63z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.9 11.8h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9m6 11c-.5 0-.9-.4-.9-.9v-3.1h-3.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9H16v-3.1c0-.5.4-.9.9-.9s.9.4.9.9V17h3.1c.5 0 .9.4.9.9s-.4.9-.9.9h-3.1v3.1c0 .5-.4.9-.9.9m-2-15h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9" })
  ] });
});
AddInvoice.displayName = "AddInvoice";
var AddInvoice_default = AddInvoice;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddInvoice
});
//# sourceMappingURL=AddInvoice.cjs.map