// src/icons/UserAdd.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var UserAdd = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12.4 22.8H6.49c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56.17-.1.33-.19.46-.27a11.56 11.56 0 0 1 10.22-.76c.46.19.68.71.49 1.17s-.71.68-1.17.49c-.73-.3-1.5-.51-2.29-.62-2.2-.31-4.45.14-6.34 1.26-.15.09-.31.18-.5.29-.82.47-2.54 1.44-2.64 2.22-.03.22.12.49.43.78C4.35 20.52 5.35 21 6.48 21h5.91c.5 0 .9.4.9.9s-.4.9-.9.9zm-.5-11c-2.98 0-5.4-2.42-5.4-5.4S8.92 1 11.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M18.4 22.8c-.5 0-.9-.4-.9-.9v-2.6h-2.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.6v-2.6c0-.5.4-.9.9-.9s.9.4.9.9v2.6h2.6c.5 0 .9.4.9.9s-.4.9-.9.9h-2.6v2.6c0 .5-.4.9-.9.9" })
  ] });
});
UserAdd.displayName = "UserAdd";
var UserAdd_default = UserAdd;
export {
  UserAdd,
  UserAdd_default as default
};
//# sourceMappingURL=UserAdd.js.map