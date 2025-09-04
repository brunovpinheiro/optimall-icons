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

// src/icons/MoneySendSquare.tsx
var MoneySendSquare_exports = {};
__export(MoneySendSquare_exports, {
  MoneySendSquare: () => MoneySendSquare,
  default: () => MoneySendSquare_default
});
module.exports = __toCommonJS(MoneySendSquare_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var MoneySendSquare = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.4 17.3c-.5 0-.9-.4-.9-.9v-.22c-.81-.22-1.48-.72-1.8-1.4a.903.903 0 0 1 .43-1.2c.45-.21.99-.02 1.2.43.11.23.52.48 1.07.48.67 0 1.1-.36 1.1-.6s-.43-.6-1.1-.6c-1.63 0-2.9-1.05-2.9-2.4 0-1.08.83-1.98 2-2.29v-.21c0-.5.4-.9.9-.9s.9.4.9.9v.22c.81.22 1.48.72 1.8 1.4.21.45.02.99-.43 1.2s-.99.02-1.2-.43c-.11-.23-.52-.48-1.07-.48-.67 0-1.1.36-1.1.6s.43.6 1.1.6c1.63 0 2.9 1.05 2.9 2.4 0 1.08-.83 1.98-2 2.29v.21c0 .5-.4.9-.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.4 22.8c-4.72 0-7.09 0-8.75-1.65s-1.66-4.02-1.66-8.75S2 5.31 3.66 3.66C5.31 2 7.68 2 12.4 2h1.5c.5 0 .9.4.9.9s-.4.9-.9.9h-1.5c-4.22 0-6.34 0-7.47 1.13S3.8 8.18 3.8 12.4s0 6.34 1.13 7.47S8.18 21 12.4 21s6.34 0 7.47-1.13S21 16.62 21 12.4v-1.5c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 4.72 0 7.09-1.65 8.75-1.66 1.65-4.03 1.65-8.75 1.65" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M16.9 8.8c-.23 0-.46-.09-.64-.26a.9.9 0 0 1 0-1.27l3.36-3.36-2.23-.1a.897.897 0 0 1-.86-.94c.02-.5.46-.88.94-.86l3.12.15c1.28.09 2.09.93 2.09 2.14l.12 3.06c.02.5-.37.91-.87.93-.49.04-.91-.37-.93-.87l-.09-2.26-3.38 3.38c-.18.18-.41.26-.64.26z" })
  ] });
});
MoneySendSquare.displayName = "MoneySendSquare";
var MoneySendSquare_default = MoneySendSquare;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MoneySendSquare
});
//# sourceMappingURL=MoneySendSquare.cjs.map