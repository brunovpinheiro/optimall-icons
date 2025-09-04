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

// src/icons/NotificationFill.tsx
var NotificationFill_exports = {};
__export(NotificationFill_exports, {
  NotificationFill: () => NotificationFill,
  default: () => NotificationFill_default
});
module.exports = __toCommonJS(NotificationFill_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var NotificationFill = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.75 20a4.249 4.249 0 0 1-7.5 0zM12 1.75a7.75 7.75 0 0 1 7.75 7.75v2.756c0 .597.237 1.169.66 1.59l.603.604a2.52 2.52 0 0 1-1.782 4.3H4.77a2.519 2.519 0 0 1-1.782-4.3l.604-.603.15-.165c.327-.4.509-.904.509-1.426V9.5A7.75 7.75 0 0 1 12 1.75" }) });
});
NotificationFill.displayName = "NotificationFill";
var NotificationFill_default = NotificationFill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NotificationFill
});
//# sourceMappingURL=NotificationFill.cjs.map