function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UnlinkIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "unlink",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.9 4.88c.5 0 .9-.4.9-.9V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.08c0 .5.4.9.9.9Zm9.21 10.26a.9.9 0 0 1 0-1.27v-.01l2.61-2.61A4.35 4.35 0 0 0 20 8.16c0-1.17-.45-2.26-1.28-3.09a4.364 4.364 0 0 0-6.18 0L9.93 7.68a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l2.61-2.61a6.174 6.174 0 0 1 8.73 0 6.094 6.094 0 0 1 1.81 4.36c0 1.65-.64 3.2-1.81 4.37l-2.61 2.61c-.18.17-.41.26-.64.26-.23 0-.46-.08-.64-.26Zm-4.85 3.58 2.61-2.61h.01a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a6.151 6.151 0 0 1-4.37 1.81c-1.64 0-3.19-.64-4.36-1.81A6.111 6.111 0 0 1 2 15.63c0-1.64.64-3.19 1.81-4.36l2.61-2.61a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a4.364 4.364 0 0 0 0 6.18A4.35 4.35 0 0 0 8.17 20c1.17 0 2.26-.45 3.09-1.28ZM21.9 16h-2.08c-.5 0-.9.4-.9.9s.4.9.9.9h2.08c.5 0 .9-.4.9-.9s-.4-.9-.9-.9ZM16 19.82c0-.5.4-.9.9-.9s.9.4.9.9v2.08c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.08ZM3.98 6c.5 0 .9.4.9.9s-.4.9-.9.9H1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.08Z"
})));
export default UnlinkIcon;