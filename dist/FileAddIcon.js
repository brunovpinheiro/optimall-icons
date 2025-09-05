function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FileAddIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  size = 24,
  width,
  height,
  ...props
}, ref) => {
  const iconSize = width || height || size;
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    className: className,
    "aria-label": ariaLabel || "file, add",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 9.9c0 .5.4.9.9.9s.9-.4.9-.9V6.8h3.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.8V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9V5H3.9c-.5 0-.9.4-.9.9s.4.9.9.9H7v3.1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.02.01c.78 0 1.22 0 1.68-.17.09-.03.19-.07.29-.12.44-.21.76-.53 1.3-1.07l4.74-4.74c.65-.64 1-1 1.22-1.53.22-.54.22-1.03.22-1.94V9.9c0-4.01 0-6.02-1.44-7.46-1.35-1.35-3.33-1.42-6.43-1.43-.5 0-.9.4-.9.9 0 .49.4.9.9.9 2.9.01 4.35.11 5.16.91.91.91.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14C12 16.29 12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4v-2.55c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.55c0 3.45 0 5.18 1.09 6.53.22.27.47.52.74.74Zm9.58-5.3c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default FileAddIcon;