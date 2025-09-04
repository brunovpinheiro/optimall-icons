function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TargetIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "target",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M11.996 10.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12S5.98 22.9 12 22.9 22.9 18.02 22.9 12 18.02 1.1 12 1.1M2.944 12.9H6a.9.9 0 1 0 0-1.8H2.944A9.1 9.1 0 0 1 11.1 2.944V6a.9.9 0 0 0 1.8 0V2.944a9.1 9.1 0 0 1 8.156 8.156H18a.9.9 0 0 0 0 1.8h3.056a9.1 9.1 0 0 1-8.156 8.156V18a.9.9 0 0 0-1.8 0v3.056A9.1 9.1 0 0 1 2.944 12.9",
  clipRule: "evenodd"
})));
export default TargetIcon;