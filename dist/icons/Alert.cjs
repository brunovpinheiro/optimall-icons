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

// src/icons/Alert.tsx
var Alert_exports = {};
__export(Alert_exports, {
  Alert: () => Alert,
  default: () => Alert_default
});
module.exports = __toCommonJS(Alert_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Alert = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.9 17.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m-.9-3.9c0 .5.4.9.9.9s.9-.4.9-.9v-4c0-.5-.4-.9-.9-.9s-.9.4-.9.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.9 22.8c-5.05 0-7.59 0-9.14-1.43a5.44 5.44 0 0 1-1.67-2.96c-.43-2.07.83-4.31 3.36-8.77 2.51-4.46 3.78-6.71 5.77-7.37 1.1-.37 2.27-.37 3.37 0 1.98.657 3.238 2.879 5.743 7.306l.057.1c2.507 4.436 3.769 6.67 3.34 8.734a5.57 5.57 0 0 1-1.67 2.96c-1.55 1.43-4.09 1.43-9.14 1.43zm0-19c-.38 0-.75.06-1.12.18-1.316.435-2.525 2.565-4.712 6.419L6 10.52c-2.23 3.94-3.45 6.11-3.16 7.52.16.78.55 1.47 1.13 2 1.04.95 3.48.95 7.93.95s6.89 0 7.93-.95c.58-.53.97-1.22 1.13-2 .29-1.41-.93-3.58-3.16-7.52-2.22-3.94-3.45-6.11-4.78-6.55-.37-.12-.74-.18-1.12-.18z", clipRule: "evenodd" })
  ] });
});
Alert.displayName = "Alert";
var Alert_default = Alert;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert
});
//# sourceMappingURL=Alert.cjs.map