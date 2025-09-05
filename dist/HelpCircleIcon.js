function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const HelpCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "help, circle",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.1133 15.9053C12.6682 15.9614 13.1016 16.4303 13.1016 17C13.1016 17.5697 12.6682 18.0386 12.1133 18.0947L12.001 18.0996H11.9922C11.3847 18.0996 10.8926 17.6075 10.8926 17C10.8926 16.3925 11.3847 15.9004 11.9922 15.9004H12.001L12.1133 15.9053Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6.09961C13.6017 6.09961 14.9004 7.39838 14.9004 9C14.9004 9.57555 14.7305 10.1139 14.4395 10.5664L14.4404 10.5674C14.2628 10.8434 14.0557 11.106 13.8691 11.3379C13.6732 11.5814 13.5011 11.789 13.3447 12.0039C13.0257 12.4424 12.9004 12.7441 12.9004 13V13.5C12.9004 13.9971 12.4971 14.4004 12 14.4004C11.5029 14.4004 11.0996 13.9971 11.0996 13.5V13C11.0996 12.1514 11.5166 11.458 11.8896 10.9453C12.0793 10.6846 12.2911 10.4273 12.4668 10.209C12.6517 9.97914 12.8046 9.78204 12.9258 9.59375L13 9.45996C13.0643 9.32064 13.0996 9.16527 13.0996 9C13.0996 8.39248 12.6075 7.90039 12 7.90039C11.3925 7.90039 10.9004 8.39248 10.9004 9C10.9004 9.49706 10.4971 9.90039 10 9.90039C9.50294 9.90039 9.09961 9.49706 9.09961 9C9.09961 7.39838 10.3983 6.09961 12 6.09961Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.09961C18.0199 1.09961 22.9004 5.9801 22.9004 12C22.9004 18.0199 18.0199 22.9004 12 22.9004C5.9801 22.9004 1.09961 18.0199 1.09961 12C1.09961 5.9801 5.9801 1.09961 12 1.09961ZM12 2.90039C6.97421 2.90039 2.90039 6.97421 2.90039 12C2.90039 17.0258 6.97421 21.0996 12 21.0996C17.0258 21.0996 21.0996 17.0258 21.0996 12C21.0996 6.97421 17.0258 2.90039 12 2.90039Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default HelpCircleIcon;