function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ZoomInIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "zoom, in",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 14.4C10 14.9 10.4 15.3 10.9 15.3C11.4 15.3 11.8 14.9 11.8 14.4V11.8H14.4C14.9 11.8 15.3 11.4 15.3 10.9C15.3 10.4 14.9 10 14.4 10H11.8V7.4C11.8 6.9 11.4 6.5 10.9 6.5C10.4 6.5 10 6.9 10 7.4V10H7.4C6.9 10 6.5 10.4 6.5 10.9C6.5 11.4 6.9 11.8 7.4 11.8H10V14.4Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 20.8C5.44 20.8 1 16.36 1 10.9C1 5.44 5.44 1 10.9 1C16.36 1 20.8 5.44 20.8 10.9C20.8 13.3098 19.9351 15.5209 18.4993 17.2393L22.53 21.27C22.88 21.62 22.88 22.19 22.53 22.54C22.3513 22.7187 22.1234 22.7988 21.8951 22.8C21.6668 22.7987 21.4387 22.7088 21.26 22.54L17.2284 18.5084C15.5116 19.9388 13.3047 20.8 10.9 20.8ZM10.9 2.8C6.43 2.8 2.8 6.43 2.8 10.9C2.8 15.37 6.43 19 10.9 19C15.37 19 19 15.37 19 10.9C19 6.43 15.37 2.8 10.9 2.8Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.8951 22.8L21.9 22.8H21.89L21.8951 22.8Z",
  fill: "currentColor"
})));
export default ZoomInIcon;