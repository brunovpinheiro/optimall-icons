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

// src/icons/Signature.tsx
var Signature_exports = {};
__export(Signature_exports, {
  Signature: () => Signature,
  default: () => Signature_default
});
module.exports = __toCommonJS(Signature_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Signature = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M1.9 22.8a.9.9 0 0 1-.67-1.5c1.45-1.62 2.77-3.77 3.82-6.01C1.91 11.22.82 6.96 2.12 3.8c.65-1.6 1.87-2.64 3.25-2.78 1.29-.14 2.54.53 3.43 1.83 1.49 2.18.48 7.32-1.63 12.13.04.02.05.03.05.03.14-.08.61-.74.96-1.23.43-.61.93-1.3 1.56-1.95.73-.75 1.66-.91 2.5-.44.16.09.32.21.47.34.61-.85 1.41-1.52 2.36-1.7 1.29-.25 2.12.75 2.8 1.54.52.61 1.01 1.19 1.57 1.23.48.03 1.12-.29 1.86-.95.37-.33.94-.29 1.27.08s.29.94-.08 1.27c-1.15 1.01-2.19 1.46-3.18 1.39-1.31-.1-2.14-1.08-2.81-1.87-.39-.46-.84-.98-1.08-.94-.53.1-1.12.68-1.59 1.54.43.98.61 2.07.42 2.8-.18.68-.7 1.11-1.35 1.11s-1.38-.41-1.49-1.56c-.06-.59.09-1.43.41-2.27-.13-.19-.28-.35-.44-.45-.1-.06-.15-.09-.34.11-.54.56-.99 1.19-1.39 1.74-.74 1.04-1.39 1.94-2.41 1.98-.31 0-.59-.07-.83-.19-1.12 2.25-2.46 4.34-3.85 5.89-.18.2-.42.3-.67.3zm3.8-20h-.14c-.72.08-1.38.7-1.78 1.67-.77 1.86-.55 5.09 2.1 8.9C7.53 9.24 8.24 5.2 7.32 3.86c-.48-.69-1.04-1.07-1.62-1.07zm13.2 19h-10c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h10c.5 0 .9.4.9.9s-.4.9-.9.9" }) });
});
Signature.displayName = "Signature";
var Signature_default = Signature;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Signature
});
//# sourceMappingURL=Signature.cjs.map