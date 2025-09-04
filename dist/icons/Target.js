// src/icons/Target.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Target = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: [
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11.996 10.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12S5.98 22.9 12 22.9 22.9 18.02 22.9 12 18.02 1.1 12 1.1M2.944 12.9H6a.9.9 0 1 0 0-1.8H2.944A9.1 9.1 0 0 1 11.1 2.944V6a.9.9 0 0 0 1.8 0V2.944a9.1 9.1 0 0 1 8.156 8.156H18a.9.9 0 0 0 0 1.8h3.056a9.1 9.1 0 0 1-8.156 8.156V18a.9.9 0 0 0-1.8 0v3.056A9.1 9.1 0 0 1 2.944 12.9", clipRule: "evenodd" })
  ] });
});
Target.displayName = "Target";
var Target_default = Target;
export {
  Target,
  Target_default as default
};
//# sourceMappingURL=Target.js.map