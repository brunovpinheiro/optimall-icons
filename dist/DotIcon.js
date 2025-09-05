function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const DotIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "dot",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 11.9C1 17.91 5.89 22.8 11.9 22.8C17.91 22.8 22.8 17.91 22.8 11.9C22.8 5.89 17.91 1 11.9 1C5.89 1 1 5.89 1 11.9ZM2.8 11.9C2.8 6.88 6.88 2.8 11.9 2.8C16.92 2.8 21 6.88 21 11.9C21 16.92 16.92 21 11.9 21C6.88 21 2.8 16.92 2.8 11.9Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default DotIcon;