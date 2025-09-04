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

// src/icons/CreditsSwap.tsx
var CreditsSwap_exports = {};
__export(CreditsSwap_exports, {
  CreditsSwap: () => CreditsSwap,
  default: () => CreditsSwap_default
});
module.exports = __toCommonJS(CreditsSwap_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CreditsSwap = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 9.1a6.9 6.9 0 1 1 0 13.8A6.9 6.9 0 0 1 8 9.1m0 1.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M22 14.1a.9.9 0 0 1 .9.9 6.896 6.896 0 0 1-6.544 6.89L16 21.9a.9.9 0 0 1-.805-1.302l.857-1.715.046-.08a.9.9 0 0 1 1.564.886l-.08.16A5.095 5.095 0 0 0 21.1 15a.9.9 0 0 1 .9-.9m-4.877.788a.9.9 0 0 1-.3-1.776z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.957 1.1a6.944 6.944 0 0 1 1.166 13.788l-.15-.888-.15-.888a5.144 5.144 0 1 0-5.935-5.935L10 7.027l-.888-.15A6.945 6.945 0 0 1 15.957 1.1M8.116 2.107a.9.9 0 0 1 .689 1.295l-.857 1.715a.9.9 0 0 1-1.61-.805l.08-.162A5.1 5.1 0 0 0 2.9 9a.9.9 0 0 1-1.8 0c0-3.814 3.086-6.9 6.9-6.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.888 7.177a.9.9 0 0 1-1.776-.3z" })
  ] });
});
CreditsSwap.displayName = "CreditsSwap";
var CreditsSwap_default = CreditsSwap;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreditsSwap
});
//# sourceMappingURL=CreditsSwap.cjs.map