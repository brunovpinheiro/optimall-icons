function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ManagerIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "manager",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.95 12.85C19.1 12 17.96 12 15.9 12c-.36 0-.68.21-.82.53l-2 4.51-.25-1.98.88-1.76a.907.907 0 0 0-.81-1.31h-2c-.31 0-.6.16-.77.43-.16.27-.18.6-.04.88l.88 1.76-.25 1.98-2-4.51A.886.886 0 0 0 7.9 12c-2.06 0-3.2 0-4.05.85C3 13.7 3 14.84 3 16.9v5c0 .5.4.9.9.9s.9-.4.9-.9v-5c0-1.53 0-2.46.32-2.78.28-.28 1.01-.32 2.19-.32l3.76 8.46c.29.65 1.36.65 1.64 0l3.76-8.46c1.18 0 1.91.04 2.19.32.32.32.32 1.25.32 2.78v5c0 .5.4.9.9.9s.9-.4.9-.9v-5c0-2.06 0-3.2-.85-4.05h.02ZM11.9 10.8a4.4 4.4 0 0 0 4.4-4.4v-1a4.4 4.4 0 0 0-8.8 0v1a4.4 4.4 0 0 0 4.4 4.4ZM9.3 5.4c0-1.43 1.17-2.6 2.6-2.6 1.43 0 2.6 1.17 2.6 2.6v1c0 1.43-1.17 2.6-2.6 2.6-1.43 0-2.6-1.17-2.6-2.6v-1Z"
})));
export default ManagerIcon;