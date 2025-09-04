function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MoreHIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "more, h",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M6 10.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zM10.746 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m6.004 0c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5H18c-.69 0-1.25-.56-1.25-1.25"
})));
export default MoreHIcon;