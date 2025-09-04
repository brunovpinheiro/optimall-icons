function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowGoBackIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "arrow, go, back",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M5.738 15.8H15.4c2.98 0 5.4-2.42 5.4-5.4S18.38 5 15.4 5h-4.5c-.5 0-.9.4-.9.9s.4.9.9.9h4.5c1.99 0 3.6 1.62 3.6 3.6S17.39 14 15.4 14H5.76a23 23 0 0 1 1.68-1.37c.4-.3.48-.86.19-1.26-.3-.4-.86-.48-1.26-.19C3 13.65 3 14.6 3 14.9s0 1.24 3.37 3.72c.16.12.34.18.53.18v.02c.28 0 .55-.13.73-.37.3-.4.21-.97-.19-1.26a23 23 0 0 1-1.702-1.39"
})));
export default ArrowGoBackIcon;