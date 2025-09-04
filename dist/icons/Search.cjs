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

// src/icons/Search.tsx
var Search_exports = {};
__export(Search_exports, {
  Search: () => Search,
  default: () => Search_default
});
module.exports = __toCommonJS(Search_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Search = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M1 10.9c0 5.46 4.44 9.9 9.9 9.9a9.86 9.86 0 0 0 6.328-2.292l4.032 4.032a.94.94 0 0 0 .635.26h-.005.01-.005a.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-4.03-4.03a9.86 9.86 0 0 0 2.3-6.34c0-5.46-4.44-9.9-9.9-9.9S1 5.44 1 10.9m1.8 0c0-4.47 3.63-8.1 8.1-8.1S19 6.43 19 10.9 15.37 19 10.9 19s-8.1-3.63-8.1-8.1", clipRule: "evenodd" }) });
});
Search.displayName = "Search";
var Search_default = Search;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Search
});
//# sourceMappingURL=Search.cjs.map