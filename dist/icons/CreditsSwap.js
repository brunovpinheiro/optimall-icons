// src/icons/CreditsSwap.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CreditsSwap = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 9.1a6.9 6.9 0 1 1 0 13.8A6.9 6.9 0 0 1 8 9.1m0 1.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2", clipRule: "evenodd" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M22 14.1a.9.9 0 0 1 .9.9 6.896 6.896 0 0 1-6.544 6.89L16 21.9a.9.9 0 0 1-.805-1.302l.857-1.715.046-.08a.9.9 0 0 1 1.564.886l-.08.16A5.095 5.095 0 0 0 21.1 15a.9.9 0 0 1 .9-.9m-4.877.788a.9.9 0 0 1-.3-1.776z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M15.957 1.1a6.944 6.944 0 0 1 1.166 13.788l-.15-.888-.15-.888a5.144 5.144 0 1 0-5.935-5.935L10 7.027l-.888-.15A6.945 6.945 0 0 1 15.957 1.1M8.116 2.107a.9.9 0 0 1 .689 1.295l-.857 1.715a.9.9 0 0 1-1.61-.805l.08-.162A5.1 5.1 0 0 0 2.9 9a.9.9 0 0 1-1.8 0c0-3.814 3.086-6.9 6.9-6.9z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M10.888 7.177a.9.9 0 0 1-1.776-.3z" })
  ] });
});
CreditsSwap.displayName = "CreditsSwap";
var CreditsSwap_default = CreditsSwap;
export {
  CreditsSwap,
  CreditsSwap_default as default
};
//# sourceMappingURL=CreditsSwap.js.map