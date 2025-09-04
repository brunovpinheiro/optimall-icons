// src/icons/Link.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Link = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M19.99 3.81A6.13 6.13 0 0 0 15.63 2c-1.64 0-3.2.64-4.37 1.81L8.65 6.42a.9.9 0 0 0 0 1.27.9.9 0 0 0 1.27 0l2.61-2.61c.83-.83 1.92-1.28 3.09-1.28s2.27.46 3.09 1.28a4.364 4.364 0 0 1 0 6.18l-2.61 2.61a.9.9 0 0 0 0 1.27c.18.18.41.26.64.26s.46-.09.64-.26l2.61-2.61a6.174 6.174 0 0 0 0-8.73z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m10.03 15.04 5-5a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-5 5a.9.9 0 0 0 0 1.27c.18.18.41.26.64.26s.46-.09.64-.26z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "m11.26 18.72 2.61-2.61.01.01a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27L12.54 20a6.1 6.1 0 0 1-4.36 1.81c-1.65 0-3.2-.64-4.37-1.81a6.174 6.174 0 0 1 0-8.73l2.61-2.61a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a4.364 4.364 0 0 0 0 6.18A4.35 4.35 0 0 0 8.17 20c1.17 0 2.26-.45 3.09-1.28" })
  ] });
});
Link.displayName = "Link";
var Link_default = Link;
export {
  Link,
  Link_default as default
};
//# sourceMappingURL=Link.js.map