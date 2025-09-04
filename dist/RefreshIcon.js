function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RefreshIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "refresh",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M1.1 12C1.1 5.98 5.98 1.1 12 1.1c2.72 0 5.2.99 7.11 2.64V2c0-.5.4-.9.9-.9s.9.4.9.9v3.13c0 1.13-1.4 1.64-2.13.79A9.07 9.07 0 0 0 12 2.89C6.97 2.9 2.9 6.97 2.9 12s4.07 9.1 9.1 9.1 9.1-4.07 9.1-9.1c0-.5.4-.9.9-.9s.9.4.9.9c0 6.02-4.88 10.9-10.9 10.9S1.1 18.02 1.1 12",
  clipRule: "evenodd"
})));
export default RefreshIcon;