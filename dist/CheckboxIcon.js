function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckboxIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "checkbox",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M10.26 16.04c.17.17.4.26.64.26v.01h.02c.24 0 .47-.11.64-.29l5.5-6A.9.9 0 0 0 17 8.75a.89.89 0 0 0-1.27.05l-4.86 5.31-1.84-1.84a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M3.65 21.14c1.66 1.66 4.03 1.66 8.75 1.66v.01c4.73 0 7.1 0 8.75-1.66s1.65-4.02 1.65-8.75 0-7.1-1.65-8.75C19.49 2 17.12 2 12.4 2h-.084C7.652 2 5.29 2 3.65 3.65 2 5.31 2 7.66 2 12.39s0 7.1 1.65 8.75M4.93 4.93C6.05 3.8 8.18 3.8 12.4 3.8s6.34 0 7.47 1.13C21 6.05 21 8.18 21 12.4s-.01 6.34-1.13 7.47S16.62 21 12.4 21s-6.34 0-7.47-1.13S3.8 16.62 3.8 12.4s.01-6.34 1.13-7.47",
  clipRule: "evenodd"
})));
export default CheckboxIcon;