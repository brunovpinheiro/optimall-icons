function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AppleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "apple",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.3 1.9c0 2.37-1.77 4.9-4.4 4.9-.5 0-.9-.4-.9-.9C11 3.53 12.77 1 15.4 1c.5 0 .9.4.9.9Zm-2.04 1.23c-.25.64-.67 1.21-1.23 1.55.25-.64.67-1.21 1.23-1.55Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.14 12.9c0 1.5.81 2.77 2.11 3.32l.02.01c.44.19.66.68.5 1.13-1.01 2.87-2.83 5.95-4.96 5.95-.86 0-1.58-.31-2.21-.59-.45-.2-.86-.38-1.19-.38-.312 0-.705.17-1.119.35l-.071.03c-.63.28-1.35.59-2.21.59-2.8 0-6-5.74-6-10.4s3.55-6.4 5.79-6.4c1.22 0 1.98.31 2.59.56l.063.025c.367.147.635.255.957.255.22 0 .32-.04.58-.16l.27-.12c.61-.25 1.37-.56 2.59-.56.63 0 2.81.17 4.3 2.4.13.2.18.45.13.69-.05.24-.2.44-.41.57-1.2.73-1.73 1.57-1.73 2.73Zm-2.357 8.6c-.478-.002-.966-.211-1.483-.44-.59-.26-1.2-.52-1.9-.52-.666 0-1.25.244-1.822.483l-.088.037c-.52.23-1.01.44-1.49.44-1.18 0-4.2-4.09-4.2-8.6 0-3.35 2.45-4.6 3.99-4.6.855 0 1.353.203 1.882.419l.028.011.01.004c.486.199.994.406 1.68.406.58 0 .955-.16 1.278-.296l.032-.014.23-.1c.53-.22 1.04-.43 1.9-.43.34 0 1.35.08 2.25.93-1.17.97-1.75 2.21-1.75 3.67 0 1.9.94 3.61 2.44 4.58-1.048 2.625-2.366 4.015-2.987 4.02Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default AppleIcon;