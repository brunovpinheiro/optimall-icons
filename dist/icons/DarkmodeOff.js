// src/icons/DarkmodeOff.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var DarkmodeOff = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M11 21.9c0 .5.4.9.9.9s.9-.4.9-.9v-1.5c0-.5-.4-.9-.9-.9s-.9.4-.9.9zm7.965-2.03h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-1.06-1.06a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27zm-13.505.26h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26l1.06-1.06a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-1.06 1.06a.9.9 0 0 0 0 1.27M20.4 12.8h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9s.4.9.9.9m-18.5 0h1.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H1.9c-.5 0-.9.4-.9.9s.4.9.9.9m16.005-6.01h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26l1.06-1.06a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-1.06 1.06a.9.9 0 0 0 0 1.27m-11.385.26h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27L5.46 4.2a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27zM11 3.4c0 .5.4.9.9.9s.9-.4.9-.9V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M6 11.9c0 3.25 2.65 5.9 5.9 5.9s5.9-2.65 5.9-5.9S15.15 6 11.9 6A5.91 5.91 0 0 0 6 11.9m1.8 0c0-2.26 1.84-4.1 4.1-4.1S16 9.64 16 11.9 14.16 16 11.9 16s-4.1-1.84-4.1-4.1", clipRule: "evenodd" })
  ] });
});
DarkmodeOff.displayName = "DarkmodeOff";
var DarkmodeOff_default = DarkmodeOff;
export {
  DarkmodeOff,
  DarkmodeOff_default as default
};
//# sourceMappingURL=DarkmodeOff.js.map