// src/icons/ArrowRight.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var ArrowRight = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.533 6.275a.9.9 0 1 0-1.067 1.45l.003.002.01.007.039.03.154.115a45 45 0 0 1 2.238 1.806A20 20 0 0 1 18.4 11.1H4a.9.9 0 1 0 0 1.8h14.4c-.413.446-.942.939-1.49 1.415a43 43 0 0 1-2.392 1.922l-.04.03-.01.006-.002.002a.9.9 0 1 0 1.068 1.45v-.001l.016-.011.044-.033a32 32 0 0 0 .74-.566 44 44 0 0 0 1.756-1.44c.636-.553 1.295-1.167 1.803-1.741a6 6 0 0 0 .662-.875c.16-.265.342-.637.345-1.049v-.02c-.004-.41-.185-.782-.344-1.047a6 6 0 0 0-.663-.875c-.508-.574-1.167-1.188-1.803-1.74a44 44 0 0 0-2.496-2.007l-.044-.033-.012-.008zM15 7l.533-.725zm0 10 .534.724z", clipRule: "evenodd" }) });
});
ArrowRight.displayName = "ArrowRight";
var ArrowRight_default = ArrowRight;
export {
  ArrowRight,
  ArrowRight_default as default
};
//# sourceMappingURL=ArrowRight.js.map