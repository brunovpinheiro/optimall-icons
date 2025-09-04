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

// src/icons/Delete.tsx
var Delete_exports = {};
__export(Delete_exports, {
  Delete: () => Delete,
  default: () => Delete_default
});
module.exports = __toCommonJS(Delete_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var Delete = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M12.034 1.1c.504 0 .94 0 1.304.032.38.034.746.108 1.103.294l.204.117q.1.063.195.133l.117.093c.262.222.457.485.629.771.188.313.377.706.597 1.16l.436.9H21a.9.9 0 0 1 0 1.8h-.654l-.568 9.181c-.078 1.263-.14 2.274-.267 3.082-.114.72-.29 1.346-.62 1.904l-.152.236a4.9 4.9 0 0 1-1.47 1.382c-.642.39-1.355.559-2.183.638-.814.078-1.828.077-3.093.077-1.267 0-2.281 0-3.097-.078-.83-.08-1.543-.246-2.186-.638a4.9 4.9 0 0 1-1.32-1.18l-.15-.205c-.43-.618-.64-1.32-.77-2.143-.127-.809-.188-1.822-.264-3.087L3.652 6.4H3a.9.9 0 0 1 0-1.8h4.475l.365-.802.303-.655q.143-.303.28-.546c.194-.34.42-.647.747-.898l.196-.138q.101-.066.207-.122l.137-.067c.32-.145.65-.208.99-.24.37-.033.818-.032 1.334-.032M5.456 6.4l.547 9.06c.078 1.3.134 2.212.245 2.916.108.69.258 1.09.47 1.394l.095.13a3.1 3.1 0 0 0 .7.659l.134.087.124.07c.3.154.69.257 1.297.315.71.068 1.623.069 2.925.069 1.3 0 2.213 0 2.921-.069.693-.066 1.102-.191 1.418-.383.367-.224.685-.522.93-.875l.077-.119c.172-.29.299-.67.394-1.273.112-.703.17-1.613.25-2.911l.56-9.07zm6.578-3.5c-.549 0-.9.001-1.172.026-.19.017-.302.044-.378.073l-.066.03-.078.046-.075.052c-.069.053-.151.14-.278.361a7 7 0 0 0-.22.43l-.29.627-.025.055h5.167l-.056-.116c-.233-.482-.384-.79-.521-1.018a1.4 1.4 0 0 0-.225-.302l-.053-.046-.152-.095c-.075-.039-.187-.076-.434-.098-.265-.024-.608-.025-1.144-.025", clipRule: "evenodd" }) });
});
Delete.displayName = "Delete";
var Delete_default = Delete;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Delete
});
//# sourceMappingURL=Delete.cjs.map