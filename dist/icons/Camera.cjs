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

// src/icons/Camera.tsx
var Camera_exports = {};
__export(Camera_exports, {
  Camera: () => Camera,
  default: () => Camera_default
});
module.exports = __toCommonJS(Camera_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Camera = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.9 9.5a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8m0 7c-1.43 0-2.6-1.17-2.6-2.6s1.17-2.6 2.6-2.6 2.6 1.17 2.6 2.6-1.17 2.6-2.6 2.6", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.81 5.9c0 .5-.4.9-.9.9-.49 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M21.99 6.53q-.315-.405-.72-.72c-1.02-.78-1.91-.8-4.16-.8l-.37-.93-.005-.013c-.37-.938-.83-2.11-2.015-2.697-.71-.35-1.46-.35-2.82-.35s-2.1 0-2.82.35c-1.183.581-1.637 1.736-2.004 2.67l-.016.04-.37.93c-2.25 0-3.15.02-4.16.81q-.405.315-.72.72C1 7.59 1 8.95 1 11.41v4.5c0 2.98 0 4.62 1.14 5.76s2.78 1.14 5.76 1.14h8c2.98 0 4.62 0 5.76-1.14s1.14-2.78 1.14-5.76v-4.5c0-2.47 0-3.82-.81-4.87zM21 15.9c0 2.75-.02 3.89-.61 4.48s-1.73.62-4.49.62h-8c-2.75 0-3.89-.02-4.48-.62-.59-.59-.62-1.73-.62-4.48v-4.5c0-2.07 0-3.21.43-3.78q.165-.225.39-.39c.47-.36.87-.42 2.4-.43-.04.39.16.78.54.93q.165.06.33.06c.36 0 .7-.21.84-.57l1-2.52c.29-.76.57-1.47 1.14-1.75.34-.17.93-.17 2.02-.17s1.68 0 2.02.17c.57.28.85 1 1.14 1.75l1 2.51c.18.46.71.69 1.17.5.38-.15.59-.54.54-.93 1.53.01 1.93.07 2.4.43q.225.165.39.39c.43.57.43 1.71.43 3.78v4.5z", clipRule: "evenodd" })
  ] });
});
Camera.displayName = "Camera";
var Camera_default = Camera;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Camera
});
//# sourceMappingURL=Camera.cjs.map