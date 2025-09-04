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

// src/icons/Activity.tsx
var Activity_exports = {};
__export(Activity_exports, {
  Activity: () => Activity,
  default: () => Activity_default
});
module.exports = __toCommonJS(Activity_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Activity = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M13.35 16.8h.05c.34 0 .65-.19.8-.5l1.75-3.5h1.94c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.5c-.34 0-.65.2-.8.5l-1.08 2.15-2.28-6.07a.92.92 0 0 0-.8-.58.9.9 0 0 0-.85.5L7.83 11H5.89c-.5 0-.9.4-.9.9s.4.9.9.9h2.5c.34 0 .65-.2.8-.5l1.08-2.15 2.28 6.07c.13.33.44.56.8.58" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M3.58 20.22c1.58 1.58 3.83 1.58 8.32 1.58s6.74 0 8.32-1.58 1.58-3.83 1.58-8.32 0-6.74-1.58-8.32S16.38 2 11.9 2 5.16 2 3.58 3.58 2 7.41 2 11.9s0 6.74 1.58 8.32M4.86 4.85C5.91 3.8 7.91 3.8 11.9 3.8v-.01h.11c3.907 0 5.89 0 6.93 1.05 1.05 1.06 1.05 3.06 1.05 7.05s0 5.99-1.05 7.05c-1.05 1.05-3.06 1.05-7.04 1.05s-5.99 0-7.04-1.05-1.05-3.05-1.05-7.04 0-6 1.05-7.05", clipRule: "evenodd" })
  ] });
});
Activity.displayName = "Activity";
var Activity_default = Activity;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Activity
});
//# sourceMappingURL=Activity.cjs.map