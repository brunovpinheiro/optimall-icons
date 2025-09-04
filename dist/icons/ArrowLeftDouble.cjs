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

// src/icons/ArrowLeftDouble.tsx
var ArrowLeftDouble_exports = {};
__export(ArrowLeftDouble_exports, {
  ArrowLeftDouble: () => ArrowLeftDouble,
  default: () => ArrowLeftDouble_default
});
module.exports = __toCommonJS(ArrowLeftDouble_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowLeftDouble = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.043 5.225a.9.9 0 0 1 1.063 1.441l-.072.059-.004.003-.011.008-.048.035-.187.14A55 55 0 0 0 9.09 9.087c-.739.641-1.454 1.312-1.978 1.904a5.6 5.6 0 0 0-.584.762 1.3 1.3 0 0 0-.122.247c.011.032.041.112.122.247.125.207.322.464.584.762.524.592 1.24 1.263 1.978 1.904a51 51 0 0 0 2.694 2.176l.187.14.048.035.011.009.003.001.001.001.071.059a.9.9 0 0 1-1.062 1.441l-.077-.05-.001-.001-.004-.003-.014-.01-.052-.04q-.069-.05-.195-.146a56 56 0 0 1-2.79-2.252c-.76-.663-1.546-1.393-2.147-2.073a7.3 7.3 0 0 1-.776-1.023c-.164-.274-.337-.627-.378-1.011L4.6 12l.01-.166c.04-.384.214-.737.378-1.01A7 7 0 0 1 5.764 9.8c.6-.68 1.386-1.412 2.147-2.072a53 53 0 0 1 2.79-2.253l.195-.147.052-.039.014-.01q.003 0 .004-.003z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M18.043 5.225a.9.9 0 0 1 1.063 1.441l-.072.059-.004.003-.011.008-.048.035-.187.14a55 55 0 0 0-2.694 2.176c-.739.641-1.454 1.312-1.978 1.904a5.6 5.6 0 0 0-.584.762 1.3 1.3 0 0 0-.122.247c.011.032.041.112.122.247.125.207.322.464.584.762.524.592 1.24 1.263 1.978 1.904a51 51 0 0 0 2.694 2.176l.187.14.048.035.011.009.003.001.001.001.072.059a.9.9 0 0 1-1.063 1.441l-.077-.05-.001-.001-.004-.003-.014-.01-.052-.04q-.069-.05-.195-.146a56 56 0 0 1-2.79-2.252c-.761-.662-1.546-1.392-2.147-2.073a7.3 7.3 0 0 1-.776-1.023c-.165-.274-.337-.627-.378-1.011L11.6 12l.01-.166c.04-.384.213-.737.378-1.01a7 7 0 0 1 .776-1.024c.6-.68 1.386-1.412 2.147-2.072a53 53 0 0 1 2.79-2.253l.195-.147.052-.039.014-.01q.003 0 .004-.003z" })
  ] });
});
ArrowLeftDouble.displayName = "ArrowLeftDouble";
var ArrowLeftDouble_default = ArrowLeftDouble;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowLeftDouble
});
//# sourceMappingURL=ArrowLeftDouble.cjs.map