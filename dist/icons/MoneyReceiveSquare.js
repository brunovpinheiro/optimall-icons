// src/icons/MoneyReceiveSquare.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var MoneyReceiveSquare = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.75 2.5a.75.75 0 0 1 .75-.75h11v1.5H3.25v17.5h17.5V10.5h1.5v11a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75zm9.5 5.834a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661s.382 1.283.886 1.66c.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.345v.835h1.5v-.834a2.95 2.95 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661s-.382-1.283-.886-1.66c-.504-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345V7.5h-1.5zm9.72-6.34-3.708 3.698V2.998h-1.5V8.25H21v-1.5h-2.674l3.704-3.695z", clipRule: "evenodd" }) });
});
MoneyReceiveSquare.displayName = "MoneyReceiveSquare";
var MoneyReceiveSquare_default = MoneyReceiveSquare;
export {
  MoneyReceiveSquare,
  MoneyReceiveSquare_default as default
};
//# sourceMappingURL=MoneyReceiveSquare.js.map