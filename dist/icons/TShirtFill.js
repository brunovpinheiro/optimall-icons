// src/icons/TShirtFill.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var TShirtFill = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.824 2.281A.75.75 0 0 1 6.41 2h3a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .586.281l3.44 4.302a1.75 1.75 0 0 1-.128 2.33l-3.148 3.148v7.689a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-7.69L2.513 8.914a1.75 1.75 0 0 1-.13-2.33z", clipRule: "evenodd" }) });
});
TShirtFill.displayName = "TShirtFill";
var TShirtFill_default = TShirtFill;
export {
  TShirtFill,
  TShirtFill_default as default
};
//# sourceMappingURL=TShirtFill.js.map