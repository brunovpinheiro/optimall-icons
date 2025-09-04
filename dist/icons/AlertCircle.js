// src/icons/AlertCircle.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var AlertCircle = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9S5.89 1 11.9 1s10.9 4.89 10.9 10.9-4.89 10.9-10.9 10.9m0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11.9 15.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m0-3c-.5 0-.9-.4-.9-.9v-4c0-.5.4-.9.9-.9s.9.4.9.9v4c0 .5-.4.9-.9.9" })
  ] });
});
AlertCircle.displayName = "AlertCircle";
var AlertCircle_default = AlertCircle;
export {
  AlertCircle,
  AlertCircle_default as default
};
//# sourceMappingURL=AlertCircle.js.map