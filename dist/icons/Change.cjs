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

// src/icons/Change.tsx
var Change_exports = {};
__export(Change_exports, {
  Change: () => Change,
  default: () => Change_default
});
module.exports = __toCommonJS(Change_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Change = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M8.854 5.63a.9.9 0 0 0-1.286-1.26L5.282 6.705c-.32.327-.624.638-.825.91-.19.258-.52.789-.266 1.415.257.635.874.776 1.192.822.332.048.765.048 1.216.048H19a.9.9 0 0 0 0-1.8H6.436l.174-.178zm8.709 10.27-.173.178-2.244 2.292a.9.9 0 1 0 1.286 1.26l2.285-2.335c.32-.327.625-.638.825-.91.19-.258.52-.789.267-1.414-.258-.636-.874-.777-1.192-.823-.333-.048-.765-.048-1.216-.048H5a.9.9 0 1 0 0 1.8z" }) });
});
Change.displayName = "Change";
var Change_default = Change;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Change
});
//# sourceMappingURL=Change.cjs.map