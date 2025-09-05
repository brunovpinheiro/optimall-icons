function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ExternalLinkFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "external, link, fill",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3.58 20.22c1.58 1.58 3.83 1.58 8.32 1.58l-.02-.01c4.49 0 6.74 0 8.32-1.58 1.5-1.5 1.58-3.69 1.58-7.42 0-.49-.4-.9-.9-.9s-.9.4-.9.9c0 3.55-.1 5.2-1.05 6.15-1.05 1.05-3.06 1.05-7.04 1.05s-5.99 0-7.04-1.05C3.8 17.89 3.8 15.89 3.8 11.9s0-5.99 1.05-7.05C5.8 3.91 7.45 3.8 11 3.8c.5 0 .9-.4.9-.9S11.5 2 11 2c-3.74 0-5.92.08-7.42 1.58C2 5.16 2 7.41 2 11.9s0 6.74 1.58 8.32Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.32 13.6c.17.17.4.26.63.26l-.01.01c.23 0 .46-.09.64-.27l8.35-8.4c.05.6.08 1.47.06 2.72 0 .49.39.91.89.91h.01c.49 0 .9-.4.9-.89.06-4.41-.41-4.89-.7-5.18-.28-.28-.75-.75-5.17-.7-.5 0-.89.41-.89.91.01.49.41.89.9.89h.01c1.26-.02 2.13.02 2.73.06l-8.35 8.41a.9.9 0 0 0 0 1.27Z"
})));
export default ExternalLinkFillIcon;