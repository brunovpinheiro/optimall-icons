// src/icons/Wallet.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Wallet = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M15.8 8.001V4.51C15.8 3.13 14.67 2 13.29 2c-.4 0-.8.1-1.15.28L3.25 6.85A2.3 2.3 0 0 0 2 8.9v7c0 2.98 0 4.62 1.14 5.76S5.92 22.8 8.9 22.8h6c2.98 0 4.62 0 5.76-1.14s1.14-2.78 1.14-5.76v-1c0-2.98 0-4.62-1.14-5.76-1.02-1.02-2.44-1.127-4.86-1.139M14.9 9.8H3.8v6.1c0 2.75.02 3.89.62 4.48.59.59 1.73.62 4.48.62h6c2.75 0 3.89-.02 4.48-.61s.62-1.73.62-4.49v-1c0-2.75-.02-3.89-.62-4.48-.59-.59-1.73-.62-4.48-.62M14 4.51V8H4.946l8.024-4.12c.43-.23 1.03.13 1.03.63", clipRule: "evenodd" }) });
});
Wallet.displayName = "Wallet";
var Wallet_default = Wallet;
export {
  Wallet,
  Wallet_default as default
};
//# sourceMappingURL=Wallet.js.map