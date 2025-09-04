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

// src/icons/Money.tsx
var Money_exports = {};
__export(Money_exports, {
  Money: () => Money,
  default: () => Money_default
});
module.exports = __toCommonJS(Money_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Money = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.902 7.507a.9.9 0 0 0-1.8 0v.33c-.457.11-.878.304-1.231.57-.578.433-1.02 1.1-1.02 1.913s.442 1.48 1.02 1.913c.577.433 1.333.674 2.13.674.446 0 .815.137 1.052.314.236.178.299.354.299.474 0 .119-.063.295-.3.473-.236.178-.605.314-1.05.314-.737 0-1.188-.354-1.308-.608a.9.9 0 1 0-1.629.767c.374.793 1.154 1.32 2.037 1.534v.332a.9.9 0 0 0 1.8 0v-.33c.456-.11.877-.304 1.23-.57.578-.432 1.02-1.1 1.02-1.912 0-.813-.442-1.48-1.02-1.914-.577-.433-1.333-.674-2.13-.674-.446 0-.815-.136-1.051-.314-.237-.178-.3-.354-.3-.473 0-.12.063-.296.3-.474.236-.177.605-.314 1.05-.314.737 0 1.188.354 1.308.609a.9.9 0 0 0 1.629-.767c-.374-.794-1.154-1.322-2.036-1.535z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12S5.98 22.9 12 22.9 22.9 18.02 22.9 12 18.02 1.1 12 1.1M2.9 12a9.1 9.1 0 1 1 18.2 0 9.1 9.1 0 0 1-18.2 0", clipRule: "evenodd" })
  ] });
});
Money.displayName = "Money";
var Money_default = Money;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Money
});
//# sourceMappingURL=Money.cjs.map