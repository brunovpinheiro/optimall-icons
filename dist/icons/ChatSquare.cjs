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

// src/icons/ChatSquare.tsx
var ChatSquare_exports = {};
__export(ChatSquare_exports, {
  ChatSquare: () => ChatSquare,
  default: () => ChatSquare_default
});
module.exports = __toCommonJS(ChatSquare_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ChatSquare = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M5.22 22.8c-.44 0-.89-.04-1.33-.12a.92.92 0 0 1-.68-.57c-.11-.3-.05-.63.15-.88.45-.56.76-1.23.9-1.95.03-.18-.07-.41-.28-.62C2.06 16.71 1 14.16 1 11.47 1 5.7 5.89 1 11.9 1s10.9 4.7 10.9 10.47-4.89 10.47-10.9 10.47c-.68.04-1.41-.07-2.1-.2-.25-.05-.51-.1-.58-.1 0 .01-.26.15-.51.29-1.08.58-2.28.87-3.49.87m6.68-20c-5.02 0-9.1 3.89-9.1 8.67 0 2.21.87 4.31 2.46 5.92.63.64.91 1.45.76 2.22-.09.48-.24.94-.43 1.38.78-.05 1.56-.27 2.26-.65.55-.29.82-.43 1.13-.48s.59 0 1.15.11c.58.11 1.17.16 1.75.16h.01c5.02 0 9.1-3.89 9.1-8.67S16.92 2.8 11.9 2.8" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.65 11.9a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m3.99 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0", clipRule: "evenodd" })
  ] });
});
ChatSquare.displayName = "ChatSquare";
var ChatSquare_default = ChatSquare;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChatSquare
});
//# sourceMappingURL=ChatSquare.cjs.map