function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FileTextIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "file, text",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.9 7.8H7.9C7.4 7.8 7 7.4 7 6.9C7 6.4 7.4 6 7.9 6H15.9C16.4 6 16.8 6.4 16.8 6.9C16.8 7.4 16.4 7.8 15.9 7.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 11.8H7.9C7.4 11.8 7 11.4 7 10.9C7 10.4 7.4 10 7.9 10H11.9C12.4 10 12.8 10.4 12.8 10.9C12.8 11.4 12.4 11.8 11.9 11.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.83 21.71C6.17 22.8 7.91 22.8 11.36 22.8L11.35 22.81C12.13 22.81 12.57 22.81 13.04 22.64C13.085 22.62 13.1325 22.6 13.18 22.58C13.2275 22.56 13.275 22.54 13.32 22.52C13.76 22.31 14.07 22 14.62 21.45L19.36 16.71C19.3791 16.6909 19.3979 16.6721 19.4165 16.6535C20.0213 16.049 20.3666 15.7039 20.58 15.18C20.8 14.64 20.8 14.15 20.8 13.24V9.9C20.8 5.89001 20.8 3.87 19.36 2.44C17.93 1 15.91 1 11.9 1C7.89 1 5.87 1 4.44 2.44C3 3.87 3 5.89 3 9.9V14.44C3 17.89 3 19.62 4.09 20.97C4.31 21.24 4.56 21.49 4.83 21.71ZM5.71 3.71C6.62 2.8 8.38 2.8 11.9 2.8L11.89 2.81C15.41 2.81 17.17 2.81 18.08 3.72C18.99 4.63 18.99 6.39 18.99 9.91V14.01H18.9C15.92 14.01 14.28 14.01 13.14 15.15C12 16.29 12 17.93 12 20.91V21H11.36C8.33 21 6.81 21 5.96 20.31C5.79 20.17 5.63 20.01 5.49 19.84C4.8 18.99 4.8 17.47 4.8 14.44V9.9C4.8 6.38 4.8 4.62 5.71 3.71ZM14.41 16.41C14.91 15.91 15.8 15.82 17.72 15.8L13.8 19.72C13.82 17.8 13.91 16.91 14.41 16.41Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FileTextIcon;