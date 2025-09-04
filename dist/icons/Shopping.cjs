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

// src/icons/Shopping.tsx
var Shopping_exports = {};
__export(Shopping_exports, {
  Shopping: () => Shopping,
  default: () => Shopping_default
});
module.exports = __toCommonJS(Shopping_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Shopping = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M16.9 16.8h-2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2c.5 0 .9.4.9.9s-.4.9-.9.9m0-3h-2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2c.5 0 .9.4.9.9s-.4.9-.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.9 22.8h20c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.1v-9.1c0-2.99-.91-3.9-3.9-3.9h-2.1V4.9c0-2.99-.91-3.9-3.9-3.9h-6C2.91 1 2 1.91 2 4.9V21h-.1c-.5 0-.9.4-.9.9s.4.9.9.9M16.8 21v-2.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9V21h-3.2v-9.1c0-1.98.12-2.1 2.1-2.1h4c1.98 0 2.1.12 2.1 2.1V21zM10 11.9V21H3.8v-6.2h2.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H3.8v-2.2h2.1c.5 0 .9-.4.9-.9S6.4 9 5.9 9H3.8V6.8h2.1c.5 0 .9-.4.9-.9S6.4 5 5.9 5H3.8v-.1c0-1.98.12-2.1 2.1-2.1h6c1.98 0 2.1.12 2.1 2.1V8h-.1c-2.99 0-3.9.91-3.9 3.9", clipRule: "evenodd" })
  ] });
});
Shopping.displayName = "Shopping";
var Shopping_default = Shopping;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shopping
});
//# sourceMappingURL=Shopping.cjs.map