function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TargetIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "target",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.9961 10.75C11.3057 10.75 10.7461 11.3096 10.7461 12C10.7461 12.6904 11.3057 13.25 11.9961 13.25H12.0051C12.6954 13.25 13.2551 12.6904 13.2551 12C13.2551 11.3096 12.6954 10.75 12.0051 10.75H11.9961Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9996 1.10001C5.9797 1.10001 1.09961 5.9801 1.09961 12C1.09961 18.0199 5.9797 22.9 11.9996 22.9C18.0195 22.9 22.8996 18.0199 22.8996 12C22.8996 5.9801 18.0195 1.10001 11.9996 1.10001ZM2.94355 12.9H5.99961C6.49667 12.9 6.89961 12.4971 6.89961 12C6.89961 11.5029 6.49667 11.1 5.99961 11.1H2.94355C3.36642 6.79275 6.79236 3.36682 11.0996 2.94395V6.00001C11.0996 6.49706 11.5026 6.90001 11.9996 6.90001C12.4967 6.90001 12.8996 6.49706 12.8996 6.00001V2.94395C17.2068 3.36682 20.6328 6.79276 21.0557 11.1H17.9996C17.5026 11.1 17.0996 11.5029 17.0996 12C17.0996 12.4971 17.5026 12.9 17.9996 12.9H21.0557C20.6328 17.2072 17.2068 20.6332 12.8996 21.0561V18C12.8996 17.503 12.4967 17.1 11.9996 17.1C11.5026 17.1 11.0996 17.503 11.0996 18V21.0561C6.79236 20.6332 3.36642 17.2072 2.94355 12.9Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default TargetIcon;