function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LoginIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "login",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.598 2.25C6.92822 2.25 2.24805 6.57036 2.24805 12C2.24805 17.4297 6.92822 21.75 12.598 21.75C13.1077 21.75 13.6091 21.7153 14.0998 21.6481L13.8962 20.1619C13.4729 20.2199 13.0395 20.25 12.598 20.25C7.66399 20.25 3.74805 16.5115 3.74805 12C3.74805 7.4885 7.66399 3.75 12.598 3.75C13.0395 3.75 13.4729 3.78008 13.8962 3.83807L14.0998 2.35195C13.6091 2.28474 13.1077 2.25 12.598 2.25Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5288 9.53038L13.4682 8.46967L9.9375 12L13.4682 15.5304L14.5288 14.4697L12.809 12.75H20.9982V11.25H12.809L14.5288 9.53038Z",
  fill: "currentColor"
})));
export default LoginIcon;