function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckDoubleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "check, double",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M17.223 7.19a1 1 0 0 0-1.446-1.38l-6.063 6.35a1 1 0 0 0 1.446 1.381zm-14 5.953a1 1 0 0 0-1.446 1.38l3.5 3.668a1 1 0 0 0 1.446 0l1.024-1.073a1 1 0 0 0-1.446-1.381L6 16.052zm19-5.953a1 1 0 0 0-1.446-1.38L11 16.052l-2.777-2.91a1 1 0 0 0-1.446 1.382l3.5 3.667a1 1 0 0 0 1.446 0z",
  clipRule: "evenodd"
})));
export default CheckDoubleIcon;