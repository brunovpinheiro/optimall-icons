function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MinusIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "minus",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 11.0996L20.0918 11.1045C20.5457 11.1505 20.9004 11.5339 20.9004 12C20.9004 12.4661 20.5457 12.8495 20.0918 12.8955L20 12.9004H4C3.50294 12.9004 3.09961 12.4971 3.09961 12C3.09961 11.5029 3.50294 11.0996 4 11.0996H20Z",
  fill: "currentColor"
})));
export default MinusIcon;