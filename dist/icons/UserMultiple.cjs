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

// src/icons/UserMultiple.tsx
var UserMultiple_exports = {};
__export(UserMultiple_exports, {
  UserMultiple: () => UserMultiple,
  default: () => UserMultiple_default
});
module.exports = __toCommonJS(UserMultiple_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var UserMultiple = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.5 6.9c0 2.7 2.2 4.9 4.9 4.9s4.9-2.2 4.9-4.9S12.1 2 9.4 2 4.5 4.2 4.5 6.9m1.8 0c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1S11.11 10 9.4 10 6.3 8.61 6.3 6.9", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.51 20.3h-.49c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h.49c.78 0 1.49-.32 2.29-1.03.237-.208.21-.288.2-.32-.3-.78-2.86-1.85-4.09-1.85-.5 0-.9-.4-.9-.9s.4-.9.9-.9c1.41 0 5.06 1.14 5.77 3.01.31.81.06 1.65-.68 2.3-1.14 1.01-2.24 1.48-3.49 1.48zm-2.91-9c-.3 0-.6-.03-.88-.09-.49-.1-.8-.57-.71-1.06a.9.9 0 0 1 1.06-.71c.17.03.35.05.53.05 1.32 0 2.4-.94 2.4-2.1s-1.07-2.1-2.4-2.1c-.18 0-.36.02-.53.05-.48.1-.96-.22-1.06-.71a.9.9 0 0 1 .71-1.06c.29-.06.58-.09.88-.09 2.31 0 4.19 1.75 4.19 3.9s-1.88 3.9-4.19 3.9z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.72 21.3c-1.36 0-2.57-.5-3.82-1.57-.84-.72-.94-1.45-.89-1.93.168-1.397 1.877-2.274 3.027-2.863l.423-.217c3.05-1.63 6.84-1.63 9.89 0l.422.217c1.15.59 2.86 1.466 3.028 2.863.06.48-.05 1.21-.9 1.93-1.25 1.07-2.46 1.57-3.82 1.57zm-.41-5-.42.22c-1.35.69-2.05 1.19-2.09 1.49 0 .02.04.15.28.35.92.79 1.73 1.14 2.65 1.14h7.35c.91 0 1.73-.35 2.65-1.14.24-.21.28-.33.28-.35-.04-.3-.74-.8-2.09-1.49l-.42-.22c-2.49-1.33-5.7-1.33-8.19 0", clipRule: "evenodd" })
  ] });
});
UserMultiple.displayName = "UserMultiple";
var UserMultiple_default = UserMultiple;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserMultiple
});
//# sourceMappingURL=UserMultiple.cjs.map