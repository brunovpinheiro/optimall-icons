function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ManagerIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "manager",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.95 12.85C19.1 12 17.96 12 15.9 12C15.54 12 15.22 12.21 15.08 12.53L13.08 17.04L12.83 15.06L13.71 13.3C13.85 13.02 13.83 12.69 13.67 12.42C13.51 12.16 13.22 11.99 12.9 11.99H10.9C10.59 11.99 10.3 12.15 10.13 12.42C9.97 12.69 9.95 13.02 10.09 13.3L10.97 15.06L10.72 17.04L8.72 12.53C8.58 12.2 8.25 12 7.9 12C5.84 12 4.7 12 3.85 12.85C3 13.7 3 14.84 3 16.9V21.9C3 22.4 3.4 22.8 3.9 22.8C4.4 22.8 4.8 22.4 4.8 21.9V16.9C4.8 15.37 4.8 14.44 5.12 14.12C5.4 13.84 6.13 13.8 7.31 13.8L11.07 22.26C11.36 22.91 12.43 22.91 12.71 22.26L16.47 13.8C17.65 13.8 18.38 13.84 18.66 14.12C18.98 14.44 18.98 15.37 18.98 16.9V21.9C18.98 22.4 19.38 22.8 19.88 22.8C20.38 22.8 20.78 22.4 20.78 21.9V16.9C20.78 14.84 20.78 13.7 19.93 12.85H19.95Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 10.8C14.33 10.8 16.3 8.83 16.3 6.4V5.4C16.3 2.97 14.33 1 11.9 1C9.47 1 7.5 2.97 7.5 5.4V6.4C7.5 8.83 9.47 10.8 11.9 10.8ZM9.3 5.4C9.3 3.97 10.47 2.8 11.9 2.8C13.33 2.8 14.5 3.97 14.5 5.4V6.4C14.5 7.83 13.33 9 11.9 9C10.47 9 9.3 7.83 9.3 6.4V5.4Z",
  fill: "currentColor"
})));
export default ManagerIcon;