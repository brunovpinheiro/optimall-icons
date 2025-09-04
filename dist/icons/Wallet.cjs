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

// src/icons/Wallet.tsx
var Wallet_exports = {};
__export(Wallet_exports, {
  Wallet: () => Wallet,
  default: () => Wallet_default
});
module.exports = __toCommonJS(Wallet_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Wallet = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.8 8.001V4.51C15.8 3.13 14.67 2 13.29 2c-.4 0-.8.1-1.15.28L3.25 6.85A2.3 2.3 0 0 0 2 8.9v7c0 2.98 0 4.62 1.14 5.76S5.92 22.8 8.9 22.8h6c2.98 0 4.62 0 5.76-1.14s1.14-2.78 1.14-5.76v-1c0-2.98 0-4.62-1.14-5.76-1.02-1.02-2.44-1.127-4.86-1.139M14.9 9.8H3.8v6.1c0 2.75.02 3.89.62 4.48.59.59 1.73.62 4.48.62h6c2.75 0 3.89-.02 4.48-.61s.62-1.73.62-4.49v-1c0-2.75-.02-3.89-.62-4.48-.59-.59-1.73-.62-4.48-.62M14 4.51V8H4.946l8.024-4.12c.43-.23 1.03.13 1.03.63", clipRule: "evenodd" }) });
});
Wallet.displayName = "Wallet";
var Wallet_default = Wallet;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Wallet
});
//# sourceMappingURL=Wallet.cjs.map