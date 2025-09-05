function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const HelpCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "help, circle",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.113 15.905a1.1 1.1 0 0 1 0 2.19l-.112.005h-.009a1.1 1.1 0 1 1 0-2.2h.009l.112.005ZM12 6.1a2.9 2.9 0 0 1 2.44 4.466v.001a9.157 9.157 0 0 1-.57.77c-.197.244-.369.452-.525.667-.32.438-.445.74-.445.996v.5a.9.9 0 0 1-1.8 0V13c0-.849.417-1.542.79-2.055.19-.26.401-.518.577-.736a7.47 7.47 0 0 0 .459-.615L13 9.46A1.1 1.1 0 1 0 10.9 9a.9.9 0 0 1-1.8 0A2.9 2.9 0 0 1 12 6.1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9 0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9C1.1 5.98 5.98 1.1 12 1.1Zm0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default HelpCircleIcon;