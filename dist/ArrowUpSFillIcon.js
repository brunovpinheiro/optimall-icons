function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowUpSFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, up, s, fill",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.7448 14.6842 18.809 15.0068 18.6929 15.287C18.5768 15.5673 18.3033 15.75 18 15.75H6.00002C5.69667 15.75 5.4232 15.5673 5.30711 15.287C5.19102 15.0068 5.25519 14.6842 5.46969 14.4697L11.4697 8.46967Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ArrowUpSFillIcon;