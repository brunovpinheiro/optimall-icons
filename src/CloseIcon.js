function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CloseIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "close",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.9 19.8c-.23 0-.46-.09-.64-.26l-6.36-6.36-6.36 6.36a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l6.36-6.36-6.37-6.37a.911.911 0 0 1 0-1.28c.36-.35.93-.35 1.28 0l6.36 6.36 6.36-6.36a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-6.36 6.36 6.36 6.36a.9.9 0 0 1 0 1.27c-.18.18-.41.26-.64.26l.01.02Z"
})));
export default CloseIcon;