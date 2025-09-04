// src/icons/LockUnlock.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var LockUnlock = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11.9 17.3c-.5 0-.9-.4-.9-.9v-2c0-.5.4-.9.9-.9s.9.4.9.9v2c0 .5-.4.9-.9.9" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M8.29 8.085c2.675-.094 5.448-.082 8.09.035 2.11.1 3.86 1.71 4.14 3.83.14 1.01.28 2.22.28 3.46s-.14 2.45-.28 3.46c-.29 2.12-2.03 3.74-4.14 3.83-1.46.07-2.92.1-4.48.1s-3.02-.03-4.48-.1c-2.11-.1-3.86-1.71-4.14-3.83-.14-1.01-.28-2.22-.28-3.46s.14-2.45.28-3.46c.247-1.802 1.541-3.243 3.22-3.69V6.4C6.5 3.42 8.92 1 11.9 1c2.4 0 4.25 1.82 4.85 3.62.16.47-.1.98-.57 1.14s-.98-.1-1.14-.57c-.39-1.16-1.62-2.38-3.15-2.38a3.61 3.61 0 0 0-3.6 3.6zM11.9 9.8c-1.52 0-2.96.03-4.4.1-1.24.06-2.27 1.02-2.44 2.28-.13.95-.26 2.08-.26 3.22s.13 2.27.26 3.22c.17 1.26 1.2 2.22 2.44 2.28 2.86.13 5.94.13 8.8 0 1.24-.06 2.27-1.02 2.44-2.28.13-.95.26-2.08.26-3.22s-.13-2.27-.26-3.22c-.17-1.26-1.2-2.22-2.44-2.28-1.44-.07-2.88-.1-4.4-.1", clipRule: "evenodd" })
  ] });
});
LockUnlock.displayName = "LockUnlock";
var LockUnlock_default = LockUnlock;
export {
  LockUnlock,
  LockUnlock_default as default
};
//# sourceMappingURL=LockUnlock.js.map