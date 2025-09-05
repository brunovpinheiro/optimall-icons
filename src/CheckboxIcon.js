function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckboxIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "checkbox",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.26 16.04C10.43 16.21 10.66 16.3 10.9 16.3V16.31H10.92C11.16 16.31 11.39 16.2 11.56 16.02L17.06 10.02C17.39 9.66 17.37 9.09 17 8.75C16.64 8.41 16.07 8.43 15.73 8.8L10.87 14.11L9.03 12.27C8.68 11.92 8.11 11.92 7.76 12.27C7.41 12.62 7.41 13.19 7.76 13.54L10.26 16.04Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.65 21.14C5.31 22.8 7.68 22.8 12.4 22.8V22.81C17.13 22.81 19.5 22.81 21.15 21.15C22.8 19.49 22.8 17.13 22.8 12.4C22.8 7.67 22.8 5.3 21.15 3.65C19.49 2 17.12 2 12.4 2H12.3157C7.65161 1.99994 5.29015 1.99991 3.65 3.65C2 5.31 2 7.66 2 12.39C2 17.12 2 19.49 3.65 21.14ZM4.93 4.93C6.05 3.8 8.18 3.8 12.4 3.8C16.62 3.8 18.74 3.8 19.87 4.93C21 6.05 21 8.18 21 12.4C21 16.62 20.99 18.74 19.87 19.87C18.75 21 16.62 21 12.4 21C8.18 21 6.06 21 4.93 19.87C3.8 18.74 3.8 16.62 3.8 12.4C3.8 8.18 3.81 6.06 4.93 4.93Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckboxIcon;