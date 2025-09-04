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

// src/icons/UserBlock.tsx
var UserBlock_exports = {};
__export(UserBlock_exports, {
  UserBlock: () => UserBlock,
  default: () => UserBlock_default
});
module.exports = __toCommonJS(UserBlock_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var UserBlock = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.9 11.8c-2.98 0-5.4-2.42-5.4-5.4S8.92 1 11.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.49 22.8c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56l.18-.105q.154-.088.28-.165c2.55-1.52 5.68-1.99 8.59-1.29.48.12.78.6.67 1.08-.12.48-.61.78-1.08.67-2.46-.59-5.1-.2-7.25 1.08q-.15.089-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.37 20.52 5.37 21 6.5 21h6.41c.5 0 .9.4.9.9s-.4.9-.9.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M14 18.4a4.4 4.4 0 1 0 8.8 0 4.4 4.4 0 0 0-8.8 0m1.8 0c0-.39.09-.76.24-1.09l3.45 3.45c-.33.15-.7.24-1.09.24-1.43 0-2.6-1.17-2.6-2.6m4.96 1.09-3.45-3.45c.33-.15.7-.24 1.09-.24 1.43 0 2.6 1.17 2.6 2.6 0 .39-.09.76-.24 1.09", clipRule: "evenodd" })
  ] });
});
UserBlock.displayName = "UserBlock";
var UserBlock_default = UserBlock;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserBlock
});
//# sourceMappingURL=UserBlock.cjs.map