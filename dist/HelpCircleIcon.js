function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const HelpCircleIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "help, circle",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12.113 15.905a1.1 1.1 0 0 1 0 2.19l-.112.005h-.009a1.1 1.1 0 1 1 0-2.2h.009zM12 6.1a2.9 2.9 0 0 1 2.44 4.466v.001a9 9 0 0 1-.57.77c-.197.244-.369.452-.525.667-.32.438-.445.74-.445.996v.5a.9.9 0 0 1-1.8 0V13c0-.849.417-1.542.79-2.055.19-.26.401-.518.577-.736a8 8 0 0 0 .459-.615L13 9.46q.098-.211.1-.46a1.1 1.1 0 1 0-2.2 0 .9.9 0 0 1-1.8 0A2.9 2.9 0 0 1 12 6.1"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9",
  clipRule: "evenodd"
})));
export default HelpCircleIcon;