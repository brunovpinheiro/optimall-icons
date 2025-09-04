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

// src/icons/Whatsapp.tsx
var Whatsapp_exports = {};
__export(Whatsapp_exports, {
  Whatsapp: () => Whatsapp,
  default: () => Whatsapp_default
});
module.exports = __toCommonJS(Whatsapp_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Whatsapp = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.002 1.248C6.064 1.248 1.25 6.062 1.25 12c0 1.901.415 3.561 1.289 5.113l-1.262 4.692a.75.75 0 0 0 .92.92l4.667-1.253c1.563.884 3.231 1.28 5.138 1.28 5.938 0 10.752-4.814 10.752-10.752S17.94 1.248 12.002 1.248M7 6.25a.75.75 0 0 0-.75.75c0 1.586.407 3.28 1.207 4.846l.004.007a10.94 10.94 0 0 0 3.752 4.196q.255.167.525.32l.022.012A10.7 10.7 0 0 0 17 17.75a.75.75 0 0 0 .75-.75v-2.619a.75.75 0 0 0-.589-.732l-3.265-.719a.75.75 0 0 0-.751.27l-1.204 1.532a9.4 9.4 0 0 1-2.782-2.915l1.665-.864a.75.75 0 0 0 .376-.873l-.949-3.288a.75.75 0 0 0-.72-.542z", clipRule: "evenodd" }) });
});
Whatsapp.displayName = "Whatsapp";
var Whatsapp_default = Whatsapp;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Whatsapp
});
//# sourceMappingURL=Whatsapp.cjs.map