// src/icons/More.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var More = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 4.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zM10.742 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m-.008 6c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25" }) });
});
More.displayName = "More";
var More_default = More;
export {
  More,
  More_default as default
};
//# sourceMappingURL=More.js.map