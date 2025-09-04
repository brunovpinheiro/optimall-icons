function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TShirtFillIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "t, shirt, fill",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M5.824 2.281A.75.75 0 0 1 6.41 2h3a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .586.281l3.44 4.302a1.75 1.75 0 0 1-.128 2.33l-3.148 3.148v7.689a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-7.69L2.513 8.914a1.75 1.75 0 0 1-.13-2.33z",
  clipRule: "evenodd"
})));
export default TShirtFillIcon;