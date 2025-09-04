// src/icons/ReceiveMoney.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var ReceiveMoney = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M1.249 12c0-5.937 4.813-10.75 10.75-10.75q1.104.002 2.15.215l-.3 1.47a9.25 9.25 0 1 0 7.214 7.214l1.471-.298A11 11 0 0 1 22.749 12c0 5.937-4.813 10.75-10.75 10.75S1.249 17.937 1.249 12m10-3.666a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661s.382 1.283.886 1.66c.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.345v.835h1.5v-.834a2.95 2.95 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661s-.382-1.283-.886-1.66c-.503-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345V7.5h-1.5zm10.222-6.86-3.708 3.699V2.479h-1.5V7.73H21.5v-1.5h-2.674l3.704-3.694z", clipRule: "evenodd" }) });
});
ReceiveMoney.displayName = "ReceiveMoney";
var ReceiveMoney_default = ReceiveMoney;
export {
  ReceiveMoney,
  ReceiveMoney_default as default
};
//# sourceMappingURL=ReceiveMoney.js.map