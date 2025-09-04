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

// src/icons/PaintBoard.tsx
var PaintBoard_exports = {};
__export(PaintBoard_exports, {
  PaintBoard: () => PaintBoard,
  default: () => PaintBoard_default
});
module.exports = __toCommonJS(PaintBoard_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PaintBoard = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.905 15.8h.005-.01zm.172-.017c-.06.009-.112.017-.172.017a.91.91 0 0 1-.875-.7c-.11-.49.19-.96.68-1.07.48-.11.97.2 1.07.68.11.49-.2.97-.68 1.07z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.4 10.8C8.08 10.8 7 9.72 7 8.4S8.08 6 9.4 6s2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4m0-3c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6M14 9.4c0 1.32 1.08 2.4 2.4 2.4s2.4-1.08 2.4-2.4S17.72 7 16.4 7 14 8.08 14 9.4m1.8 0c0-.33.27-.6.6-.6s.6.27.6.6-.27.6-.6.6-.6-.27-.6-.6", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.34 22.8c.64 0 1.41-.05 1.95-.58.23-.23.51-.65.51-1.32 0-.855-.416-1.484-.76-2.005l-.03-.045c-.46-.69-.61-.96-.31-1.55.38-.75.85-.83 2.68-.83.86 0 1.92 0 3.15-.18 3.27-.47 3.27-3.22 3.27-4.39C22.8 5.89 17.91 1 11.9 1S1 5.89 1 11.9s4.89 10.9 10.9 10.9zM2.8 11.9c0-5.02 4.08-9.1 9.1-9.1h.01c5.02 0 9.1 4.08 9.1 9.1 0 1.86-.37 2.42-1.73 2.61-1.1.16-2.05.16-2.89.16-1.74 0-3.37 0-4.29 1.83-.78 1.57-.06 2.65.43 3.37.29.43.47.72.51 1.06-.118.073-.547.071-.828.07H11.9c-5.02 0-9.1-4.08-9.1-9.1", clipRule: "evenodd" })
  ] });
});
PaintBoard.displayName = "PaintBoard";
var PaintBoard_default = PaintBoard;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PaintBoard
});
//# sourceMappingURL=PaintBoard.cjs.map