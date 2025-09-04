function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RemoveCircleIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "remove, circle",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9m4.092 8.205a.9.9 0 0 1 0 1.79L16 12.9H8a.9.9 0 0 1 0-1.8h8z"
})));
export default RemoveCircleIcon;