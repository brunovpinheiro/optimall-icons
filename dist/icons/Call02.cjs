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

// src/icons/Call02.tsx
var Call02_exports = {};
__export(Call02_exports, {
  Call02: () => Call02,
  default: () => Call02_default
});
module.exports = __toCommonJS(Call02_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Call02 = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.91 21.8c-.32 0-.68-.03-1.13-.08C8.28 20.8 3 15.52 2.08 6.03c-.09-.92-.14-1.47.06-2.07.26-.73.84-1.38 1.54-1.7C4.26 2 4.83 2 5.88 2c.71 0 1.11 0 1.52.13.52.16.99.46 1.34.87.28.33.44.69.73 1.34l.4.91-.82.37.83-.36c.31.7.48 1.09.53 1.56.04.45-.02.91-.19 1.33-.17.44-.44.77-.94 1.36-.4.48-.57.69-.64.87-.05.15-.08.38-.06.54.03.18.12.36.38.85.8 1.49 1.57 2.27 3.06 3.06.49.26.66.35.85.38.16.03.39 0 .54-.05.17-.06.39-.24.86-.63.61-.5.93-.77 1.37-.94.42-.16.88-.23 1.33-.19.47.05.86.22 1.57.53l.91.4c.66.29 1.01.45 1.34.74.41.36.71.82.87 1.34.13.42.13.81.13 1.52 0 1.04 0 1.62-.26 2.2-.32.7-.97 1.29-1.69 1.54-.31.11-.6.14-.94.14zM5.88 3.8c-.79 0-1.23 0-1.45.1-.24.11-.5.39-.58.64-.08.22-.05.54.03 1.31.83 8.64 5.44 13.24 14.08 14.08.77.07 1.09.1 1.31.03.25-.09.53-.34.64-.59.1-.22.1-.68.1-1.45 0-.54 0-.84-.05-1-.06-.2-.18-.37-.33-.51-.12-.11-.41-.23-.88-.44l-.92-.41c-.53-.24-.83-.37-1.01-.39-.17-.02-.35 0-.5.07-.17.07-.43.28-.85.63-.59.49-.94.78-1.41.96-.44.16-.97.21-1.42.14-.5-.07-.87-.27-1.43-.57-1.81-.97-2.84-2-3.8-3.8-.31-.58-.5-.93-.57-1.43-.07-.46-.01-.99.15-1.42.17-.48.46-.83.95-1.4.36-.43.58-.7.65-.86.06-.16.09-.34.07-.51-.02-.18-.15-.47-.38-1l-.4-.91c-.21-.48-.34-.77-.45-.89q-.21-.24-.51-.33c-.16-.05-.48-.05-1-.05z", clipRule: "evenodd" }) });
});
Call02.displayName = "Call02";
var Call02_default = Call02;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Call02
});
//# sourceMappingURL=Call02.cjs.map