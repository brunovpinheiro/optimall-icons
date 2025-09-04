// src/icons/FileText.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var FileText = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M15.9 7.8h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9m-4 4h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.01.01c.78 0 1.22 0 1.69-.17l.14-.06.14-.06c.44-.21.75-.52 1.3-1.07l4.74-4.74.056-.056c.605-.605.95-.95 1.164-1.474.22-.54.22-1.03.22-1.94V9.9c0-4.01 0-6.03-1.44-7.46C17.93 1 15.91 1 11.9 1S5.87 1 4.44 2.44C3 3.87 3 5.89 3 9.9v4.54c0 3.45 0 5.18 1.09 6.53.22.27.47.52.74.74m.88-18c.91-.91 2.67-.91 6.19-.91l-.01.01c3.52 0 5.28 0 6.19.91s.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14S12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4V9.9c0-3.52 0-5.28.91-6.19m8.7 12.7c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31", clipRule: "evenodd" })
  ] });
});
FileText.displayName = "FileText";
var FileText_default = FileText;
export {
  FileText,
  FileText_default as default
};
//# sourceMappingURL=FileText.js.map