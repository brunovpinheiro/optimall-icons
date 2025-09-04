function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CloseIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "close",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M18.9 19.8c-.23 0-.46-.09-.64-.26l-6.36-6.36-6.36 6.36a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l6.36-6.36-6.37-6.37a.91.91 0 0 1 0-1.28c.36-.35.93-.35 1.28 0l6.36 6.36 6.36-6.36a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-6.36 6.36 6.36 6.36a.9.9 0 0 1 0 1.27c-.18.18-.41.26-.64.26z"
})));
export default CloseIcon;