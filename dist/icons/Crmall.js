// src/icons/Crmall.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Crmall = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M4 4a1 1 0 0 1 1-1h10.044a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 7.147a1 1 0 0 1 1-1h13.618a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm5.824 7.147a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h3.824a1 1 0 0 0 1-1z" }) });
});
Crmall.displayName = "Crmall";
var Crmall_default = Crmall;
export {
  Crmall,
  Crmall_default as default
};
//# sourceMappingURL=Crmall.js.map