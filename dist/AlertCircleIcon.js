function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertCircleIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "alert, circle",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9S5.89 1 11.9 1s10.9 4.89 10.9 10.9-4.89 10.9-10.9 10.9m0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M11.9 15.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m0-3c-.5 0-.9-.4-.9-.9v-4c0-.5.4-.9.9-.9s.9.4.9.9v4c0 .5-.4.9-.9.9"
})));
export default AlertCircleIcon;