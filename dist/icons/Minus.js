// src/icons/Minus.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Minus = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m20 11.1.092.005a.9.9 0 0 1 0 1.79L20 12.9H4a.9.9 0 0 1 0-1.8z" }) });
});
Minus.displayName = "Minus";
var Minus_default = Minus;
export {
  Minus,
  Minus_default as default
};
//# sourceMappingURL=Minus.js.map