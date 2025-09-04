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

// src/icons/Contract.tsx
var Contract_exports = {};
__export(Contract_exports, {
  Contract: () => Contract,
  default: () => Contract_default
});
module.exports = __toCommonJS(Contract_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Contract = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.91 22.8h-4c-2.98 0-4.62 0-5.76-1.14s-1.14-2.78-1.14-5.76v-8C1 4.92 1 3.28 2.14 2.14 3.29 1 4.93 1 7.91 1h4c2.98 0 4.62 0 5.76 1.14.87.87 1.07 2.03 1.13 3.73.02.5-.38.91-.87.93-.49 0-.91-.38-.93-.87-.04-1.46-.2-2.11-.6-2.51-.59-.59-1.73-.62-4.49-.62h-4c-2.76 0-3.9.02-4.49.62-.59.59-.62 1.73-.62 4.48v8c0 2.75.02 3.89.62 4.48s1.73.62 4.49.62h4c2.76 0 3.9-.02 4.49-.62.4-.4.56-1.05.6-2.51.02-.5.44-.87.93-.87.5.01.89.43.87.93-.05 1.7-.25 2.86-1.13 3.73-1.14 1.14-2.78 1.14-5.76 1.14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.9 18.8h-.005c.089 0 .187-.02.275-.05l2.98-.99c.13-.05.25-.12.35-.22l6.44-6.44c.32-.32.51-.51.65-.79.26-.53.26-1.16 0-1.68-.122-.263-.315-.456-.595-.735l-.055-.055c-.31-.31-.5-.5-.78-.64-.53-.26-1.15-.26-1.68 0-.28.14-.47.33-.79.65l-6.44 6.44c-.1.1-.18.22-.22.35l-.99 2.98c-.11.32-.02.68.22.92a.94.94 0 0 0 .635.26h-.005zm1.78-3.39-.36 1.07 1.07-.36 4.48-4.48-.71-.71zm5.75-5.75.71.71.54-.54.12-.118c.093-.09.157-.154.2-.212-.053-.115-.137-.199-.266-.327l-.054-.053-.094-.095a1.7 1.7 0 0 0-.246-.225c-.115.053-.198.137-.32.26l-.05.05-.55.55z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M8.4 19.8h.99c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.44l-1-2c-.31-.61-1.3-.61-1.61 0l-1 2H4.9c-.5 0-.9.4-.9.9s.4.9.9.9h1c.35 0 .66-.2.81-.5l.44-.89.44.89c.16.31.47.5.81.5m5.5-13h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9m-8 4h6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-6c-.5 0-.9.4-.9.9s.4.9.9.9" })
  ] });
});
Contract.displayName = "Contract";
var Contract_default = Contract;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Contract
});
//# sourceMappingURL=Contract.cjs.map