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

// src/icons/Mission.tsx
var Mission_exports = {};
__export(Mission_exports, {
  Mission: () => Mission,
  default: () => Mission_default
});
module.exports = __toCommonJS(Mission_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Mission = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12 1.1q.841 0 1.646.124l.533.094.09.023a.9.9 0 0 1-.357 1.755l-.09-.014-.446-.08A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 8.997-10.475l-.079-.445-.014-.091a.9.9 0 0 1 1.755-.357l.023.09.094.533q.124.806.124 1.646c0 6.02-4.88 10.9-10.9 10.9S1.1 18.02 1.1 12 5.98 1.1 12 1.1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12 6.1a.9.9 0 0 1 0 1.8 4.1 4.1 0 1 0 4.1 4.1.9.9 0 0 1 1.8 0A5.9 5.9 0 1 1 12 6.1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.008 1.31c.724-.45 1.644-.113 1.976.618l.063.162.008.026.41 1.48 1.376.34.034.01.168.06c.754.327 1.094 1.27.635 2l-.112.153c-.554.67-1.309 1.557-2.325 2.077-.958.49-2.082.625-3.378.165L12.667 12.6l-.068.061a.9.9 0 0 1-1.205-1.334l4.217-4.219c-.441-1.216-.33-2.305.125-3.252.505-1.047 1.395-1.842 2.12-2.435zm.49 1.927c-.492.444-.9.9-1.14 1.399-.257.533-.35 1.173.013 2.033.895.344 1.533.23 2.05-.035.48-.246.903-.643 1.324-1.114l-1.22-.302a.9.9 0 0 1-.652-.632z", clipRule: "evenodd" })
  ] });
});
Mission.displayName = "Mission";
var Mission_default = Mission;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Mission
});
//# sourceMappingURL=Mission.cjs.map