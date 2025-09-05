function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowLeftIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, left",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.37 17.62C8.53 17.74 8.71 17.8 8.9 17.8V17.82C9.18 17.82 9.45 17.69 9.63 17.45C9.93 17.05 9.84 16.48 9.44 16.19C7.85924 15.0167 6.34758 13.7052 5.49802 12.8H19.9C20.4 12.8 20.8 12.4 20.8 11.9C20.8 11.4 20.4 11 19.9 11H5.51503C6.36767 10.0931 7.86974 8.7885 9.44 7.63C9.84 7.33 9.92 6.77 9.63 6.37C9.33 5.97 8.77 5.89 8.37 6.18C5.92 7.98 3 10.44 3 11.9C3 13.36 5.92 15.82 8.37 17.62Z",
  fill: "currentColor"
})));
export default ArrowLeftIcon;