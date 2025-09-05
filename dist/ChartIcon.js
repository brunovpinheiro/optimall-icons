function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ChartIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "chart",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 17.4c0 .5.4.9.9.9s.9-.4.9-.9v-10c0-.5-.4-.9-.9-.9s-.9.4-.9.9v10Zm-5 0c0 .5.4.9.9.9s.9-.4.9-.9v-4c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4Zm10.9.9c-.5 0-.9-.4-.9-.9v-6c0-.5.4-.9.9-.9s.9.4.9.9v6c0 .5-.4.9-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.65 21.15c1.66 1.65 4.03 1.65 8.75 1.65s7.09 0 8.75-1.65c1.65-1.66 1.65-4.02 1.65-8.75s0-7.09-1.65-8.75C19.49 2 17.12 2 12.4 2S5.31 2 3.66 3.65C2 5.31 1.99 7.67 1.99 12.4s0 7.1 1.66 8.75ZM4.93 4.93C6.06 3.8 8.18 3.8 12.4 3.8s6.34 0 7.47 1.13S21 8.18 21 12.4s0 6.34-1.13 7.47S16.62 21 12.4 21s-6.34 0-7.47-1.13S3.8 16.62 3.8 12.4s0-6.34 1.13-7.47Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ChartIcon;