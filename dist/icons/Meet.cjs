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

// src/icons/Meet.tsx
var Meet_exports = {};
__export(Meet_exports, {
  Meet: () => Meet,
  default: () => Meet_default
});
module.exports = __toCommonJS(Meet_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Meet = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.9 2a.9.9 0 1 0-1.8 0v.523c-.778.236-1.447.612-2.009 1.22-.808.873-1.16 1.972-1.328 3.318-.163 1.314-.163 2.994-.163 5.12v.639c0 2.125 0 3.805.163 5.119.167 1.346.52 2.445 1.328 3.319.818.883 1.86 1.278 3.138 1.463 1.23.18 2.795.179 4.749.179h.072a.9.9 0 1 0 0-1.8c-2.043 0-3.477-.002-4.562-.16-1.05-.153-1.641-.435-2.076-.905-.443-.48-.717-1.147-.863-2.318-.148-1.19-.15-2.758-.15-4.96v-.514c0-1.325.001-2.421.034-3.343h17.133c.03.864.034 1.882.034 3.1a.9.9 0 0 0 1.8 0c0-2.077-.005-3.723-.173-5.015-.172-1.312-.526-2.385-1.319-3.242-.562-.608-1.23-.984-2.008-1.22V2a.9.9 0 1 0-1.8 0v.2c-1.114-.1-2.463-.1-4.079-.1h-2.043c-1.615 0-2.965 0-4.078.1zm13.526 5.1H3.574c.15-1.058.418-1.681.838-2.135.212-.23.462-.414.783-.56A.9.9 0 0 0 6.9 4.008c1.03-.107 2.355-.109 4.15-.109h1.9c1.794 0 3.119.002 4.15.109a.9.9 0 0 0 1.704.395c.322.147.57.332.783.56.42.455.688 1.078.839 2.136", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M17.9 14a.9.9 0 1 0-1.8 0v3.1H13a.9.9 0 0 0 0 1.8h3.1V22a.9.9 0 0 0 1.8 0v-3.1H21a.9.9 0 1 0 0-1.8h-3.1z" })
  ] });
});
Meet.displayName = "Meet";
var Meet_default = Meet;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Meet
});
//# sourceMappingURL=Meet.cjs.map