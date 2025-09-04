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

// src/icons/TShirt.tsx
var TShirt_exports = {};
__export(TShirt_exports, {
  TShirt: () => TShirt,
  default: () => TShirt_default
});
module.exports = __toCommonJS(TShirt_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var TShirt = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "m5 12.54-2.69-2.6-.047-.046C1.5 9.15.99 8.654.99 7.87c0-.8.52-1.31 1.32-2.07l2-1.94c.37-.36.6-.58.89-.75.272-.169.553-.259 1-.401l.09-.029 1.64-.53c.33-.11.73-.24 1.16 0 .45.26.53.69.6 1.07.19 1.01 1.12 1.74 2.19 1.74s2-.73 2.19-1.74c.07-.38.15-.81.6-1.06.43-.24.84-.11 1.17 0l1.64.53.12.039c.42.137.695.226.97.391.262.154.467.348.778.643l.102.097 2.01 1.95.02.019c.779.76 1.3 1.267 1.3 2.051 0 .79-.52 1.3-1.31 2.07l-2.67 2.59v4.04c0 2 0 3.1-.86 3.93-.94.9-3.36 1.3-5.81 1.3h-.01c-2.68 0-5.41-.48-6.26-1.3C5 19.68 5 18.58 5 16.58zm0-2.478V8.9c0-.5.4-.9.9-.9s.9.4.9.9v7.68c0 1.58.01 2.35.31 2.63.95.91 8.38 1.15 9.58 0 .3-.28.31-1.05.31-2.63V8.9c0-.5.4-.9.9-.9s.9.4.9.9v1.143l1.42-1.373c.3-.29.64-.62.75-.78-.11-.16-.44-.49-.74-.78l-2-1.94c-.31-.3-.45-.43-.56-.5-.119-.07-.307-.13-.71-.257l-.01-.003-1.2-.39c-.52 1.62-2.07 2.75-3.85 2.75S8.57 5.64 8.05 4.02l-1.2.39c-.42.13-.6.2-.72.26-.11.07-.25.2-.56.5L3.56 7.11c-.3.29-.64.62-.75.78.11.16.45.49.75.78z", clipRule: "evenodd" }) });
});
TShirt.displayName = "TShirt";
var TShirt_default = TShirt;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TShirt
});
//# sourceMappingURL=TShirt.cjs.map