function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowGoForwardIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, go, forward",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.8 14.922c-.006.343-.145 1.314-3.37 3.678-.16.12-.35.18-.53.18v.02a.91.91 0 0 1-.73-.37c-.29-.4-.21-.96.19-1.26a23.33 23.33 0 0 0 1.68-1.37H8.4c-2.98 0-5.4-2.42-5.4-5.4C3 7.42 5.42 5 8.4 5h4.5c.5 0 .9.4.9.9s-.4.9-.9.9H8.4c-1.99 0-3.6 1.62-3.6 3.6S6.41 14 8.4 14h9.662a23.334 23.334 0 0 0-1.702-1.39.897.897 0 0 1-.19-1.26c.29-.4.86-.49 1.26-.19 3.37 2.48 3.37 3.42 3.37 3.72v.042Z"
})));
export default ArrowGoForwardIcon;