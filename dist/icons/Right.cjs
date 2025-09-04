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

// src/icons/Right.tsx
var Right_exports = {};
__export(Right_exports, {
  Right: () => Right,
  default: () => Right_default
});
module.exports = __toCommonJS(Right_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Right = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M8.276 5.466a.9.9 0 0 1 1.181-.241l.078.05v.001l.004.003.014.01.053.04a38 38 0 0 1 .886.677 53 53 0 0 1 2.098 1.722c.761.66 1.547 1.391 2.148 2.072.3.339.572.686.775 1.023.188.313.388.729.388 1.177s-.2.864-.388 1.177a7.3 7.3 0 0 1-.775 1.023c-.601.68-1.386 1.412-2.148 2.073a53 53 0 0 1-2.79 2.252l-.194.147-.053.039-.014.01-.003.003h-.001a.9.9 0 0 1-1.068-1.449l.003-.002.012-.01.048-.035q.065-.047.186-.14a56 56 0 0 0 2.695-2.175c.738-.641 1.453-1.312 1.977-1.904.263-.298.46-.555.584-.762.082-.135.111-.215.122-.247a1.3 1.3 0 0 0-.122-.247 5.6 5.6 0 0 0-.584-.762c-.524-.592-1.239-1.263-1.977-1.904A51 51 0 0 0 8.716 6.91l-.186-.14-.048-.035-.012-.008-.003-.002v-.001a.9.9 0 0 1-.191-1.26" }) });
});
Right.displayName = "Right";
var Right_default = Right;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Right
});
//# sourceMappingURL=Right.cjs.map