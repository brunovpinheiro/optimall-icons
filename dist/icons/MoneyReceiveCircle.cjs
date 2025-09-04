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

// src/icons/MoneyReceiveCircle.tsx
var MoneyReceiveCircle_exports = {};
__export(MoneyReceiveCircle_exports, {
  MoneyReceiveCircle: () => MoneyReceiveCircle,
  default: () => MoneyReceiveCircle_default
});
module.exports = __toCommonJS(MoneyReceiveCircle_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var MoneyReceiveCircle = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.91S5.89 1.02 11.9 1.02c.73 0 1.47.07 2.18.22.49.1.8.57.7 1.06s-.57.81-1.06.7c-.6-.12-1.21-.18-1.82-.18-5.02 0-9.1 4.08-9.1 9.09S6.88 21 11.9 21s9.1-4.08 9.1-9.09c0-.61-.06-1.22-.18-1.82a.9.9 0 0 1 .7-1.06c.49-.1.96.21 1.06.7.15.71.22 1.44.22 2.18 0 6-4.89 10.89-10.9 10.89" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.9 16.81c-.5 0-.9-.4-.9-.9v-.21c-.81-.21-1.48-.72-1.8-1.4a.903.903 0 0 1 .43-1.2c.45-.21.99-.02 1.2.43.11.23.52.48 1.07.48.67 0 1.1-.35 1.1-.6s-.43-.6-1.1-.6c-1.63 0-2.9-1.05-2.9-2.4 0-1.08.83-1.98 2-2.29v-.21c0-.5.4-.9.9-.9s.9.4.9.9v.21c.81.21 1.48.72 1.8 1.4.21.45.02.99-.43 1.2s-.99.02-1.2-.43c-.11-.23-.52-.48-1.07-.48-.67 0-1.1.35-1.1.6s.43.6 1.1.6c1.63 0 2.9 1.05 2.9 2.4 0 1.08-.83 1.98-2 2.29v.21c0 .5-.4.9-.9.9m9.47-9.02h-.04l-3.12-.15c-1.28-.09-2.08-.93-2.08-2.14l-.12-3.05c-.02-.5.37-.91.87-.93.47 0 .92.37.93.87l.09 2.25 3.38-3.38a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-3.36 3.35 2.23.1a.902.902 0 0 1-.04 1.8z" })
  ] });
});
MoneyReceiveCircle.displayName = "MoneyReceiveCircle";
var MoneyReceiveCircle_default = MoneyReceiveCircle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MoneyReceiveCircle
});
//# sourceMappingURL=MoneyReceiveCircle.cjs.map