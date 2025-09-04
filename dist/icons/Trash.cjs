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

// src/icons/Trash.tsx
var Trash_exports = {};
__export(Trash_exports, {
  Trash: () => Trash,
  default: () => Trash_default
});
module.exports = __toCommonJS(Trash_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Trash = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M9.4 9.5c-.5 0-.9.4-.9.9v6c0 .5.4.9.9.9s.9-.4.9-.9v-6c0-.5-.4-.9-.9-.9m4.1.9c0-.5.4-.9.9-.9s.9.4.9.9v6c0 .5-.4.9-.9.9s-.9-.4-.9-.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.89 4.5h-4.37l-.44-.91-.026-.055C15.57 2.54 15.3 1.983 14.74 1.57c-.13-.09-.26-.18-.4-.25-.63-.33-1.26-.33-2.41-.33s-1.82 0-2.47.34c-.14.08-.27.16-.4.26-.57.44-.84 1.03-1.33 2.098v.002l-.37.8H2.9c-.5 0-.9.4-.9.9s.4.9.9.9h.65l.55 9.17c.16 2.73.25 4.1 1.03 5.23.39.56.88 1.03 1.47 1.39 1.17.72 2.55.72 5.28.72s4.1 0 5.28-.72c.58-.36 1.08-.82 1.47-1.38.784-1.121.869-2.479 1.036-5.157L20.24 6.3h.65c.5 0 .9-.4.9-.9s-.4-.9-.9-.9M9.38 4.44l.056-.12c.335-.725.525-1.138.734-1.29.05-.04.1-.07.15-.1.24-.13.73-.13 1.62-.13s1.34 0 1.58.12l.15.09c.21.16.42.59.8 1.37l.06.12H9.36l.03-.06zm8.5 10.93-.005.082c-.147 2.335-.22 3.516-.715 4.218-.25.35-.56.65-.93.87-.74.45-1.95.45-4.34.45s-3.6 0-4.34-.45c-.37-.23-.68-.52-.93-.88-.5-.72-.57-1.919-.71-4.305v-.005l-.55-9.06h13.09l-.56 9.07z", clipRule: "evenodd" })
  ] });
});
Trash.displayName = "Trash";
var Trash_default = Trash;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Trash
});
//# sourceMappingURL=Trash.cjs.map