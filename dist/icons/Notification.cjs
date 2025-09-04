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

// src/icons/Notification.tsx
var Notification_exports = {};
__export(Notification_exports, {
  Notification: () => Notification,
  default: () => Notification_default
});
module.exports = __toCommonJS(Notification_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Notification = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.6a7.9 7.9 0 0 1 7.9 7.9v2.756c0 .556.221 1.09.615 1.484l.603.604a2.67 2.67 0 0 1-1.887 4.557h-2.923a4.402 4.402 0 0 1-8.616 0H4.77a2.67 2.67 0 0 1-1.887-4.557l.603-.604a2.1 2.1 0 0 0 .615-1.484V9.5A7.9 7.9 0 0 1 12 1.6M9.563 18.9a2.598 2.598 0 0 0 4.874 0zM12 3.4a6.1 6.1 0 0 0-6.1 6.1v2.756a3.9 3.9 0 0 1-1.142 2.758l-.604.603A.87.87 0 0 0 4.77 17.1h14.46a.868.868 0 0 0 .615-1.484l-.604-.602a3.9 3.9 0 0 1-1.142-2.758V9.5A6.1 6.1 0 0 0 12 3.4", clipRule: "evenodd" }) });
});
Notification.displayName = "Notification";
var Notification_default = Notification;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Notification
});
//# sourceMappingURL=Notification.cjs.map