function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AppsIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "apps",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 1.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8ZM2.9 6a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0ZM6 13.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8ZM2.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0ZM13.1 6a4.9 4.9 0 1 1 9.8 0 4.9 4.9 0 0 1-9.8 0ZM18 2.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm0 10.2a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8ZM14.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default AppsIcon;