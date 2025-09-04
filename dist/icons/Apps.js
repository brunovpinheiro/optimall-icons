// src/icons/Apps.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Apps = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M6 1.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M2.9 6a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0M6 13.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M2.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0M13.1 6a4.9 4.9 0 1 1 9.8 0 4.9 4.9 0 0 1-9.8 0M18 2.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2m0 10.2a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M14.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0", clipRule: "evenodd" }) });
});
Apps.displayName = "Apps";
var Apps_default = Apps;
export {
  Apps,
  Apps_default as default
};
//# sourceMappingURL=Apps.js.map