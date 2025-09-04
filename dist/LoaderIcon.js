function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LoaderIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "loader",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 2.1a.9.9 0 0 1 .9.9v3a.9.9 0 1 1-1.8 0V3a.9.9 0 0 1 .9-.9m0 15a.9.9 0 0 1 .9.9v3a.9.9 0 1 1-1.8 0v-3a.9.9 0 0 1 .9-.9m5.1-5.1a.9.9 0 0 1 .9-.9h3a.9.9 0 0 1 0 1.8h-3a.9.9 0 0 1-.9-.9m-15 0a.9.9 0 0 1 .9-.9h3a.9.9 0 0 1 0 1.8H3a.9.9 0 0 1-.9-.9M19 5a.9.9 0 0 1 0 1.273l-2.122 2.121a.9.9 0 0 1-1.273-1.272L17.727 5A.9.9 0 0 1 19 5M8.394 15.606a.9.9 0 0 1 0 1.273l-2.121 2.12A.9.9 0 1 1 5 17.728l2.121-2.121a.9.9 0 0 1 1.273 0m7.211-.001a.9.9 0 0 1 1.273 0L19 17.727A.9.9 0 1 1 17.727 19l-2.122-2.121a.9.9 0 0 1 0-1.273M5 5a.9.9 0 0 1 1.273 0l2.121 2.122a.9.9 0 1 1-1.273 1.272L5 6.274A.9.9 0 0 1 5 5",
  clipRule: "evenodd"
})));
export default LoaderIcon;