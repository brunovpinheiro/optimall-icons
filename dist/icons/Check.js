// src/icons/Check.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Check = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M19.69 5.777a1 1 0 0 1 .033 1.413l-10.5 11a1 1 0 0 1-1.43.017l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.776 2.776 9.794-10.26a1 1 0 0 1 1.413-.032", clipRule: "evenodd" }) });
});
Check.displayName = "Check";
var Check_default = Check;
export {
  Check,
  Check_default as default
};
//# sourceMappingURL=Check.js.map