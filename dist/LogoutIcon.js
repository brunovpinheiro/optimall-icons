function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LogoutIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "logout",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.6 2.25C6.93019 2.25 2.25 6.57037 2.25 12C2.25 17.4297 6.93019 21.75 12.6 21.75C13.1096 21.75 13.6111 21.7153 14.1018 21.6481L13.8982 20.1619C13.4749 20.2199 13.0414 20.25 12.6 20.25C7.66595 20.25 3.75 16.5115 3.75 12C3.75 7.48851 7.66595 3.75 12.6 3.75C13.0414 3.75 13.4749 3.78008 13.8982 3.83808L14.1018 2.35196C13.6111 2.28474 13.1096 2.25 12.6 2.25Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.4695 9.53036L19.1893 11.25H11V12.75H19.1893L17.4695 14.4697L18.5301 15.5304L22.0607 12L18.5301 8.46967L17.4695 9.53036Z",
  fill: "currentColor"
})));
export default LogoutIcon;