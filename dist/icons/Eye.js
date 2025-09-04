// src/icons/Eye.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Eye = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 4.1c2.616 0 4.851 1.151 6.572 2.495 1.723 1.345 2.994 2.931 3.704 3.928.256.358.624.818.624 1.477s-.368 1.119-.624 1.477c-.71.997-1.981 2.583-3.704 3.928C16.852 18.75 14.616 19.9 12 19.9s-4.851-1.151-6.572-2.495c-1.723-1.345-2.994-2.931-3.704-3.928-.24-.336-.578-.76-.62-1.356L1.1 12l.004-.121c.042-.595.38-1.02.62-1.356.71-.997 1.981-2.583 3.704-3.928C7.148 5.25 9.384 4.1 12 4.1m0 1.8c-2.073 0-3.927.914-5.464 2.114-1.535 1.198-2.692 2.634-3.348 3.553-.077.11-.136.192-.184.264a2 2 0 0 0-.092.149l-.01.02.01.02c.016.032.044.077.092.149s.107.154.184.264c.656.919 1.813 2.355 3.348 3.553C8.073 17.186 9.926 18.1 12 18.1c2.073 0 3.927-.914 5.464-2.114 1.535-1.198 2.692-2.634 3.348-3.553.077-.11.136-.192.184-.264s.076-.117.092-.149l.01-.02-.01-.02a2 2 0 0 0-.092-.149 12 12 0 0 0-.184-.264c-.656-.919-1.813-2.355-3.348-3.553C15.927 6.814 14.074 5.9 12 5.9" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M14.1 12a2.1 2.1 0 1 0-4.2 0 2.1 2.1 0 0 0 4.199 0m1.8 0a3.9 3.9 0 1 1-7.8 0 3.9 3.9 0 0 1 7.8 0" })
  ] });
});
Eye.displayName = "Eye";
var Eye_default = Eye;
export {
  Eye,
  Eye_default as default
};
//# sourceMappingURL=Eye.js.map