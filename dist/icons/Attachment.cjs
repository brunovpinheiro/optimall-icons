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

// src/icons/Attachment.tsx
var Attachment_exports = {};
__export(Attachment_exports, {
  Attachment: () => Attachment,
  default: () => Attachment_default
});
module.exports = __toCommonJS(Attachment_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Attachment = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.4 21.8c-4.63 0-8.4-3.77-8.4-8.4V7.9C4 4.65 6.65 2 9.9 2s5.9 2.65 5.9 5.9v5.5c0 1.88-1.52 3.4-3.4 3.4S9 15.27 9 13.4v-4c0-.5.4-.9.9-.9s.9.4.9.9v4c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6V7.9c0-2.26-1.84-4.1-4.1-4.1S5.8 5.64 5.8 7.9v5.5c0 3.64 2.96 6.6 6.6 6.6s6.6-2.96 6.6-6.6v-1.5c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 4.63-3.77 8.4-8.4 8.4" }) });
});
Attachment.displayName = "Attachment";
var Attachment_default = Attachment;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Attachment
});
//# sourceMappingURL=Attachment.cjs.map