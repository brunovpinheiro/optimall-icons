// src/icons/UserAccount.tsx
import * as React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var UserAccount = React.forwardRef(({
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
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M9 7.1a2.9 2.9 0 0 1 2.9 2.9c0 .635-.206 1.22-.552 1.697A4.9 4.9 0 0 1 13.9 16a.9.9 0 0 1-1.8 0 3.1 3.1 0 1 0-6.2 0 .9.9 0 0 1-1.8 0 4.9 4.9 0 0 1 2.551-4.303A2.9 2.9 0 0 1 6.1 10 2.9 2.9 0 0 1 9 7.1m0 1.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2", clipRule: "evenodd" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M19.092 11.105a.9.9 0 0 1 0 1.79L19 12.9h-4a.9.9 0 0 1 0-1.8h4zm0-3.001a.9.9 0 0 1 0 1.792L19 9.9h-4a.9.9 0 0 1 0-1.8h4z" }),
    /* @__PURE__ */ jsx("path", { fill: "currentColor", fillRule: "evenodd", d: "M14 3.1c1.86 0 3.346-.001 4.509.155 1.189.16 2.175.5 2.956 1.28l.141.149c.682.756.99 1.692 1.14 2.807.155 1.163.154 2.649.154 4.509s.002 3.346-.155 4.509c-.15 1.114-.457 2.051-1.139 2.807l-.141.149c-.781.78-1.767 1.12-2.956 1.28-1.163.156-2.649.155-4.509.155h-4c-1.86 0-3.346.002-4.509-.155-1.115-.15-2.051-.457-2.807-1.139l-.149-.141c-.78-.781-1.12-1.767-1.28-2.956C1.099 15.346 1.1 13.86 1.1 12s-.001-3.346.155-4.509c.16-1.189.5-2.175 1.28-2.956l.149-.141c.756-.682 1.692-.99 2.807-1.14C6.654 3.1 8.14 3.1 10 3.1zm-4 1.8c-1.911 0-3.254.002-4.27.138-.865.116-1.389.32-1.768.63l-.154.14c-.391.39-.637.933-.77 1.922C2.902 8.746 2.9 10.09 2.9 12s.002 3.254.138 4.27c.133.989.379 1.532.77 1.922l.154.14c.379.31.903.514 1.768.63 1.016.136 2.359.138 4.27.138h4c1.911 0 3.254-.002 4.27-.138.989-.133 1.532-.379 1.922-.77l.14-.154c.31-.379.514-.903.63-1.768.136-1.016.138-2.359.138-4.27s-.002-3.254-.138-4.27c-.116-.865-.32-1.389-.63-1.768l-.14-.154c-.39-.391-.933-.637-1.922-.77C17.254 4.902 15.91 4.9 14 4.9z", clipRule: "evenodd" })
  ] });
});
UserAccount.displayName = "UserAccount";
var UserAccount_default = UserAccount;
export {
  UserAccount,
  UserAccount_default as default
};
//# sourceMappingURL=UserAccount.js.map