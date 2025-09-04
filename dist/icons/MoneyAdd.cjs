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

// src/icons/MoneyAdd.tsx
var MoneyAdd_exports = {};
__export(MoneyAdd_exports, {
  MoneyAdd: () => MoneyAdd,
  default: () => MoneyAdd_default
});
module.exports = __toCommonJS(MoneyAdd_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var MoneyAdd = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.317 4.68c1.218-.57 2.857-.93 4.683-.93 1.417 0 2.597.236 3.419.471.344.098.624.196.831.275V11.5h1.5V3.536l-.416-.207-.003-.002-.008-.004-.024-.011-.082-.038a8 8 0 0 0-.298-.127 11 11 0 0 0-1.088-.368A14 14 0 0 0 17 2.25c-2.008 0-3.87.395-5.317 1.07-1.218.57-2.857.93-4.683.93h-.018c-1.009 0-2.337 0-4.703-.946L1.25 2.892v16.616l.471.188C4.341 20.744 5.88 20.75 7 20.75c2.008 0 3.87-.395 5.317-1.07l-.634-1.36c-1.218.57-2.857.93-4.683.93h-.018c-.94 0-2.157 0-4.232-.765V5.075c2.01.67 3.284.675 4.25.675 2.008 0 3.87-.395 5.317-1.07M22 4c.335-.67.335-.671.334-.671zm-2.75 17v-2.75H22v-1.5h-2.75V14h-1.5v2.75H15v1.5h2.75V21zM12 9.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 11.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M6.5 13.509V11.5h-2v2.009z", clipRule: "evenodd" }) });
});
MoneyAdd.displayName = "MoneyAdd";
var MoneyAdd_default = MoneyAdd;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MoneyAdd
});
//# sourceMappingURL=MoneyAdd.cjs.map