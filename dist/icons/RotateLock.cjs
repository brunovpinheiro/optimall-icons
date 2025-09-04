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

// src/icons/RotateLock.tsx
var RotateLock_exports = {};
__export(RotateLock_exports, {
  RotateLock: () => RotateLock,
  default: () => RotateLock_default
});
module.exports = __toCommonJS(RotateLock_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var RotateLock = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M12.024 1.1C5.993 1.1 1.1 5.978 1.1 12s4.893 10.9 10.924 10.9c4.48 0 8.33-2.69 10.015-6.539a.9.9 0 0 0-1.649-.722 9.13 9.13 0 0 1-8.366 5.461C6.983 21.1 2.9 17.024 2.9 12s4.083-9.1 9.124-9.1c4.3 0 7.905 2.967 8.87 6.957l-1.172-.239a.9.9 0 1 0-.359 1.764l2.457.5a.9.9 0 0 0 1.075-.971C22.347 5.4 17.688 1.1 12.025 1.1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "m9.337 10.059.004.093a2.65 2.65 0 0 0-1.617 1.77 4.7 4.7 0 0 0-.098.787c-.017.29-.025.624-.026.953a17 17 0 0 0 .053 1.507l.007.073.02.07c.341 1.282 1.251 1.865 2.117 2.042l.05.01.05.004c.495.044 2.217.038 3.128.035h.003l.42-.001c.586.01 1.203-.093 1.742-.448.556-.367.919-.932 1.114-1.633l.013-.046.008-.047c.044-.265.073-.94.076-1.559.001-.313-.004-.64-.02-.931a4.6 4.6 0 0 0-.101-.816l-.008-.033-.01-.032c-.311-.937-.945-1.455-1.594-1.699l.004-.109.003-.066c.005-.13.011-.279.012-.426.003-.338-.015-.776-.17-1.202-.774-2.195-3.836-2.377-4.9-.283-.25.469-.29.986-.296 1.368a10 10 0 0 0 .014.573zm3.483-1.103c-.236-.675-1.24-.782-1.6-.064l-.007.012-.006.012c-.041.076-.082.236-.086.547a8 8 0 0 0 .012.47v.018l.002.029h1.739v-.001q0-.038.003-.073c.005-.131.01-.248.01-.365.003-.283-.02-.457-.062-.571l-.002-.007zM9.707 12a.8.8 0 0 0-.24.367l-.005.03-.013.102q-.015.127-.026.314a17 17 0 0 0-.023.855c-.002.483.013.95.037 1.245.078.25.187.39.286.475q.154.135.386.19c.468.032 1.932.027 2.833.024l.515-.001h.017c.372.007.59-.062.724-.15.113-.075.252-.219.355-.558l.009-.094q.01-.122.018-.303a19 19 0 0 0 .004-1.662 4 4 0 0 0-.044-.449c-.093-.256-.23-.392-.359-.472a.93.93 0 0 0-.484-.134h-3.36c-.305 0-.5.104-.63.22", clipRule: "evenodd" })
  ] });
});
RotateLock.displayName = "RotateLock";
var RotateLock_default = RotateLock;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RotateLock
});
//# sourceMappingURL=RotateLock.cjs.map