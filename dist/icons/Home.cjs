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

// src/icons/Home.tsx
var Home_exports = {};
__export(Home_exports, {
  Home: () => Home,
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Home = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M10.9 22.8h2c4.02 0 6.04 0 7.47-1.44s1.43-3.46 1.43-7.49v-2.09c0-2 0-3.1-.5-4.12s-1.36-1.7-2.94-2.93l-1.036-.808C14.907 2.04 13.572 1 11.9 1S8.893 2.04 6.476 3.922l-.036.028-1.038.812C3.85 5.978 2.997 6.646 2.5 7.66 2 8.68 2 9.78 2 11.78v2.09c0 4.03 0 6.05 1.43 7.49 1.44 1.44 3.45 1.44 7.47 1.44M7.58 5.34C9.753 3.65 10.846 2.8 11.9 2.8l-.01-.01c1.054 0 2.147.85 4.32 2.54l.04.03 1.01.79c1.4 1.09 2.1 1.64 2.42 2.29s.32 1.54.32 3.33v2.09c0 3.53 0 5.31-.91 6.22-.615.615-1.618.814-3.29.879V17.9c0-1.02 0-1.58-.22-2.11-.29-.71-.86-1.28-1.57-1.57-.53-.22-1.09-.22-2.11-.22s-1.58 0-2.11.22c-.72.3-1.27.85-1.57 1.57C8 16.33 8 16.89 8 17.9v3.059c-1.672-.065-2.675-.264-3.29-.879-.91-.92-.91-2.69-.91-6.22v-2.09c0-1.78 0-2.68.32-3.33.31-.64 1.01-1.19 2.42-2.29l1-.78zM9.8 20.988V17.9c0-.73 0-1.22.08-1.42.12-.28.33-.49.6-.6.2-.08.66-.08 1.42-.08s1.22 0 1.42.08c.27.11.49.33.6.6.08.2.08.66.08 1.42v3.089l-1.1.001h-2z", clipRule: "evenodd" }) });
});
Home.displayName = "Home";
var Home_default = Home;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Home
});
//# sourceMappingURL=Home.cjs.map