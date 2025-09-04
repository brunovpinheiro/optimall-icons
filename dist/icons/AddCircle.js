// src/icons/AddCircle.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var AddCircle = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 7c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M1 12C1 5.93 5.92 1 12 1s11 4.93 11 11-4.92 11-11 11S1 18.07 1 12m11-9a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3", clipRule: "evenodd" })
  ] });
});
AddCircle.displayName = "AddCircle";
var AddCircle_default = AddCircle;
export {
  AddCircle,
  AddCircle_default as default
};
//# sourceMappingURL=AddCircle.js.map