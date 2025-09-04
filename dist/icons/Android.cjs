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

// src/icons/Android.tsx
var Android_exports = {};
__export(Android_exports, {
  Android: () => Android,
  default: () => Android_default
});
module.exports = __toCommonJS(Android_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Android = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.22 1.46a.9.9 0 1 0-1.44 1.08l1.05 1.4A6.4 6.4 0 0 0 5.6 9.5V18c0 1.05.85 1.9 1.9 1.9h.6V22a.9.9 0 1 0 1.8 0v-2.1h4.2V22a.9.9 0 0 0 1.8 0v-2.1h.6a1.9 1.9 0 0 0 1.9-1.9V9.5c0-2.381-1.3-4.458-3.23-5.56l1.05-1.4a.9.9 0 0 0-1.44-1.08l-1.35 1.8a6.4 6.4 0 0 0-2.86 0zM16.5 18.1a.1.1 0 0 0 .1-.1v-7.1H7.4V18a.1.1 0 0 0 .1.1zm-9.083-9h9.166a4.6 4.6 0 0 0-9.166 0", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M4 10.1a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9m16 0a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9" })
  ] });
});
Android.displayName = "Android";
var Android_default = Android;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Android
});
//# sourceMappingURL=Android.cjs.map