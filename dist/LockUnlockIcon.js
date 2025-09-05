function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LockUnlockIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "lock, unlock",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 17.3c-.5 0-.9-.4-.9-.9v-2c0-.5.4-.9.9-.9s.9.4.9.9v2c0 .5-.4.9-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.29 8.085c2.675-.094 5.448-.082 8.09.035 2.11.1 3.86 1.71 4.14 3.83.14 1.01.28 2.22.28 3.46 0 1.24-.14 2.45-.28 3.46-.29 2.12-2.03 3.74-4.14 3.83-1.46.07-2.92.1-4.48.1-1.56 0-3.02-.03-4.48-.1-2.11-.1-3.86-1.71-4.14-3.83-.14-1.01-.28-2.22-.28-3.46 0-1.24.14-2.45.28-3.46.247-1.802 1.541-3.243 3.22-3.69V6.4C6.5 3.42 8.92 1 11.9 1c2.4 0 4.25 1.82 4.85 3.62.16.47-.1.98-.57 1.14-.47.16-.98-.1-1.14-.57-.39-1.16-1.62-2.38-3.15-2.38a3.61 3.61 0 0 0-3.6 3.6v1.675ZM11.9 9.8c-1.52 0-2.96.03-4.4.1-1.24.06-2.27 1.02-2.44 2.28-.13.95-.26 2.08-.26 3.22 0 1.14.13 2.27.26 3.22.17 1.26 1.2 2.22 2.44 2.28 2.86.13 5.94.13 8.8 0 1.24-.06 2.27-1.02 2.44-2.28.13-.95.26-2.08.26-3.22 0-1.14-.13-2.27-.26-3.22-.17-1.26-1.2-2.22-2.44-2.28-1.44-.07-2.88-.1-4.4-.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default LockUnlockIcon;