// src/icons/Files.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Files = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M10.4 15.8h7c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7c-.5 0-.9.4-.9.9s.4.9.9.9m0-4h4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4c-.5 0-.9.4-.9.9s.4.9.9.9" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M20.65 18.66c-.512.512-1.125.794-1.915.95A3.91 3.91 0 0 1 14.9 22.8h-5c-2.98 0-4.62 0-5.76-1.14S3 18.88 3 15.9v-8c0-1.907 1.377-3.5 3.189-3.835.154-.795.437-1.41.951-1.925C8.28 1 9.92 1 12.9 1h1.34c.91 0 1.4 0 1.94.22.53.22.9.59 1.52 1.21l2.66 2.66c.62.62.99.99 1.21 1.53s.22 1.03.22 1.94v4.34c0 2.98 0 4.62-1.14 5.76M12.9 19.8h1.99c.71 0 1.345 0 1.915-.015A2.1 2.1 0 0 1 14.9 21h-5c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-8a2.1 2.1 0 0 1 1.215-1.905C6 6.562 6 7.193 6 7.9v5c0 2.98 0 4.62 1.14 5.76s2.78 1.14 5.76 1.14M8.42 3.41c.59-.59 1.73-.61 4.48-.61h1.6v.6c0 2.06 0 3.2.85 4.05s1.99.85 4.05.85h.6v4.6c0 2.75-.02 3.89-.61 4.48-.6.6-1.74.62-4.49.62h-2c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-5c0-2.76.03-3.9.62-4.49M19.23 6.5l-.13-.13-2.8-2.8c0 1.43.012 2.302.32 2.61s1.18.32 2.61.32", clipRule: "evenodd" })
  ] });
});
Files.displayName = "Files";
var Files_default = Files;
export {
  Files,
  Files_default as default
};
//# sourceMappingURL=Files.js.map