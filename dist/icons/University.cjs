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

// src/icons/University.tsx
var University_exports = {};
__export(University_exports, {
  University: () => University,
  default: () => University_default
});
module.exports = __toCommonJS(University_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var University = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.5 11.1a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9m3 0a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9M11.4 16a.9.9 0 1 0-1.8 0v.5a.9.9 0 1 0 1.8 0zm3 0a.9.9 0 1 0-1.8 0v.5a.9.9 0 0 0 1.8 0z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.9 5.882H16a.9.9 0 0 0 .9-.9c0-.75-.181-1.93-1.208-2.562a15 15 0 0 0-1.747-.935c-.334-.146-.713-.287-1.07-.35-.282-.049-.91-.118-1.367.342-.267.27-.35.587-.382.822-.027.198-.026.43-.026.634V7.1H6.5a.9.9 0 1 0 0 1.8h.1v3.2H2a.9.9 0 1 0 0 1.8h.1v7.2H2a.9.9 0 0 0 0 1.8h19.5a.9.9 0 0 0 .4-1.706V13.9h.1a.9.9 0 1 0 0-1.8h-4.6V8.9h.1a.9.9 0 1 0 0-1.8h-4.6zM12.469 2.9h.026zm.43.105q.147.052.326.13c.562.246 1.173.603 1.523.819a.5.5 0 0 1 .137.13H12.9zm0 18.096V20a.9.9 0 0 0-1.8 0v1.1H8.4V8.9h7.2v12.2zm-9-7.2h2.7v7.2H3.9zm13.5 0h2.7v7.2h-2.7z", clipRule: "evenodd" })
  ] });
});
University.displayName = "University";
var University_default = University;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  University
});
//# sourceMappingURL=University.cjs.map