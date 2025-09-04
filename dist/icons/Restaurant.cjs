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

// src/icons/Restaurant.tsx
var Restaurant_exports = {};
__export(Restaurant_exports, {
  Restaurant: () => Restaurant,
  default: () => Restaurant_default
});
module.exports = __toCommonJS(Restaurant_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Restaurant = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.433 17.301a.9.9 0 0 1 1.204 1.335l-3 3.001a.9.9 0 0 1-1.274-1.273l3.001-3.001z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.655 2.169a.9.9 0 0 1 .982.194l18 18 .061.068a.901.901 0 0 1-1.266 1.267l-.069-.062L12 14.273l-2.363 2.363a.9.9 0 0 1-1.274 0L5.606 13.88A15.4 15.4 0 0 1 1.1 2.999a.9.9 0 0 1 .555-.83m1.456 3.215a13.6 13.6 0 0 0 3.768 7.222l2.12 2.12L10.727 13z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M17.432 2.302a.9.9 0 0 1 1.204 1.335l-3 3c-.596.596-.73.747-.793.875a1.1 1.1 0 0 0 0 .977l.066.107c.092.124.278.319.719.76l.009.008.008.009c.589.588.738.722.866.785.308.152.67.152.977 0 .128-.064.279-.198.875-.794l3-3a.9.9 0 0 1 1.273 1.273l-3.354 3.354c-.34.335-.65.61-.995.78a2.9 2.9 0 0 1-2.575 0 3.2 3.2 0 0 1-.704-.506l-.371.372a.9.9 0 0 1-1.274-1.273l.371-.372a3.2 3.2 0 0 1-.505-.703 2.9 2.9 0 0 1 0-2.576c.228-.46.64-.855 1.134-1.35l3-3z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.363 4.363a.901.901 0 0 1 1.274 1.273l-3 3a.9.9 0 0 1-1.274-1.273z" })
  ] });
});
Restaurant.displayName = "Restaurant";
var Restaurant_default = Restaurant;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Restaurant
});
//# sourceMappingURL=Restaurant.cjs.map