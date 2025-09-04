// src/icons/Menu.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Menu = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M20 4.1a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8z" }) });
});
Menu.displayName = "Menu";
var Menu_default = Menu;
export {
  Menu,
  Menu_default as default
};
//# sourceMappingURL=Menu.js.map