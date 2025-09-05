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
  d: "M10 14.4c0 .5.4.9.9.9s.9-.4.9-.9v-2.6h2.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.6V7.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9V10H7.4c-.5 0-.9.4-.9.9s.4.9.9.9H10v2.6Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 20.8c-5.46 0-9.9-4.44-9.9-9.9S5.44 1 10.9 1s9.9 4.44 9.9 9.9c0 2.41-.865 4.62-2.3 6.34l4.03 4.03a.9.9 0 0 1 0 1.27.891.891 0 0 1-.635.26.935.935 0 0 1-.635-.26l-4.032-4.032A9.855 9.855 0 0 1 10.9 20.8Zm0-18c-4.47 0-8.1 3.63-8.1 8.1S6.43 19 10.9 19s8.1-3.63 8.1-8.1-3.63-8.1-8.1-8.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.895 22.8h.005-.01.005Z"
})));
export default ZoomInIcon;