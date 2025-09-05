function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ExternalLinkFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "external, link, fill",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.58 20.22C5.16 21.8 7.41 21.8 11.9 21.8L11.88 21.79C16.37 21.79 18.62 21.79 20.2 20.21C21.7 18.71 21.78 16.52 21.78 12.79C21.78 12.3 21.38 11.89 20.88 11.89C20.38 11.89 19.98 12.29 19.98 12.79C19.98 16.34 19.88 17.99 18.93 18.94C17.88 19.99 15.87 19.99 11.89 19.99C7.91 19.99 5.9 19.99 4.85 18.94C3.8 17.89 3.8 15.89 3.8 11.9C3.8 7.91 3.8 5.91 4.85 4.85C5.8 3.91 7.45 3.8 11 3.8C11.5 3.8 11.9 3.4 11.9 2.9C11.9 2.4 11.5 2 11 2C7.26 2 5.08 2.08 3.58 3.58C2 5.16 2 7.41 2 11.9C2 16.39 2 18.64 3.58 20.22Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.32 13.6C10.49 13.77 10.72 13.86 10.95 13.86L10.94 13.87C11.17 13.87 11.4 13.78 11.58 13.6L19.93 5.2C19.98 5.8 20.01 6.67 19.99 7.92C19.99 8.41 20.38 8.83 20.88 8.83H20.89C21.38 8.83 21.79 8.43 21.79 7.94C21.85 3.53 21.38 3.05 21.09 2.76C20.81 2.48 20.34 2.01 15.92 2.06C15.42 2.06 15.03 2.47 15.03 2.97C15.04 3.46 15.44 3.86 15.93 3.86H15.94C17.2 3.84 18.07 3.88 18.67 3.92L10.32 12.33C9.97 12.68 9.97 13.25 10.32 13.6Z",
  fill: "currentColor"
})));
export default ExternalLinkFillIcon;