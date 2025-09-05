function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const NotificationFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "notification, fill",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.75 20a4.249 4.249 0 0 1-7.5 0h7.5ZM12 1.75a7.75 7.75 0 0 1 7.75 7.75v2.756c0 .597.237 1.169.66 1.59l.603.604a2.52 2.52 0 0 1-1.782 4.3H4.77a2.519 2.519 0 0 1-1.782-4.3l.604-.603.15-.165c.327-.4.509-.904.509-1.426V9.5A7.75 7.75 0 0 1 12 1.75Z"
})));
export default NotificationFillIcon;