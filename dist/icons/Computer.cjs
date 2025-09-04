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

// src/icons/Computer.tsx
var Computer_exports = {};
__export(Computer_exports, {
  Computer: () => Computer,
  default: () => Computer_default
});
module.exports = __toCommonJS(Computer_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Computer = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M21.82 3.3a5.4 5.4 0 0 0-1.33-1.33c-1.4-.98-3.13-.98-6.6-.98h-4C6.44 1 4.7 1 3.3 1.98c-.52.36-.96.81-1.33 1.33C.99 4.7.99 6.44.99 9.91s0 5.2.98 6.6c.36.52.81.96 1.33 1.33 1.33.93 2.99.97 6.15.98.12.77-.03 1.58-.45 2.14l-.04.06H6.91c-.5 0-.9.4-.9.9s.4.9.9.9h10c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.05l-.04-.06c-.42-.55-.57-1.37-.45-2.14 3.16 0 4.82-.04 6.15-.98.52-.36.96-.81 1.33-1.33.98-1.39.98-3.13.98-6.6s0-5.2-.98-6.6zM10.99 21c.26-.68.35-1.45.28-2.2h1.26c-.07.75.03 1.52.28 2.2zm9.36-5.54c-.24.34-.54.64-.88.88-.93.65-2.48.65-5.56.65h-4c-3.09 0-4.63 0-5.57-.65-.34-.24-.64-.54-.88-.88-.65-.93-.65-2.48-.65-5.56s0-4.64.65-5.56c.24-.35.54-.64.88-.88.93-.65 2.48-.65 5.56-.65h4c3.09 0 4.63 0 5.56.65.35.24.64.54.88.88.65.93.65 2.48.65 5.56s0 4.63-.65 5.56z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.9 14h-2c-.5 0-.9.4-.9.9s.4.9.9.9h2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9" })
  ] });
});
Computer.displayName = "Computer";
var Computer_default = Computer;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Computer
});
//# sourceMappingURL=Computer.cjs.map