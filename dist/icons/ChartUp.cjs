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

// src/icons/ChartUp.tsx
var ChartUp_exports = {};
__export(ChartUp_exports, {
  ChartUp: () => ChartUp,
  default: () => ChartUp_default
});
module.exports = __toCommonJS(ChartUp_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var ChartUp = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.6 3a.9.9 0 0 1 .9-.9h3a.9.9 0 0 1 .9.9v3a.9.9 0 1 1-1.8 0v-.791c-.561.525-1.346 1.2-2.382 1.956-2.385 1.74-6.092 3.908-11.434 5.689a.9.9 0 1 1-.569-1.708c5.16-1.72 8.702-3.8 10.942-5.436a24 24 0 0 0 2.207-1.81H16.5a.9.9 0 0 1-.9-.9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M18.975 8.1h.05c.21 0 .412 0 .583.012.185.012.399.042.619.133a1.9 1.9 0 0 1 1.028 1.028c.091.22.12.433.133.619.012.17.012.372.012.583v9.05c0 .211 0 .413-.012.583a2 2 0 0 1-.133.619 1.9 1.9 0 0 1-1.028 1.028 2 2 0 0 1-.619.133c-.17.012-.372.012-.584.012h-.05c-.21 0-.412 0-.583-.012a2 2 0 0 1-.618-.133 1.9 1.9 0 0 1-1.029-1.028 2 2 0 0 1-.133-.619c-.011-.17-.011-.372-.011-.583v-9.05c0-.211 0-.413.011-.583a2 2 0 0 1 .133-.619 1.9 1.9 0 0 1 1.029-1.028c.22-.091.433-.12.618-.133.17-.012.372-.012.584-.012m-.526 1.814a.1.1 0 0 0-.036.035l-.006.065a8 8 0 0 0-.007.486v9c0 .245 0 .384.007.486l.006.065a.1.1 0 0 0 .036.035l.065.007c.102.006.24.007.486.007.245 0 .384 0 .485-.007l.066-.007a.1.1 0 0 0 .035-.035l.006-.065a8 8 0 0 0 .008-.486v-9c0-.245 0-.384-.008-.486l-.006-.065a.1.1 0 0 0-.035-.035l-.066-.007A8 8 0 0 0 19 9.9a8 8 0 0 0-.486.007zM11.975 11.6h.05c.21 0 .412 0 .583.012.185.012.399.042.619.133a1.9 1.9 0 0 1 1.028 1.028c.091.22.12.433.133.619.012.17.012.372.012.583v5.55c0 .211 0 .413-.012.583a2 2 0 0 1-.133.619 1.9 1.9 0 0 1-1.028 1.028 2 2 0 0 1-.619.133c-.17.012-.372.012-.584.012h-.05c-.21 0-.412 0-.583-.012a2 2 0 0 1-.618-.133 1.9 1.9 0 0 1-1.029-1.028 2 2 0 0 1-.133-.619 9 9 0 0 1-.011-.583v-5.55c0-.211 0-.413.011-.583a2 2 0 0 1 .133-.619 1.9 1.9 0 0 1 1.028-1.028c.22-.091.434-.12.62-.133.17-.012.371-.012.583-.012m-.526 1.814a.1.1 0 0 0-.035.035l-.007.065A8 8 0 0 0 11.4 14v5.5c0 .245 0 .384.007.486l.007.065a.1.1 0 0 0 .035.035l.065.007c.102.006.24.007.486.007.245 0 .384 0 .486-.007l.064-.007a.1.1 0 0 0 .036-.035l.006-.065a8 8 0 0 0 .008-.486V14c0-.245 0-.384-.008-.486l-.006-.065a.1.1 0 0 0-.036-.035l-.065-.007A8 8 0 0 0 12 13.4c-.246 0-.384 0-.486.007zm-6.474.686c-.212 0-.413 0-.584.012a2 2 0 0 0-.618.133 1.9 1.9 0 0 0-1.029 1.028 2 2 0 0 0-.133.619c-.011.17-.011.372-.011.583v3.05c0 .211 0 .413.011.583.013.186.042.4.133.62a1.9 1.9 0 0 0 1.029 1.027c.22.091.433.12.618.133.17.012.372.012.584.012h.05c.211 0 .412 0 .583-.012a2 2 0 0 0 .619-.133 1.9 1.9 0 0 0 1.028-1.028c.091-.22.12-.433.133-.619.012-.17.012-.372.012-.583v-3.05c0-.211 0-.413-.012-.583a2 2 0 0 0-.133-.62 1.9 1.9 0 0 0-1.028-1.027 2 2 0 0 0-.619-.133c-.17-.012-.372-.012-.584-.012zm-.561 1.85a.1.1 0 0 1 .035-.036l.065-.007c.101-.007.24-.007.486-.007.245 0 .384 0 .486.007l.064.007a.1.1 0 0 1 .036.035l.006.065a8 8 0 0 1 .008.486v3c0 .245 0 .384-.008.486l-.006.065a.1.1 0 0 1-.036.035l-.064.007A9 9 0 0 1 5 20.1c-.246 0-.385 0-.486-.007l-.065-.007a.1.1 0 0 1-.035-.035l-.007-.065A8 8 0 0 1 4.4 19.5v-3c0-.245 0-.384.007-.486z", clipRule: "evenodd" })
  ] });
});
ChartUp.displayName = "ChartUp";
var ChartUp_default = ChartUp;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChartUp
});
//# sourceMappingURL=ChartUp.cjs.map