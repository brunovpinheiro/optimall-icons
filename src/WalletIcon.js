function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const WalletIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "wallet",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.8 8.001V4.51C15.8 3.13 14.67 2 13.29 2c-.4 0-.8.1-1.15.28L3.25 6.85A2.3 2.3 0 0 0 2 8.9v7c0 2.98 0 4.62 1.14 5.76C4.28 22.8 5.92 22.8 8.9 22.8h6c2.98 0 4.62 0 5.76-1.14 1.14-1.14 1.14-2.78 1.14-5.76v-1c0-2.98 0-4.62-1.14-5.76-1.02-1.02-2.44-1.127-4.86-1.139ZM14.9 9.8H3.8v6.1c0 2.75.02 3.89.62 4.48.59.59 1.73.62 4.48.62h6c2.75 0 3.89-.02 4.48-.61.59-.59.62-1.73.62-4.49v-1c0-2.75-.02-3.89-.62-4.48-.59-.59-1.73-.62-4.48-.62ZM14 4.51V8H4.946l8.024-4.12c.43-.23 1.03.13 1.03.63Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default WalletIcon;