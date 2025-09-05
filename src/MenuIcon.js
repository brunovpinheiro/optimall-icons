function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MenuIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "menu",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 4.09961C20.4971 4.09961 20.9004 4.50294 20.9004 5C20.9004 5.49706 20.4971 5.90039 20 5.90039H4C3.50294 5.90039 3.09961 5.49706 3.09961 5C3.09961 4.50294 3.50294 4.09961 4 4.09961H20Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 11.0996C20.4971 11.0996 20.9004 11.5029 20.9004 12C20.9004 12.4971 20.4971 12.9004 20 12.9004H4C3.50294 12.9004 3.09961 12.4971 3.09961 12C3.09961 11.5029 3.50294 11.0996 4 11.0996H20Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 18.0996C20.4971 18.0996 20.9004 18.5029 20.9004 19C20.9004 19.4971 20.4971 19.9004 20 19.9004H4C3.50294 19.9004 3.09961 19.4971 3.09961 19C3.09961 18.5029 3.50294 18.0996 4 18.0996H20Z",
  fill: "currentColor"
})));
export default MenuIcon;