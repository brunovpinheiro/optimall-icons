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
  d: "M15.9 7.8h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9Zm-4 4h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.83 21.71c1.34 1.09 3.08 1.09 6.53 1.09l-.01.01c.78 0 1.22 0 1.69-.17l.14-.06.14-.06c.44-.21.75-.52 1.3-1.07l4.74-4.74.056-.056c.605-.605.95-.95 1.164-1.474.22-.54.22-1.03.22-1.94V9.9c0-4.01 0-6.03-1.44-7.46C17.93 1 15.91 1 11.9 1S5.87 1 4.44 2.44C3 3.87 3 5.89 3 9.9v4.54c0 3.45 0 5.18 1.09 6.53.22.27.47.52.74.74Zm.88-18c.91-.91 2.67-.91 6.19-.91l-.01.01c3.52 0 5.28 0 6.19.91.91.91.91 2.67.91 6.19v4.1h-.09c-2.98 0-4.62 0-5.76 1.14C12 16.29 12 17.93 12 20.91V21h-.64c-3.03 0-4.55 0-5.4-.69-.17-.14-.33-.3-.47-.47-.69-.85-.69-2.37-.69-5.4V9.9c0-3.52 0-5.28.91-6.19Zm8.7 12.7c.5-.5 1.39-.59 3.31-.61l-3.92 3.92c.02-1.92.11-2.81.61-3.31Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FileTextIcon;