// src/icons/DragDropVertical.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var DragDropVertical = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m8.007 16.5.153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 1 1 0-3zM16 4.5a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3z" }) });
});
DragDropVertical.displayName = "DragDropVertical";
var DragDropVertical_default = DragDropVertical;
export {
  DragDropVertical,
  DragDropVertical_default as default
};
//# sourceMappingURL=DragDropVertical.js.map