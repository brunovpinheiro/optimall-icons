// src/icons/ExpandUpDownFill.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var ExpandUpDownFill = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m18 9-6-6-6 6zm0 6-6 6-6-6z" }) });
});
ExpandUpDownFill.displayName = "ExpandUpDownFill";
var ExpandUpDownFill_default = ExpandUpDownFill;
export {
  ExpandUpDownFill,
  ExpandUpDownFill_default as default
};
//# sourceMappingURL=ExpandUpDownFill.js.map