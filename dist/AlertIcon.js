function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "alert",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M11.9 17.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m-.9-3.9c0 .5.4.9.9.9s.9-.4.9-.9v-4c0-.5-.4-.9-.9-.9s-.9.4-.9.9z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M11.9 22.8c-5.05 0-7.59 0-9.14-1.43a5.44 5.44 0 0 1-1.67-2.96c-.43-2.07.83-4.31 3.36-8.77 2.51-4.46 3.78-6.71 5.77-7.37 1.1-.37 2.27-.37 3.37 0 1.98.657 3.238 2.879 5.743 7.306l.057.1c2.507 4.436 3.769 6.67 3.34 8.734a5.57 5.57 0 0 1-1.67 2.96c-1.55 1.43-4.09 1.43-9.14 1.43zm0-19c-.38 0-.75.06-1.12.18-1.316.435-2.525 2.565-4.712 6.419L6 10.52c-2.23 3.94-3.45 6.11-3.16 7.52.16.78.55 1.47 1.13 2 1.04.95 3.48.95 7.93.95s6.89 0 7.93-.95c.58-.53.97-1.22 1.13-2 .29-1.41-.93-3.58-3.16-7.52-2.22-3.94-3.45-6.11-4.78-6.55-.37-.12-.74-.18-1.12-.18z",
  clipRule: "evenodd"
})));
export default AlertIcon;