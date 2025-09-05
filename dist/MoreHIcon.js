function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MoreHIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "more, h",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 10.75C5.30964 10.75 4.75 11.3096 4.75 12C4.75 12.6904 5.30964 13.25 6 13.25H6.00898C6.69934 13.25 7.25898 12.6904 7.25898 12C7.25898 11.3096 6.69934 10.75 6.00898 10.75H6Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.7461 12C10.7461 11.3096 11.3057 10.75 11.9961 10.75H12.0051C12.6954 10.75 13.2551 11.3096 13.2551 12C13.2551 12.6904 12.6954 13.25 12.0051 13.25H11.9961C11.3057 13.25 10.7461 12.6904 10.7461 12Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.75 12C16.75 11.3096 17.3096 10.75 18 10.75H18.009C18.6994 10.75 19.259 11.3096 19.259 12C19.259 12.6904 18.6994 13.25 18.009 13.25H18C17.3096 13.25 16.75 12.6904 16.75 12Z",
  fill: "currentColor"
})));
export default MoreHIcon;