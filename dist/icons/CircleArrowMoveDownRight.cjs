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

// src/icons/CircleArrowMoveDownRight.tsx
var CircleArrowMoveDownRight_exports = {};
__export(CircleArrowMoveDownRight_exports, {
  CircleArrowMoveDownRight: () => CircleArrowMoveDownRight,
  default: () => CircleArrowMoveDownRight_default
});
module.exports = __toCommonJS(CircleArrowMoveDownRight_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CircleArrowMoveDownRight = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M9.18 1.471C3.363 3.03-.087 9.006 1.471 14.821s7.535 9.266 13.35 7.708 9.265-7.535 7.707-13.35S14.994-.087 9.179 1.47M3.21 14.355a9.1 9.1 0 1 1 17.58-4.71 9.1 9.1 0 0 1-17.58 4.71", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6.503 10.425a.9.9 0 0 0 1.13.583c2.036-.649 3.12-.711 4.347 0 .63.365 1.034.77 1.343 1.283q.125.209.237.454a5 5 0 0 0-.266-.128.9.9 0 0 0-.729 1.646q.209.094.512.269l.15.085c.153.088.321.185.477.268.203.108.457.232.71.302.157.043.537.127.912-.045.336-.101.558-.337.652-.442.165-.185.309-.41.423-.6.107-.177.195-.334.274-.474.124-.22.225-.401.34-.56a.9.9 0 0 0-1.457-1.057 5 5 0 0 0-.216.328 7 7 0 0 0-.477-.973c-.477-.794-1.11-1.407-1.982-1.913-1.901-1.103-3.619-.852-5.796-.157a.9.9 0 0 0-.584 1.13", clipRule: "evenodd" })
  ] });
});
CircleArrowMoveDownRight.displayName = "CircleArrowMoveDownRight";
var CircleArrowMoveDownRight_default = CircleArrowMoveDownRight;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CircleArrowMoveDownRight
});
//# sourceMappingURL=CircleArrowMoveDownRight.cjs.map