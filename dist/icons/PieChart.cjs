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

// src/icons/PieChart.tsx
var PieChart_exports = {};
__export(PieChart_exports, {
  PieChart: () => PieChart,
  default: () => PieChart_default
});
module.exports = __toCommonJS(PieChart_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PieChart = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M19.74 5.07a11 11 0 0 1 2.4 3.59v.01l.011.026c.584 1.426 1.005 2.452.22 3.724-.016.02-.036.05-.056.08s-.04.06-.055.08c-.89 1.23-2.2 1.23-4.18 1.23h-2.11c-2.09 0-3.25 0-4.11-.86S11 10.94 11 8.84V6.73c0-1.98 0-3.29 1.22-4.17.03-.03.12-.09.17-.12 1.28-.79 2.319-.36 3.747.229l.003.001c1.35.56 2.57 1.37 3.6 2.4M18.09 12c1.89 0 2.4-.05 2.71-.47l.01-.01c.33-.53.25-.81-.32-2.18a9.1 9.1 0 0 0-2.01-3.01 9.4 9.4 0 0 0-3.01-2.01c-.87-.36-1.3-.52-1.62-.52-.19 0-.33.06-.5.16-.49.36-.54.87-.54 2.76v2.11c0 1.56 0 2.51.33 2.84s1.28.33 2.84.33z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M20.07 15.88a.9.9 0 0 1 1.18-.48h-.01a.9.9 0 0 1 .48 1.18c-1.3 3.09-4.12 5.34-7.54 6.02-.7.13-1.39.2-2.08.2-2.68 0-5.25-1.01-7.14-2.89-2.38-2.36-3.42-5.82-2.78-9.25.64-3.41 2.85-6.24 5.91-7.57.45-.2.98 0 1.18.46.2.45 0 .98-.46 1.18-2.52 1.1-4.34 3.44-4.86 6.26-.53 2.85.32 5.7 2.28 7.64 1.95 1.93 4.79 2.76 7.6 2.2 2.84-.56 5.17-2.41 6.24-4.95" })
  ] });
});
PieChart.displayName = "PieChart";
var PieChart_default = PieChart;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PieChart
});
//# sourceMappingURL=PieChart.cjs.map