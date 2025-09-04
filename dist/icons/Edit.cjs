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

// src/icons/Edit.tsx
var Edit_exports = {};
__export(Edit_exports, {
  Edit: () => Edit,
  default: () => Edit_default
});
module.exports = __toCommonJS(Edit_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Edit = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M17.008 2.733a1.9 1.9 0 0 1 2.543.13l1.586 1.586.13.145a1.9 1.9 0 0 1 0 2.398l-.13.145-7.902 7.9a2.9 2.9 0 0 1-1.158.71l-.19.053-3.461.866a.9.9 0 0 1-1.092-1.092l.865-3.462.055-.19a2.9 2.9 0 0 1 .708-1.157l7.901-7.902zm-6.773 9.304a1.1 1.1 0 0 0-.244.37l-.046.142-.502 2.007 2.008-.502.142-.046a1.1 1.1 0 0 0 .369-.243l5.472-5.472-1.728-1.727zm7.934-7.923-.032.023-1.157 1.156 1.727 1.727 1.156-1.157.023-.033a.1.1 0 0 0 0-.075l-.023-.033-1.586-1.585a.1.1 0 0 0-.108-.023" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M2.307 18.793v-12a2.9 2.9 0 0 1 2.9-2.9h5.5l.092.004a.9.9 0 0 1 0 1.791l-.092.005h-5.5a1.1 1.1 0 0 0-1.1 1.1v12a1.1 1.1 0 0 0 1.1 1.1h12a1.1 1.1 0 0 0 1.1-1.1v-5.5a.9.9 0 0 1 1.8 0v5.5a2.9 2.9 0 0 1-2.9 2.9h-12a2.9 2.9 0 0 1-2.9-2.9" })
  ] });
});
Edit.displayName = "Edit";
var Edit_default = Edit;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Edit
});
//# sourceMappingURL=Edit.cjs.map