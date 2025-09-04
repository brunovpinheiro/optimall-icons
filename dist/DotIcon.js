function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const DotIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "dot",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M1 11.9c0 6.01 4.89 10.9 10.9 10.9s10.9-4.89 10.9-10.9S17.91 1 11.9 1 1 5.89 1 11.9m1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1",
  clipRule: "evenodd"
})));
export default DotIcon;