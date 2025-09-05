function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "alert, circle",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9C1 5.89 5.89 1 11.9 1C17.91 1 22.8 5.89 22.8 11.9C22.8 17.91 17.91 22.8 11.9 22.8ZM11.9 2.8C6.88 2.8 2.8 6.88 2.8 11.9C2.8 16.92 6.88 21 11.9 21C16.92 21 21 16.92 21 11.9C21 6.88 16.92 2.8 11.9 2.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 15.8C11.4 15.8 11 15.4 11 14.9C11 14.4 11.4 14 11.9 14C12.4 14 12.8 14.4 12.8 14.9C12.8 15.4 12.4 15.8 11.9 15.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 12.8C11.4 12.8 11 12.4 11 11.9V7.9C11 7.4 11.4 7 11.9 7C12.4 7 12.8 7.4 12.8 7.9V11.9C12.8 12.4 12.4 12.8 11.9 12.8Z",
  fill: "currentColor"
})));
export default AlertCircleIcon;