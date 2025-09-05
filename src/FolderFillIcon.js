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
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.15 21.8H11.9C6.94 21.8 4.46 21.8 2.73 20.07C1 18.34 1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4C1.84 3.37 2.36 2.85 3 2.49C3.89 2 4.88 2 6.84 2C8.07 2 8.75 2 9.41 2.25C10.85 2.79 11.46 4.01 11.99 5.08L12.45 6H16.64C18.93 6 20.07 6 21.06 6.66C21.48 6.94 21.85 7.3 22.13 7.73C22.79 8.72 22.79 9.86 22.79 12.15C22.79 15.84 22.79 17.69 21.8 19.18C21.37 19.83 20.82 20.38 20.17 20.81C18.68 21.81 16.83 21.81 13.14 21.81L13.15 21.8Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FolderFillIcon;