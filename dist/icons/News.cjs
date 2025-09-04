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

// src/icons/News.tsx
var News_exports = {};
__export(News_exports, {
  News: () => News,
  default: () => News_default
});
module.exports = __toCommonJS(News_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var News = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M10.092 15.105a.9.9 0 0 1 0 1.79L10 16.9H6a.9.9 0 0 1 0-1.8h4zm4-4a.9.9 0 0 1 0 1.79L14 12.9H6a.9.9 0 0 1 0-1.8h8zm0-4.001a.9.9 0 0 1 0 1.792L14 8.9H6a.9.9 0 0 1 0-1.8h8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 2.1c1.389 0 2.521-.002 3.412.118.917.123 1.711.39 2.346 1.024.634.635.901 1.43 1.024 2.346.06.443.09.947.104 1.512H19c.682 0 1.283-.002 1.766.063.444.06.89.187 1.271.496l.16.144.144.16c.309.382.436.827.496 1.271.065.483.063 1.084.063 1.766v8a2.9 2.9 0 0 1-2.75 2.896L20 21.9H8c-1.389 0-2.521.002-3.412-.118-.917-.123-1.711-.39-2.346-1.024-.634-.634-.9-1.43-1.024-2.346-.12-.89-.118-2.023-.118-3.412V9c0-1.389-.002-2.521.118-3.412.123-.917.39-1.711 1.024-2.346.635-.634 1.43-.9 2.346-1.024C5.478 2.098 6.61 2.1 8 2.1zM8 3.9c-1.44 0-2.429.002-3.172.102-.717.096-1.07.268-1.313.513-.245.244-.417.596-.513 1.313C2.902 6.571 2.9 7.56 2.9 9v6c0 1.44.002 2.429.102 3.172.096.717.268 1.07.513 1.313.244.245.596.417 1.313.513.743.1 1.732.102 3.172.102h9.316A2.9 2.9 0 0 1 17.1 19V8.792c0-1.328-.007-2.257-.102-2.964-.096-.717-.268-1.07-.513-1.313-.244-.245-.596-.417-1.313-.513-.743-.1-1.732-.102-3.172-.102zM18.9 19a1.1 1.1 0 1 0 2.2 0v-8c0-.732-.002-1.192-.047-1.526-.042-.309-.105-.373-.13-.398-.024-.025-.09-.088-.397-.129-.334-.045-.793-.047-1.526-.047h-.1z", clipRule: "evenodd" })
  ] });
});
News.displayName = "News";
var News_default = News;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  News
});
//# sourceMappingURL=News.cjs.map