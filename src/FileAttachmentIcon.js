function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FileAttachmentIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "file, attachment",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.5 9.17C6.5 10.62 7.69 11.8 9.15 11.8C10.61 11.8 11.8 10.62 11.8 9.17V5.36C11.8 2.96 9.83 1 7.4 1C4.97 1 3 2.96 3 5.36V8.13C3 8.63 3.4 9.03 3.9 9.03C4.4 9.03 4.8 8.63 4.8 8.13V5.36C4.8 3.95 5.97 2.8 7.4 2.8C8.83 2.8 10 3.95 10 5.36V9.17C10 9.63 9.62 10 9.15 10C8.68 10 8.3 9.63 8.3 9.17V5.36C8.3 4.86 7.9 4.46 7.4 4.46C6.9 4.46 6.5 4.86 6.5 5.36V9.17Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.83 21.71C6.17 22.8 7.91 22.8 11.36 22.8L11.34 22.81C12.12 22.81 12.56 22.81 13.02 22.64C13.11 22.61 13.21 22.57 13.31 22.52C13.75 22.31 14.07 21.99 14.61 21.45L19.35 16.71C20 16.07 20.35 15.71 20.57 15.18C20.79 14.64 20.79 14.15 20.79 13.24V9.9C20.79 5.89 20.79 3.88 19.35 2.44C18 1.09 16.02 1.02 12.92 1.01C12.42 1.01 12.02 1.41 12.02 1.91C12.02 2.4 12.42 2.81 12.92 2.81C15.82 2.82 17.27 2.92 18.08 3.72C18.99 4.63 18.99 6.39 18.99 9.91V14.01H18.9C15.92 14.01 14.28 14.01 13.14 15.15C12 16.29 12 17.93 12 20.91V21H11.36C8.33 21 6.81 21 5.96 20.31C5.79 20.17 5.63 20.01 5.49 19.84C4.8 18.99 4.8 17.47 4.8 14.44V11.89C4.8 11.39 4.4 10.99 3.9 10.99C3.4 10.99 3 11.39 3 11.89V14.44C3 17.89 3 19.62 4.09 20.97C4.31 21.24 4.56 21.49 4.83 21.71ZM14.41 16.41C14.91 15.91 15.8 15.82 17.72 15.8L13.8 19.72C13.82 17.8 13.91 16.91 14.41 16.41Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FileAttachmentIcon;