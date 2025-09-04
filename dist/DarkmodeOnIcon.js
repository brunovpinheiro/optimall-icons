function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const DarkmodeOnIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "darkmode, on",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12.53 22.8C6.72 22.8 2 18.08 2 12.27c0-4.91 3.34-9.13 8.12-10.25a.9.9 0 0 1 1 1.3c-.59 1.1-.9 2.35-.9 3.6 0 4.22 3.43 7.66 7.66 7.66 1.26 0 2.5-.31 3.6-.9a.88.88 0 0 1 .97.08c.28.22.41.58.33.92a10.48 10.48 0 0 1-10.25 8.12M8.76 4.39a8.7 8.7 0 0 0-4.96 7.88c0 4.81 3.92 8.73 8.73 8.73 3.44 0 6.46-1.97 7.88-4.96-.82.23-1.68.35-2.53.35-5.21 0-9.46-4.24-9.46-9.46 0-.86.12-1.71.35-2.53z"
})));
export default DarkmodeOnIcon;