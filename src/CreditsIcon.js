function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CreditsIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "credits",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.891 11.343a1 1 0 0 0-1.72-1.02 8.398 8.398 0 0 0 11.506 11.506 1 1 0 1 0-1.02-1.72 6.398 6.398 0 0 1-8.766-8.765Z"
})));
export default CreditsIcon;