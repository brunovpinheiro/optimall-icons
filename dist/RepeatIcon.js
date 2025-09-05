function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RepeatIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "repeat",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.71 5.07C18.47 5.64 17.9 5.74 17.7 5.77C17.47 5.8 17.18 5.8 16.9 5.8H9.1C5.6 5.8 2.8 8.56 2.8 11.9C2.8 13.19 3.21 14.39 3.92 15.38C4.21 15.78 4.12 16.35 3.72 16.63C3.31 16.92 2.75 16.83 2.46 16.43C1.54 15.15 1 13.59 1 11.9C1 7.52 4.65 4 9.1 4H16.13L15.66 3.55C15.31 3.2 15.3 2.63 15.65 2.28C15.99 1.92 16.56 1.91 16.92 2.26L17.92 3.23C17.92 3.23 17.94 3.26 17.96 3.27C18.15 3.46 18.36 3.66 18.5 3.84C18.63 4.01 18.96 4.48 18.71 5.07Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.09 7.17C20.49 6.88 21.06 6.97 21.35 7.38C22.27 8.66 22.81 10.22 22.81 11.9C22.81 16.29 19.16 19.8 14.72 19.8H7.69L8.16 20.25C8.52 20.6 8.52 21.17 8.18 21.52C7.83 21.88 7.26 21.88 6.91 21.54L5.91 20.56C5.91 20.56 5.89 20.54 5.87 20.53C5.68 20.34 5.47 20.14 5.33 19.96C5.2 19.8 4.87 19.32 5.11 18.73C5.35 18.16 5.92 18.06 6.12 18.03C6.35 18 6.64 18 6.92 18H14.73C18.23 18 21.02 15.25 21.02 11.9C21.02 10.61 20.61 9.41 19.9 8.42C19.61 8.02 19.7 7.45 20.11 7.16L20.09 7.17Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default RepeatIcon;