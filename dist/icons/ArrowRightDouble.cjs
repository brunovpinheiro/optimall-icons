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

// src/icons/ArrowRightDouble.tsx
var ArrowRightDouble_exports = {};
__export(ArrowRightDouble_exports, {
  ArrowRightDouble: () => ArrowRightDouble,
  default: () => ArrowRightDouble_default
});
module.exports = __toCommonJS(ArrowRightDouble_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ArrowRightDouble = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M11.775 5.466a.9.9 0 0 1 1.182-.241l.077.05v.001l.005.003.013.01.053.04.194.146a56 56 0 0 1 2.79 2.253c.762.66 1.547 1.391 2.148 2.072.3.339.572.686.775 1.023.189.313.388.729.388 1.177s-.2.864-.388 1.177a7.3 7.3 0 0 1-.775 1.023c-.601.68-1.386 1.412-2.147 2.073a53 53 0 0 1-2.79 2.252l-.195.147-.053.039-.013.01q-.003 0-.004.003h-.001a.9.9 0 0 1-1.069-1.449h.001l.003-.002.012-.01.048-.035.187-.14a56 56 0 0 0 2.694-2.175c.738-.641 1.454-1.312 1.977-1.904.263-.298.46-.555.584-.762.082-.135.111-.215.122-.247a1.3 1.3 0 0 0-.122-.247 5.6 5.6 0 0 0-.584-.762c-.523-.592-1.239-1.263-1.977-1.904a51 51 0 0 0-2.694-2.176l-.187-.14-.048-.035-.012-.008-.003-.002v-.001l-.072-.059a.9.9 0 0 1-.119-1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M4.775 5.466a.9.9 0 0 1 1.182-.241l.077.05v.001l.005.003.013.01.053.04.194.146a56 56 0 0 1 2.79 2.253c.762.66 1.547 1.391 2.148 2.072.3.339.572.686.775 1.023.189.313.388.729.388 1.177s-.2.864-.388 1.177a7.3 7.3 0 0 1-.775 1.023c-.601.68-1.386 1.412-2.148 2.073A53 53 0 0 1 6.3 18.525l-.195.147-.053.039-.013.01q-.003 0-.004.003h-.001l-.077.051a.9.9 0 0 1-.99-1.5l.002-.002.012-.01.048-.035.186-.14a56 56 0 0 0 2.695-2.175c.738-.641 1.454-1.312 1.977-1.904.263-.298.46-.555.584-.762.082-.135.111-.215.122-.247a1.3 1.3 0 0 0-.122-.247 5.6 5.6 0 0 0-.584-.762C9.364 10.4 8.648 9.728 7.91 9.087A51 51 0 0 0 5.215 6.91l-.186-.14-.048-.035-.012-.008-.003-.002v-.001l-.072-.059a.9.9 0 0 1-.119-1.2" })
  ] });
});
ArrowRightDouble.displayName = "ArrowRightDouble";
var ArrowRightDouble_default = ArrowRightDouble;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrowRightDouble
});
//# sourceMappingURL=ArrowRightDouble.cjs.map