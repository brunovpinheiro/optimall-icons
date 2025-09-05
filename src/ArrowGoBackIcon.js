function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowGoBackIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, go, back",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.73845 15.8H15.4C18.38 15.8 20.8 13.38 20.8 10.4C20.8 7.42 18.38 5 15.4 5H10.9C10.4 5 10 5.4 10 5.9C10 6.4 10.4 6.8 10.9 6.8H15.4C17.39 6.8 19 8.42 19 10.4C19 12.38 17.39 14 15.4 14H5.76014C6.23798 13.5687 6.83608 13.0775 7.44 12.63C7.84 12.33 7.92 11.77 7.63 11.37C7.33 10.97 6.77 10.89 6.37 11.18C3 13.65 3 14.6 3 14.9C3 15.2 3 16.14 6.37 18.62C6.53 18.74 6.71 18.8 6.9 18.8V18.82C7.18 18.82 7.45 18.69 7.63 18.45C7.93 18.05 7.84 17.48 7.44 17.19C6.82863 16.7369 6.22024 16.2362 5.73845 15.8Z",
  fill: "currentColor"
})));
export default ArrowGoBackIcon;