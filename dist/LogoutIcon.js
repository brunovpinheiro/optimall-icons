function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LogoutIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "logout",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12.6 2.25C6.93 2.25 2.25 6.57 2.25 12s4.68 9.75 10.35 9.75q.765 0 1.502-.102l-.204-1.486a10 10 0 0 1-1.298.088c-4.934 0-8.85-3.738-8.85-8.25 0-4.511 3.916-8.25 8.85-8.25q.662 0 1.298.088l.204-1.486q-.736-.101-1.502-.102"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "m17.47 9.53 1.72 1.72H11v1.5h8.19l-1.72 1.72 1.06 1.06L22.06 12l-3.53-3.53z"
})));
export default LogoutIcon;