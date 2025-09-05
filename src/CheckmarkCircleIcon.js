function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckmarkCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "checkmark, circle",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.76 15.54c.17.17.4.26.64.26l-.01-.01h.02c.24 0 .47-.11.64-.29l5.5-6c.34-.36.32-.93-.05-1.27a.9.9 0 0 0-1.27.06l-4.87 5.31-1.83-1.83a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l2.5 2.5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 11.9c0 6.01 4.89 10.9 10.9 10.9 6.01 0 10.9-4.89 10.9-10.9C22.8 5.89 17.91 1 11.9 1 5.89 1 1 5.89 1 11.9Zm1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckmarkCircleIcon;