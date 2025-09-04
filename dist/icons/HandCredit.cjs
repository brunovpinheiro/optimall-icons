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

// src/icons/HandCredit.tsx
var HandCredit_exports = {};
__export(HandCredit_exports, {
  HandCredit: () => HandCredit,
  default: () => HandCredit_default
});
module.exports = __toCommonJS(HandCredit_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var HandCredit = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.25 9a7.75 7.75 0 1 1 14.11 4.43.75.75 0 0 1-1.23-.86 6.25 6.25 0 1 0-10.78-.893.75.75 0 0 1-1.354.645A7.7 7.7 0 0 1 6.25 9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M14 4.25a.75.75 0 0 1 .75.75v.583h.813c.976 0 1.687.83 1.687 1.75V8c0 .362-.11.71-.303 1 .193.29.303.638.303 1v.667c0 .92-.71 1.75-1.687 1.75h-.813V13a.75.75 0 0 1-1.5 0v-.583H11.5a.75.75 0 0 1 0-1.5h.188V7.083H11.5a.75.75 0 0 1 0-1.5h1.75V5a.75.75 0 0 1 .75-.75m-.812 2.833V8.25h2.374c.06 0 .188-.066.188-.25v-.667c0-.184-.129-.25-.187-.25zm0 2.667v1.167h2.374c.06 0 .188-.066.188-.25V10c0-.184-.129-.25-.187-.25z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M3 13.25a.75.75 0 0 0 0 1.5h2.395c.182 0 .36.041.52.119l2.043.988c.365.177.767.268 1.174.268h1.042c.427 0 .777.228.953.547l-1.934.535c-.28.077-.582.05-.841-.076l-2.183-1.056a.75.75 0 1 0-.653 1.35l2.183 1.056a2.7 2.7 0 0 0 1.894.171l2.54-.702a.84.84 0 0 0 .617-.808l-.001-.087 4.064-1.25h.003a1.24 1.24 0 0 1 1.373.476c.116.161.056.382-.085.464l-7.516 4.336a1.24 1.24 0 0 1-.98.118L3.215 19.3a.75.75 0 1 0-.427 1.438l6.395 1.898c.724.215 1.5.121 2.156-.257l7.516-4.336c.933-.539 1.173-1.78.551-2.64a2.735 2.735 0 0 0-3.034-1.032h-.001l-4.127 1.269a2.6 2.6 0 0 0-2.069-1.016H9.132c-.182 0-.36-.04-.521-.118l-2.042-.989a2.7 2.7 0 0 0-1.174-.268z" })
  ] });
});
HandCredit.displayName = "HandCredit";
var HandCredit_default = HandCredit;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HandCredit
});
//# sourceMappingURL=HandCredit.cjs.map