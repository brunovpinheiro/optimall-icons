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

// src/icons/Share.tsx
var Share_exports = {};
__export(Share_exports, {
  Share: () => Share,
  default: () => Share_default
});
module.exports = __toCommonJS(Share_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Share = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.82 9.289A3.9 3.9 0 0 0 17.9 10.8c2.15 0 3.9-1.75 3.9-3.9S20.05 3 17.9 3a3.905 3.905 0 0 0-3.826 4.657l-5.096 2.351A3.9 3.9 0 0 0 5.9 8.5C3.75 8.5 2 10.25 2 12.4s1.75 3.9 3.9 3.9a3.9 3.9 0 0 0 3.07-1.498l5.101 2.355a3.9 3.9 0 1 0 7.729.743c0-2.15-1.75-3.9-3.9-3.9a3.9 3.9 0 0 0-3.089 1.522l-5.088-2.348a3.9 3.9 0 0 0 .003-1.534zM15.8 6.9a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m-12 5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m14.1 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2", clipRule: "evenodd" }) });
});
Share.displayName = "Share";
var Share_default = Share;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Share
});
//# sourceMappingURL=Share.cjs.map