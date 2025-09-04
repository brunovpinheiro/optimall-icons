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

// src/icons/Champion.tsx
var Champion_exports = {};
__export(Champion_exports, {
  Champion: () => Champion,
  default: () => Champion_default
});
module.exports = __toCommonJS(Champion_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Champion = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M14.813 1.1c.874 0 1.638-.003 2.25.096.656.107 1.255.349 1.718.91l.153.206c.328.486.444 1.02.463 1.59q.002.097.001.198h.305c.573 0 1.098-.002 1.514.055.435.06.928.209 1.292.648l.125.17c.257.403.288.845.257 1.23a6 6 0 0 1-.102.679l-.172.773-.39 1.7c-.649 2.817-2.942 4.915-5.74 5.471-.544.86-1.177 1.602-1.893 2.142.929.673 1.66 1.681 2.123 2.827l.088.26c.172.61.1 1.23-.14 1.732-.262.551-.82 1.113-1.624 1.113H8.959c-.804 0-1.363-.562-1.625-1.113a2.5 2.5 0 0 1-.051-1.992l.166-.383c.463-.987 1.133-1.847 1.957-2.444-.715-.54-1.35-1.282-1.894-2.14-2.706-.539-4.94-2.52-5.67-5.2l-.068-.274-.39-1.699c-.124-.538-.242-1.04-.275-1.452-.035-.44.012-.954.382-1.4l.141-.152c.345-.323.77-.443 1.152-.496.416-.057.94-.055 1.514-.055H4.6q0-.102.002-.199c.022-.65.171-1.255.616-1.795l.18-.196c.434-.424.964-.62 1.54-.714.61-.099 1.375-.096 2.248-.096zM12 17.9c-1.105 0-2.228.796-2.916 2.265l-.132.303a.7.7 0 0 0 .007.545.4.4 0 0 0 .055.087h5.971a.4.4 0 0 0 .056-.087.68.68 0 0 0 .032-.47l-.026-.075C14.378 18.806 13.179 17.9 12 17.9m-2.814-15c-.934 0-1.527.003-1.96.074-.29.047-.44.114-.536.194l-.083.084c-.114.139-.192.313-.205.709-.014.439.052 1.016.161 1.922l.075.575c.4 2.845 1.165 5.262 2.134 6.974 1.06 1.87 2.216 2.667 3.228 2.668 1.012 0 2.168-.798 3.227-2.668 1.034-1.826 1.836-4.455 2.21-7.55l.072-.62c.065-.565.1-.972.088-1.301-.01-.297-.055-.47-.126-.596l-.079-.113c-.096-.117-.231-.215-.618-.278-.433-.07-1.026-.074-1.96-.074zm-4.888 3c-.628 0-1.004.002-1.267.038a1 1 0 0 0-.13.025q-.002.036.003.099c.02.247.097.595.233 1.19l.391 1.7.05.201c.402 1.475 1.427 2.685 2.773 3.38-.68-1.674-1.192-3.66-1.496-5.829L4.776 6.1l-.023-.2zm14.925.199c-.29 2.405-.832 4.604-1.574 6.432 1.407-.727 2.463-2.014 2.823-3.58l.39-1.699.162-.725a4 4 0 0 0 .072-.465q.005-.063.003-.1a1 1 0 0 0-.13-.024c-.262-.036-.639-.038-1.266-.038h-.456z", clipRule: "evenodd" }) });
});
Champion.displayName = "Champion";
var Champion_default = Champion;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Champion
});
//# sourceMappingURL=Champion.cjs.map