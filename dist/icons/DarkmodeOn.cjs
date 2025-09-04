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

// src/icons/DarkmodeOn.tsx
var DarkmodeOn_exports = {};
__export(DarkmodeOn_exports, {
  DarkmodeOn: () => DarkmodeOn,
  default: () => DarkmodeOn_default
});
module.exports = __toCommonJS(DarkmodeOn_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var DarkmodeOn = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.53 22.8C6.72 22.8 2 18.08 2 12.27c0-4.91 3.34-9.13 8.12-10.25a.9.9 0 0 1 1 1.3c-.59 1.1-.9 2.35-.9 3.6 0 4.22 3.43 7.66 7.66 7.66 1.26 0 2.5-.31 3.6-.9a.88.88 0 0 1 .97.08c.28.22.41.58.33.92a10.48 10.48 0 0 1-10.25 8.12M8.76 4.39a8.7 8.7 0 0 0-4.96 7.88c0 4.81 3.92 8.73 8.73 8.73 3.44 0 6.46-1.97 7.88-4.96-.82.23-1.68.35-2.53.35-5.21 0-9.46-4.24-9.46-9.46 0-.86.12-1.71.35-2.53z" }) });
});
DarkmodeOn.displayName = "DarkmodeOn";
var DarkmodeOn_default = DarkmodeOn;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DarkmodeOn
});
//# sourceMappingURL=DarkmodeOn.cjs.map