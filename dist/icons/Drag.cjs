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

// src/icons/Drag.tsx
var Drag_exports = {};
__export(Drag_exports, {
  Drag: () => Drag,
  default: () => Drag_default
});
module.exports = __toCommonJS(Drag_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Drag = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M15.334 16.395a.901.901 0 0 1 1.44 1.062l-.05.077v.001l-.003.003-.007.009-.026.036-.099.13a38 38 0 0 1-1.514 1.877c-.444.511-.941 1.046-1.41 1.46-.232.206-.48.4-.726.549-.222.133-.557.301-.94.301s-.717-.168-.939-.301a5 5 0 0 1-.726-.55c-.469-.413-.966-.948-1.41-1.46a36 36 0 0 1-1.514-1.875l-.099-.131-.026-.036-.007-.01-.003-.003-.05-.077a.9.9 0 0 1 1.44-1.062l.06.07.001.003.005.008.023.03.092.124a38 38 0 0 0 1.438 1.78c.424.489.861.954 1.242 1.29q.287.253.464.358l.01.005.01-.005q.175-.105.463-.358c.38-.336.818-.801 1.242-1.29a34 34 0 0 0 1.438-1.78l.092-.123.023-.031.005-.008.002-.001z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 9.1a2.9 2.9 0 1 1 0 5.801A2.9 2.9 0 0 1 12 9.1m0 1.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.14 2.107c.324.034.605.177.799.294.246.149.494.343.727.55.468.413.965.948 1.409 1.46a36 36 0 0 1 1.514 1.875l.099.131.026.036.007.01.003.003.05.077a.9.9 0 0 1-1.44 1.062l-.06-.07-.001-.003-.005-.008-.023-.03-.092-.124a37 37 0 0 0-1.438-1.78 14 14 0 0 0-1.242-1.29 3.4 3.4 0 0 0-.464-.358L12 3.937l-.01.005q-.175.105-.463.358c-.38.336-.818.801-1.242 1.29a34 34 0 0 0-1.438 1.78l-.092.123-.023.031-.005.008-.002.001a.901.901 0 0 1-1.45-1.067l.002-.001.002-.003.007-.009.026-.036.099-.13A38 38 0 0 1 8.924 4.41c.444-.511.941-1.046 1.41-1.46.232-.206.48-.4.726-.549.222-.133.557-.301.94-.301z" })
  ] });
});
Drag.displayName = "Drag";
var Drag_default = Drag;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drag
});
//# sourceMappingURL=Drag.cjs.map