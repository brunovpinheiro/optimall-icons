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

// src/icons/NumberList.tsx
var NumberList_exports = {};
__export(NumberList_exports, {
  NumberList: () => NumberList,
  default: () => NumberList_default
});
module.exports = __toCommonJS(NumberList_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var NumberList = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M4.5 14.1c.236 0 .485-.004.71.04l.153.037A2.1 2.1 0 0 1 6.86 15.79l.026.173c.017.176.015.36.015.537s.002.361-.015.537l-.026.173a2.1 2.1 0 0 1-1.496 1.613l-.153.036c-.225.045-.474.041-.71.041-.145 0-.232 0-.297.002-.06.002-.071.005-.061.003a.3.3 0 0 0-.236.237c.002-.01-.001 0-.004.061-.002.065-.002.152-.002.297v.6H6l.092.005a.9.9 0 0 1 0 1.79L6 21.9H3.6c-.116 0-.294.002-.45-.02a1.2 1.2 0 0 1-.699-.331l.001-.001a1.2 1.2 0 0 1-.333-.7c-.02-.155-.02-.332-.02-.448v-.9c0-.236-.003-.485.042-.71l.036-.153A2.1 2.1 0 0 1 3.79 17.14l.173-.026c.176-.017.36-.015.537-.015.145 0 .232 0 .297-.002.061-.002.071-.005.061-.003l.084-.03a.3.3 0 0 0 .152-.207l.004-.061c.002-.065.002-.152.002-.297s0-.232-.002-.297c-.002-.062-.005-.071-.003-.061a.3.3 0 0 0-.237-.236c.01.002 0-.002-.061-.004-.065-.002-.152-.002-.297-.002H3a.9.9 0 0 1 0-1.8zm16.592 3.005a.9.9 0 0 1 0 1.79L21 18.9H11a.9.9 0 0 1 0-1.8h10zm0-6a.9.9 0 0 1 0 1.79L21 12.9H11a.9.9 0 0 1 0-1.8h10zM4.322 2.106A1.2 1.2 0 0 1 5.4 3.3v4.8H6l.092.004a.9.9 0 0 1 0 1.792L6 9.9H3a.9.9 0 0 1 0-1.8h.6V3.9H3a.9.9 0 0 1 0-1.8h1.2zm16.77 2.998a.9.9 0 0 1 0 1.792L21 6.9H11a.9.9 0 0 1 0-1.8h10z" }) });
});
NumberList.displayName = "NumberList";
var NumberList_default = NumberList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NumberList
});
//# sourceMappingURL=NumberList.cjs.map