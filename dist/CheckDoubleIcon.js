function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckDoubleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "check, double",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.2234 7.19048C17.6047 6.79098 17.59 6.15799 17.1905 5.77665C16.791 5.39531 16.158 5.41003 15.7766 5.80953L9.71365 12.1612C9.33231 12.5607 9.34703 13.1937 9.74653 13.5751C10.146 13.9564 10.779 13.9417 11.1604 13.5422L17.2234 7.19048ZM3.22336 13.1428C2.84202 12.7433 2.20903 12.7286 1.80953 13.1099C1.41003 13.4913 1.39531 14.1243 1.77664 14.5238L5.27664 18.1905C5.46534 18.3882 5.72672 18.5 6 18.5C6.27329 18.5 6.53467 18.3882 6.72336 18.1905L7.74738 17.1177C8.12872 16.7182 8.11399 16.0852 7.71449 15.7038C7.31499 15.3225 6.682 15.3372 6.30066 15.7367L6 16.0517L3.22336 13.1428ZM22.2234 7.19048C22.6047 6.79098 22.59 6.15799 22.1905 5.77665C21.791 5.39531 21.158 5.41003 20.7766 5.80953L11 16.0517L8.22336 13.1428C7.84202 12.7433 7.20903 12.7286 6.80953 13.1099C6.41003 13.4913 6.39531 14.1243 6.77664 14.5238L10.2766 18.1905C10.4653 18.3882 10.7267 18.5 11 18.5C11.2733 18.5 11.5347 18.3882 11.7234 18.1905L22.2234 7.19048Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckDoubleIcon;