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

// src/icons/NotificationOff.tsx
var NotificationOff_exports = {};
__export(NotificationOff_exports, {
  NotificationOff: () => NotificationOff,
  default: () => NotificationOff_default
});
module.exports = __toCommonJS(NotificationOff_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var NotificationOff = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.363 1.363a.9.9 0 0 1 1.205-.061l.069.061 20 20 .061.069a.901.901 0 0 1-1.267 1.266l-.068-.061-3.736-3.736h-1.32a4.402 4.402 0 0 1-8.616 0H4.768a2.67 2.67 0 0 1-1.886-4.557l.603-.604a2.1 2.1 0 0 0 .614-1.484V9.5c0-1.205.27-2.35.754-3.373l-3.49-3.49-.061-.068a.9.9 0 0 1 .061-1.206m8.2 17.538a2.598 2.598 0 0 0 4.873 0zM6.233 7.507A6.1 6.1 0 0 0 5.9 9.5v2.756a3.9 3.9 0 0 1-1.142 2.758l-.604.603a.87.87 0 0 0 .614 1.483h11.058z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12 1.6a7.9 7.9 0 0 1 7.9 7.9v2.756c0 .557.221 1.09.615 1.484l.603.604c.5.5.782 1.18.782 1.888a.9.9 0 0 1-1.8 0 .87.87 0 0 0-.254-.616l-.604-.602a3.9 3.9 0 0 1-1.143-2.758V9.5A6.1 6.1 0 0 0 8.39 4.582l-.077.051a.9.9 0 0 1-.989-1.501l.25-.176A7.87 7.87 0 0 1 12 1.6" })
  ] });
});
NotificationOff.displayName = "NotificationOff";
var NotificationOff_default = NotificationOff;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NotificationOff
});
//# sourceMappingURL=NotificationOff.cjs.map