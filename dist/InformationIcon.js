function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const InformationIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "information",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.14 17.8C11.64 17.8 11.24 17.4 11.24 16.9V11.8H11.14C10.64 11.8 10.24 11.4 10.24 10.9C10.24 10.4 10.64 10 11.14 10C11.72 10 12.22 10 12.63 10.41C13.04 10.83 13.04 11.33 13.04 11.9V16.9C13.04 17.4 12.64 17.8 12.14 17.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 7.9C11 8.4 11.4 8.8 11.9 8.8C12.4 8.8 12.8 8.4 12.8 7.9C12.8 7.4 12.4 7 11.9 7C11.4 7 11 7.4 11 7.9Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9C1 5.89 5.89 1 11.9 1C17.91 1 22.8 5.89 22.8 11.9C22.8 17.91 17.91 22.8 11.9 22.8ZM11.9 2.8C6.88 2.8 2.8 6.88 2.8 11.9C2.8 16.92 6.88 21 11.9 21C16.92 21 21 16.92 21 11.9C21 6.88 16.92 2.8 11.9 2.8Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default InformationIcon;