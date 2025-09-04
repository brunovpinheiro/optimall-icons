// src/icons/Money.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Money = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12.902 7.507a.9.9 0 0 0-1.8 0v.33c-.457.11-.878.304-1.231.57-.578.433-1.02 1.1-1.02 1.913s.442 1.48 1.02 1.913c.577.433 1.333.674 2.13.674.446 0 .815.137 1.052.314.236.178.299.354.299.474 0 .119-.063.295-.3.473-.236.178-.605.314-1.05.314-.737 0-1.188-.354-1.308-.608a.9.9 0 1 0-1.629.767c.374.793 1.154 1.32 2.037 1.534v.332a.9.9 0 0 0 1.8 0v-.33c.456-.11.877-.304 1.23-.57.578-.432 1.02-1.1 1.02-1.912 0-.813-.442-1.48-1.02-1.914-.577-.433-1.333-.674-2.13-.674-.446 0-.815-.136-1.051-.314-.237-.178-.3-.354-.3-.473 0-.12.063-.296.3-.474.236-.177.605-.314 1.05-.314.737 0 1.188.354 1.308.609a.9.9 0 0 0 1.629-.767c-.374-.794-1.154-1.322-2.036-1.535z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12S5.98 22.9 12 22.9 22.9 18.02 22.9 12 18.02 1.1 12 1.1M2.9 12a9.1 9.1 0 1 1 18.2 0 9.1 9.1 0 0 1-18.2 0", clipRule: "evenodd" })
  ] });
});
Money.displayName = "Money";
var Money_default = Money;
export {
  Money,
  Money_default as default
};
//# sourceMappingURL=Money.js.map