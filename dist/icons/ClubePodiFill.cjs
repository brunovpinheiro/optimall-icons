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

// src/icons/ClubePodiFill.tsx
var ClubePodiFill_exports = {};
__export(ClubePodiFill_exports, {
  ClubePodiFill: () => ClubePodiFill,
  default: () => ClubePodiFill_default
});
module.exports = __toCommonJS(ClubePodiFill_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ClubePodiFill = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.366 4.505c-2.47-2.1-6.01-2.02-8.35.12a6.3 6.3 0 0 0-8.35-.12 6.267 6.267 0 0 0-.18 9.36c1.27 1.16 2.52 2.38 3.79 3.61l.5.49c.42.41.98.64 1.55.64.13 0 .26-.01.39-.04.7-.13 1.27-.58 1.58-1.23.39-.83.16-1.58-.04-2.07-.1-.23-.18-.46-.27-.69a8 8 0 0 0 .79-.57 6.23 6.23 0 0 0 2.25-4.54c.06-1.24-.26-2.44-.87-3.46a4.49 4.49 0 0 1 6.03-.13c.96.82 1.53 2.03 1.55 3.31s-.5 2.51-1.44 3.38l-4.78 4.55a.9.9 0 0 0 1.24 1.3l4.76-4.54a6.28 6.28 0 0 0 2.01-4.72 6.26 6.26 0 0 0-2.18-4.64z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.126 18.315h-.02c-.36 0-.7.15-.95.41-.25.25-.39.6-.38.95 0 .36.14.7.39.95s.59.39.95.4c.18 0 .36-.04.53-.11a1.37 1.37 0 0 0 .85-1.28c-.02-.71-.65-1.31-1.37-1.31z" })
  ] });
});
ClubePodiFill.displayName = "ClubePodiFill";
var ClubePodiFill_default = ClubePodiFill;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClubePodiFill
});
//# sourceMappingURL=ClubePodiFill.cjs.map