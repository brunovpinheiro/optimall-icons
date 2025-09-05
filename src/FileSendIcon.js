function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FileSendIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "file, send",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.966 3.55C8.796 2.06 7.896 1 6.916 1l-.02.01c-.97 0-1.88 1.06-3.05 2.55l-.135.17c-.183.23-.342.429-.455.55a.9.9 0 0 0 .02 1.27.9.9 0 0 0 1.27-.02c.177-.176.42-.487.703-.848l.017-.022c.06-.072.129-.159.205-.254.155-.195.34-.428.535-.656V9.9c0 .5.4.9.9.9s.9-.4.9-.9V3.74c.29.34.57.69.74.91.29.37.55.69.72.87.34.36.91.37 1.27.02a.89.89 0 0 0 .02-1.27c-.14-.14-.35-.41-.59-.72Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.02.02c.78 0 1.22 0 1.69-.17l.14-.06.14-.06c.44-.21.75-.52 1.3-1.07l4.74-4.74.056-.056c.605-.605.95-.95 1.164-1.474.22-.54.22-1.03.22-1.94V9.91c0-4.01 0-6.03-1.44-7.46-1.43-1.44-2.94-1.44-6.95-1.44-.5 0-.9.4-.9.9s.4.9.9.9c3.52 0 4.77 0 5.68.91.91.91.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14C12 16.29 12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4V12.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.54c0 3.45 0 5.18 1.09 6.53.22.28.47.52.74.74Zm9.58-5.3c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default FileSendIcon;