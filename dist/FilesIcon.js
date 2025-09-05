function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FilesIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "files",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.4 15.8h7c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7c-.5 0-.9.4-.9.9s.4.9.9.9Zm0-4h4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4c-.5 0-.9.4-.9.9s.4.9.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.65 18.66c-.512.512-1.125.794-1.915.95A3.907 3.907 0 0 1 14.9 22.8h-5c-2.98 0-4.62 0-5.76-1.14C3 20.52 3 18.88 3 15.9v-8c0-1.907 1.377-3.5 3.189-3.835.154-.795.437-1.41.951-1.925C8.28 1 9.92 1 12.9 1h1.34c.91 0 1.4 0 1.94.22.53.22.9.59 1.52 1.21l2.66 2.66c.62.62.99.99 1.21 1.53.22.54.22 1.03.22 1.94v4.34c0 2.98 0 4.62-1.14 5.76ZM12.9 19.8h1.99c.71 0 1.345 0 1.915-.015A2.1 2.1 0 0 1 14.9 21h-5c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-8a2.1 2.1 0 0 1 1.215-1.905C6 6.562 6 7.193 6 7.9v5c0 2.98 0 4.62 1.14 5.76 1.14 1.14 2.78 1.14 5.76 1.14ZM8.42 3.41c.59-.59 1.73-.61 4.48-.61h1.6v.6c0 2.06 0 3.2.85 4.05.85.85 1.99.85 4.05.85h.6v4.6c0 2.75-.02 3.89-.61 4.48-.6.6-1.74.62-4.49.62h-2c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.48v-5c0-2.76.03-3.9.62-4.49ZM19.23 6.5l-.13-.13-2.8-2.8c0 1.43.012 2.302.32 2.61.308.308 1.18.32 2.61.32Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FilesIcon;