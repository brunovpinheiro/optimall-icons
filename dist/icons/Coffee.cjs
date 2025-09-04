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

// src/icons/Coffee.tsx
var Coffee_exports = {};
__export(Coffee_exports, {
  Coffee: () => Coffee,
  default: () => Coffee_default
});
module.exports = __toCommonJS(Coffee_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Coffee = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.34 7.6c.566 0 1.069.021 1.497.091.425.07.852.198 1.21.465.504.375.717.897.801 1.443h.793c.477 0 .91.018 1.286.073.371.054.753.154 1.086.366.78.496.91 1.325.885 2.076-.04 1.206-.335 2.587-1.23 3.776-.901 1.198-2.335 2.1-4.46 2.486a10 10 0 0 1-2.606 2.952c-.562.432-1.112.713-1.736.877-.606.158-1.242.195-1.947.195H9.08c-.705 0-1.342-.037-1.947-.195-.624-.164-1.175-.445-1.737-.877-3.728-2.867-4.222-6.937-4.296-10.81-.016-.838.067-1.777.85-2.362.36-.268.786-.395 1.212-.465.428-.07.93-.092 1.496-.092zM4.66 9.4c-.538 0-.924.021-1.206.067-.284.047-.391.107-.425.132-.01.005-.142.089-.127.884.073 3.806.574 7.096 3.594 9.418.397.306.733.468 1.095.563.38.1.832.135 1.49.135h1.839c.658 0 1.11-.036 1.49-.135.363-.095.698-.257 1.096-.563 3.02-2.322 3.52-5.612 3.593-9.418.016-.803-.12-.88-.127-.884-.034-.025-.141-.085-.424-.132-.283-.045-.669-.067-1.206-.067zm14.214 2c-.065 1.645-.243 3.305-.745 4.877 1.017-.368 1.672-.899 2.101-1.469.6-.798.836-1.777.87-2.755.009-.278-.018-.415-.039-.473-.01-.03-.008-.021-.012-.024-.031-.02-.131-.068-.381-.104a7.5 7.5 0 0 0-1.026-.052z", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M6.928 3.34a.901.901 0 0 1 1.225 1.319l.002-.001.017-.017-.016.019a1 1 0 0 0-.094.142 1.45 1.45 0 0 0-.16.698.9.9 0 0 1-1.802 0c0-.669.182-1.19.378-1.553a2.7 2.7 0 0 1 .385-.542q.022-.024.04-.04l.014-.015.007-.006zl.305.329zm3.908-1.605a.9.9 0 0 1 .948 1.53c-.083.05-.314.27-.527.7a3.5 3.5 0 0 0-.355 1.535.9.9 0 0 1-1.8 0c0-.902.229-1.703.543-2.336.303-.61.727-1.142 1.19-1.429M13.61 3.19a.9.9 0 0 1 .984 1.486 1.4 1.4 0 0 0-.086.218 2.3 2.3 0 0 0-.107.606.9.9 0 0 1-1.8 0c0-.36.077-.785.189-1.143.057-.182.132-.377.228-.554a1.5 1.5 0 0 1 .51-.568z" })
  ] });
});
Coffee.displayName = "Coffee";
var Coffee_default = Coffee;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Coffee
});
//# sourceMappingURL=Coffee.cjs.map