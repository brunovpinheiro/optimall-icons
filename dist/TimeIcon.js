function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TimeIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "time",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.26 14.54c.18.17.41.26.64.26.23 0 .46-.08.64-.26a.9.9 0 0 0 0-1.27l-1.74-1.74V7.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4c0 .24.09.47.26.64l2 2Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 11.9c0 6.01 4.89 10.9 10.9 10.9 6.01 0 10.9-4.89 10.9-10.9C22.8 5.89 17.91 1 11.9 1 5.89 1 1 5.89 1 11.9Zm1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default TimeIcon;