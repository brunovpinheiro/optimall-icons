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

// src/icons/CheckList.tsx
var CheckList_exports = {};
__export(CheckList_exports, {
  CheckList: () => CheckList,
  default: () => CheckList_default
});
module.exports = __toCommonJS(CheckList_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CheckList = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M7.524 14.237a.9.9 0 0 1 .953 1.527c-.796.498-1.578 1.572-2.195 2.651a18 18 0 0 0-.886 1.776l-.046.11-.012.027-.002.006-.057.117a.9.9 0 0 1-1.507.078l-.07-.112c-.18-.345-.47-.664-.743-.91a5 5 0 0 0-.428-.344l-.022-.015-.003-.002h.003a.9.9 0 1 1 .983-1.507l-.277.425.277-.425v.001l.004.002.004.003.014.009.044.03q.055.038.146.105c.119.09.282.22.462.382q.065.06.133.127.187-.365.42-.775c.633-1.108 1.6-2.534 2.805-3.286m13.567 2.868a.9.9 0 0 1 0 1.79l-.092.006H11a.901.901 0 0 1 0-1.801h10zm0-6a.9.9 0 0 1 0 1.79l-.092.006H11a.901.901 0 0 1 0-1.801h10zM7.524 3.237a.9.9 0 0 1 .953 1.527c-.796.498-1.578 1.572-2.195 2.651a18 18 0 0 0-.886 1.776l-.046.11-.012.027-.002.006-.057.118a.9.9 0 0 1-1.507.077l-.07-.112c-.18-.345-.47-.664-.743-.91a5 5 0 0 0-.45-.36l-.003-.001h.003a.9.9 0 1 1 .983-1.507l-.277.425.277-.425v.001l.004.001.004.004.014.009a4 4 0 0 1 .19.135c.119.09.282.218.462.381q.065.061.133.128c.124-.242.265-.504.42-.775.633-1.108 1.6-2.534 2.805-3.286m13.567 1.868a.9.9 0 0 1 0 1.79L21 6.902H11A.901.901 0 0 1 11 5.1h10z" }) });
});
CheckList.displayName = "CheckList";
var CheckList_default = CheckList;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckList
});
//# sourceMappingURL=CheckList.cjs.map