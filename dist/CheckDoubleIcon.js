function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckDoubleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "check, double",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.223 7.19a1 1 0 0 0-1.446-1.38l-6.063 6.35a1 1 0 0 0 1.446 1.381l6.063-6.352Zm-14 5.953a1 1 0 0 0-1.446 1.38l3.5 3.668a1 1 0 0 0 1.446 0l1.024-1.073a1 1 0 0 0-1.446-1.381L6 16.052l-2.777-2.91Zm19-5.953a1 1 0 0 0-1.446-1.38L11 16.052l-2.777-2.91a1 1 0 0 0-1.446 1.382l3.5 3.667a1 1 0 0 0 1.446 0l10.5-11Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckDoubleIcon;