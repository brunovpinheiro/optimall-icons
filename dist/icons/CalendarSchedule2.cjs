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

// src/icons/CalendarSchedule2.tsx
var CalendarSchedule2_exports = {};
__export(CalendarSchedule2_exports, {
  CalendarSchedule2: () => CalendarSchedule2,
  default: () => CalendarSchedule2_default
});
module.exports = __toCommonJS(CalendarSchedule2_exports);
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var CalendarSchedule2 = React.forwardRef(({
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M6 1.1a.9.9 0 0 1 .9.9v.2c1.113-.1 2.463-.1 4.078-.1h2.043c1.616 0 2.965 0 4.079.1V2a.9.9 0 0 1 1.8 0v.523c.778.236 1.446.612 2.008 1.22.76.822 1.118 1.843 1.297 3.083.176 1.22.192 2.756.194 4.673V13a.9.9 0 1 1-1.8 0v-1.5a78 78 0 0 0-.033-2.6H3.433c-.033.922-.033 2.018-.033 3.343v.514c0 2.202.001 3.77.15 4.96.145 1.17.419 1.838.862 2.318.435.47 1.025.752 2.076.905 1.085.158 2.519.16 4.562.16a.9.9 0 1 1 0 1.8h-.072c-1.954 0-3.52 0-4.749-.179-1.277-.185-2.32-.58-3.138-1.463-.808-.874-1.16-1.973-1.328-3.319-.163-1.314-.163-2.994-.163-5.12v-.639c0-2.125 0-3.805.163-5.119.167-1.346.52-2.445 1.328-3.318.562-.608 1.23-.984 2.009-1.22V2a.9.9 0 0 1 .9-.9m-2.426 6h16.852l-.003-.017c-.151-1.048-.418-1.666-.836-2.118a2.4 2.4 0 0 0-.783-.56.9.9 0 0 1-1.704-.396c-1.031-.107-2.356-.109-4.15-.109h-1.9c-1.795 0-3.12.002-4.15.109a.9.9 0 0 1-1.705.395c-.321.147-.57.332-.783.56-.42.455-.687 1.078-.838 2.136", clipRule: "evenodd" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { fill: "currentColor", d: "M19.127 15.355a.9.9 0 0 0-1.255 1.29c.169.164.434.372.676.562l.056.045q.217.169.44.348H13a.9.9 0 0 0 0 1.8h6.044l-.439.348-.057.045c-.242.19-.507.398-.676.562a.9.9 0 0 0 1.255 1.29c.084-.081.258-.221.533-.437l.06-.047c.241-.19.528-.414.801-.646.293-.248.602-.53.844-.814.122-.143.245-.308.341-.488.093-.173.194-.42.194-.713 0-.292-.101-.54-.194-.713a2.8 2.8 0 0 0-.34-.488 7.5 7.5 0 0 0-.845-.814c-.273-.232-.56-.456-.801-.646l-.06-.047a9 9 0 0 1-.533-.437" })
  ] });
});
CalendarSchedule2.displayName = "CalendarSchedule2";
var CalendarSchedule2_default = CalendarSchedule2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CalendarSchedule2
});
//# sourceMappingURL=CalendarSchedule2.cjs.map