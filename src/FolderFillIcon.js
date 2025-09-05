function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FolderFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "folder, fill",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.15 21.8H11.9c-4.96 0-7.44 0-9.17-1.73C1 18.34 1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4c.35-.63.87-1.15 1.51-1.51C3.89 2 4.88 2 6.84 2c1.23 0 1.91 0 2.57.25 1.44.54 2.05 1.76 2.58 2.83l.46.92h4.19c2.29 0 3.43 0 4.42.66.42.28.79.64 1.07 1.07.66.99.66 2.13.66 4.42 0 3.69 0 5.54-.99 7.03-.43.65-.98 1.2-1.63 1.63-1.49 1-3.34 1-7.03 1l.01-.01Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FolderFillIcon;