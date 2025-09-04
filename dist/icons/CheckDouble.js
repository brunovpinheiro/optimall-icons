// src/icons/CheckDouble.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var CheckDouble = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M17.223 7.19a1 1 0 0 0-1.446-1.38l-6.063 6.35a1 1 0 0 0 1.446 1.381zm-14 5.953a1 1 0 0 0-1.446 1.38l3.5 3.668a1 1 0 0 0 1.446 0l1.024-1.073a1 1 0 0 0-1.446-1.381L6 16.052zm19-5.953a1 1 0 0 0-1.446-1.38L11 16.052l-2.777-2.91a1 1 0 0 0-1.446 1.382l3.5 3.667a1 1 0 0 0 1.446 0z", clipRule: "evenodd" }) });
});
CheckDouble.displayName = "CheckDouble";
var CheckDouble_default = CheckDouble;
export {
  CheckDouble,
  CheckDouble_default as default
};
//# sourceMappingURL=CheckDouble.js.map