// src/icons/Information.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Information = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12.14 17.8c-.5 0-.9-.4-.9-.9v-5.1h-.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9c.58 0 1.08 0 1.49.41.41.42.41.92.41 1.49v5c0 .5-.4.9-.9.9M11 7.9c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9S5.89 1 11.9 1s10.9 4.89 10.9 10.9-4.89 10.9-10.9 10.9m0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1", clipRule: "evenodd" })
  ] });
});
Information.displayName = "Information";
var Information_default = Information;
export {
  Information,
  Information_default as default
};
//# sourceMappingURL=Information.js.map