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

// src/icons/ArrowRight.tsx
var ArrowRight_exports = {};
__export(ArrowRight_exports, {
  ArrowRight: () => ArrowRight,
  default: () => ArrowRight_default
});
module.exports = __toCommonJS(ArrowRight_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowRight = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.533 6.275a.9.9 0 1 0-1.067 1.45l.003.002.01.007.039.03.154.115a45 45 0 0 1 2.238 1.806A20 20 0 0 1 18.4 11.1H4a.9.9 0 1 0 0 1.8h14.4c-.413.446-.942.939-1.49 1.415a43 43 0 0 1-2.392 1.922l-.04.03-.01.006-.002.002a.9.9 0 1 0 1.068 1.45v-.001l.016-.011.044-.033a32 32 0 0 0 .74-.566 44 44 0 0 0 1.756-1.44c.636-.553 1.295-1.167 1.803-1.741a6 6 0 0 0 .662-.875c.16-.265.342-.637.345-1.049v-.02c-.004-.41-.185-.782-.344-1.047a6 6 0 0 0-.663-.875c-.508-.574-1.167-1.188-1.803-1.74a44 44 0 0 0-2.496-2.007l-.044-.033-.012-.008zM15 7l.533-.725zm0 10 .534.724z", clipRule: "evenodd" }) });
});
ArrowRight.displayName = "ArrowRight";
var ArrowRight_default = ArrowRight;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowRight
});
//# sourceMappingURL=ArrowRight.cjs.map