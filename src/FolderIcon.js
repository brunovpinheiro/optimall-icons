function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FolderIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "folder",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.15 21.8H11.9C6.94 21.8 4.46 21.8 2.73 20.07C1 18.34 1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4C1.84 3.37 2.36 2.85 3 2.49C3.89 2 4.88 2 6.84 2C8.07 2 8.75 2 9.41 2.25C10.85 2.79 11.46 4.01 11.99 5.08L12.45 6H16.64C18.93 6 20.07 6 21.06 6.66C21.48 6.94 21.85 7.3 22.13 7.73C22.79 8.72 22.79 9.86 22.79 12.15C22.79 15.84 22.79 17.69 21.8 19.18C21.37 19.83 20.82 20.38 20.17 20.81C18.68 21.81 16.83 21.81 13.14 21.81L13.15 21.8ZM6.84 3.8C5.23 3.8 4.35 3.8 3.87 4.07C3.53 4.26 3.25 4.54 3.06 4.88C2.79 5.36 2.79 6.24 2.79 7.85V10.91C2.79 15.37 2.79 17.61 3.99 18.81C5.19 20.01 7.43 20.01 11.89 20.01H13.14C16.46 20.01 18.13 20.01 19.17 19.32C19.62 19.02 20 18.64 20.3 18.19C20.99 17.16 20.99 15.49 20.99 12.16C20.99 10.3 20.99 9.27 20.64 8.74C20.49 8.51 20.29 8.31 20.06 8.16C19.53 7.8 18.5 7.8 16.64 7.8H11.91C11.91 7.8 11.89 7.8 11.87 7.8H7.89C7.39 7.8 6.99 7.4 6.99 6.9C6.99 6.4 7.39 6 7.89 6H10.43L10.37 5.88C9.86 4.85 9.51 4.21 8.77 3.93C8.41 3.8 7.88 3.8 6.83 3.8H6.84Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FolderIcon;