function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RefreshIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "refresh",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.1 12C1.1 5.98 5.98 1.1 12 1.1c2.72 0 5.2.99 7.11 2.64V2c0-.5.4-.9.9-.9s.9.4.9.9v3.13c0 1.13-1.4 1.64-2.13.79A9.072 9.072 0 0 0 12 2.89C6.97 2.9 2.9 6.97 2.9 12c0 5.03 4.07 9.1 9.1 9.1 5.03 0 9.1-4.07 9.1-9.1 0-.5.4-.9.9-.9s.9.4.9.9c0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default RefreshIcon;