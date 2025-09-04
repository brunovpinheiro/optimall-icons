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

// src/icons/Calendar2.tsx
var Calendar2_exports = {};
__export(Calendar2_exports, {
  Calendar2: () => Calendar2,
  default: () => Calendar2_default
});
module.exports = __toCommonJS(Calendar2_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Calendar2 = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M7.51 12.9c0-.5.4-.9.9-.9s.9.4.9.9-.41.9-.9.9-.9-.4-.9-.9m0 4c0-.5.4-.9.9-.9s.9.4.9.9-.41.9-.9.9-.9-.4-.9-.9M16.4 12c-.5 0-.9.4-.9.9s.41.9.9.9.9-.4.9-.9-.4-.9-.9-.9m-4.9.9c0-.5.4-.9.9-.9s.9.4.9.9-.41.9-.9.9-.9-.4-.9-.9m.9 3.1c-.5 0-.9.4-.9.9s.41.9.9.9.9-.4.9-.9-.4-.9-.9-.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M19.3 2.43c.8.24 1.46.62 2.01 1.21 1.49 1.61 1.49 3.91 1.49 8.5v.51c0 4.59 0 6.89-1.49 8.5-1.52 1.64-3.81 1.64-7.96 1.64h-1.9c-4.15 0-6.44 0-7.96-1.64C2 19.54 2 17.24 2 12.65v-.51c0-4.59 0-6.89 1.49-8.5.55-.59 1.21-.97 2.01-1.21V1.9c0-.5.4-.9.9-.9s.9.4.9.9v.21C8.43 2 9.79 2 11.45 2h1.9c1.66 0 3.02 0 4.15.11V1.9c0-.5.4-.9.9-.9s.9.4.9.9zM6.4 4.8c-.35 0-.64-.2-.79-.49-.32.15-.58.32-.8.56-.45.49-.69 1.18-.83 2.14h16.84c-.14-.96-.38-1.66-.83-2.14-.22-.24-.49-.42-.8-.56-.15.29-.44.49-.79.49-.49 0-.89-.39-.9-.88-1-.11-2.33-.12-4.15-.12h-1.9c-1.82 0-3.14.02-4.15.12-.01.49-.41.88-.9.88m13.59 15.14C21 18.84 21 16.78 21 12.66h.01v-.51c0-1.32-.01-2.41-.04-3.34H3.84c-.04.93-.04 2.02-.04 3.34v.51c0 4.12 0 6.19 1.01 7.28.95 1.02 2.62 1.06 6.64 1.06h1.9c4.02 0 5.69-.04 6.64-1.06", clipRule: "evenodd" })
  ] });
});
Calendar2.displayName = "Calendar2";
var Calendar2_default = Calendar2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Calendar2
});
//# sourceMappingURL=Calendar2.cjs.map