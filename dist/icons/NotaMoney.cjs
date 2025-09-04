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

// src/icons/NotaMoney.tsx
var NotaMoney_exports = {};
__export(NotaMoney_exports, {
  NotaMoney: () => NotaMoney,
  default: () => NotaMoney_default
});
module.exports = __toCommonJS(NotaMoney_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var NotaMoney = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M7.9 5h8c.5 0 .9.4.9.9s-.4.9-.9.9h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9m2 4h-2c-.5 0-.9.4-.9.9s.4.9.9.9h2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9m3.9 2.09c0 .19.25.41.6.41 1.32 0 2.4.99 2.4 2.21 0 .93-.62 1.72-1.5 2.05v.14c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-.14c-.61-.22-1.11-.68-1.35-1.27-.18-.46.04-.98.5-1.17.46-.18.98.04 1.17.5.06.15.28.31.58.31.35 0 .6-.22.6-.41s-.25-.41-.6-.41c-1.32 0-2.4-.99-2.4-2.21 0-.93.62-1.72 1.5-2.05v-.14c0-.5.4-.9.9-.9s.9.4.9.9v.14c.61.22 1.11.68 1.35 1.27.18.46-.04.98-.5 1.17a.907.907 0 0 1-1.17-.5c-.06-.15-.28-.31-.58-.31-.35 0-.6.22-.6.41" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M13.9 1c2.98 0 4.62 0 5.76 1.15s1.14 2.8 1.14 5.8v10.59c0 1.72 0 2.76-.88 3.32-1.125.736-2.398-.151-3.16-.682l-.01-.008q-.165-.12-.3-.21l-.072-.045c-.216-.136-.426-.267-.498-.285-.019.01-.093.056-.186.116-.106.067-.238.15-.344.214l-1.925 1.22c-.592.374-.98.62-1.525.62s-.933-.246-1.525-.62L8.45 20.96l-.072-.045c-.216-.136-.426-.267-.498-.285-.019.01-.093.056-.186.116-.106.067-.238.15-.344.214q-.135.09-.3.21l-.02.015c-.763.531-2.02 1.408-3.15.675C3 21.3 3 20.26 3 18.54V7.95c0-2.99 0-4.65 1.14-5.8S6.92 1 9.9 1zm5.02 19.34c.08-.29.08-1.05.08-1.79V7.95c0-2.78-.03-3.93-.62-4.53s-1.73-.62-4.48-.62h-4c-2.75 0-3.89.02-4.48.62-.6.6-.62 1.75-.62 4.53v10.6c0 .74 0 1.5.08 1.79.29-.05.9-.47 1.14-.64q.108-.07.202-.136.089-.062.168-.114c.55-.35.96-.61 1.51-.61h.06c.506.02.87.247 1.404.582l.046.028 1.91 1.21.2.122c.18.112.344.213.41.228.03-.02.29-.19.55-.35l1.91-1.21c.58-.37 1.01-.63 1.57-.61.506.02.87.247 1.404.582l.046.028.14.095q.108.069.23.155c.24.17.85.6 1.14.64", clipRule: "evenodd" })
  ] });
});
NotaMoney.displayName = "NotaMoney";
var NotaMoney_default = NotaMoney;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NotaMoney
});
//# sourceMappingURL=NotaMoney.cjs.map