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

// src/icons/Repeat.tsx
var Repeat_exports = {};
__export(Repeat_exports, {
  Repeat: () => Repeat,
  default: () => Repeat_default
});
module.exports = __toCommonJS(Repeat_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Repeat = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.71 5.07c-.24.57-.81.67-1.01.7-.23.03-.52.03-.8.03H9.1c-3.5 0-6.3 2.76-6.3 6.1 0 1.29.41 2.49 1.12 3.48.29.4.2.97-.2 1.25-.41.29-.97.2-1.26-.2A7.73 7.73 0 0 1 1 11.9C1 7.52 4.65 4 9.1 4h7.03l-.47-.45a.9.9 0 0 1-.01-1.27.89.89 0 0 1 1.27-.02l1 .97s.02.03.04.04c.19.19.4.39.54.57.13.17.46.64.21 1.23m1.38 2.1a.9.9 0 0 1 1.26.21 7.7 7.7 0 0 1 1.46 4.52c0 4.39-3.65 7.9-8.09 7.9H7.69l.47.45a.9.9 0 0 1 .02 1.27.9.9 0 0 1-1.27.02l-1-.98s-.02-.02-.04-.03c-.19-.19-.4-.39-.54-.57-.13-.16-.46-.64-.22-1.23.24-.57.81-.67 1.01-.7.23-.03.52-.03.8-.03h7.81c3.5 0 6.29-2.75 6.29-6.1 0-1.29-.41-2.49-1.12-3.48a.9.9 0 0 1 .21-1.26z", clipRule: "evenodd" }) });
});
Repeat.displayName = "Repeat";
var Repeat_default = Repeat;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Repeat
});
//# sourceMappingURL=Repeat.cjs.map