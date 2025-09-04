// src/icons/RemoveCircle.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var RemoveCircle = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9m4.092 8.205a.9.9 0 0 1 0 1.79L16 12.9H8a.9.9 0 0 1 0-1.8h8z" }) });
});
RemoveCircle.displayName = "RemoveCircle";
var RemoveCircle_default = RemoveCircle;
export {
  RemoveCircle,
  RemoveCircle_default as default
};
//# sourceMappingURL=RemoveCircle.js.map