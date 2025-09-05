function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CloseCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "close, circle",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.8951 15.8L14.9 15.8H14.89L14.8951 15.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.26 15.54C14.4387 15.7088 14.6668 15.7987 14.8951 15.8C15.1234 15.7988 15.3513 15.7187 15.53 15.54C15.88 15.19 15.88 14.62 15.53 14.27L13.17 11.91L15.53 9.55C15.88 9.2 15.88 8.63 15.53 8.28C15.18 7.93 14.61 7.93 14.26 8.28L11.9 10.64L9.54 8.28C9.19 7.93 8.62 7.93 8.27 8.28C7.92 8.63 7.92 9.2 8.27 9.55L10.63 11.91L8.27 14.27C7.92 14.62 7.92 15.19 8.27 15.54C8.62 15.89 9.19 15.89 9.54 15.54L11.9 13.18L14.26 15.54Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 11.9C1 17.91 5.89 22.8 11.9 22.8C17.91 22.8 22.8 17.91 22.8 11.9C22.8 5.89 17.91 1 11.9 1C5.89 1 1 5.89 1 11.9ZM2.8 11.9C2.8 6.88 6.88 2.8 11.9 2.8C16.92 2.8 21 6.88 21 11.9C21 16.92 16.92 21 11.9 21C6.88 21 2.8 16.92 2.8 11.9Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CloseCircleIcon;