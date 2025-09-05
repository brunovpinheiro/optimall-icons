function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ImageAddIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "image, add",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.65 5.75c0 .41-.34.75-.75.75h-3.25v3.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.5H13.9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V1.75c0-.41.34-.75.75-.75s.75.34.75.75V5h3.25c.41 0 .75.34.75.75Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.65 21c1.66 1.65 4.03 1.65 8.75 1.65h-.01c4.73 0 7.1 0 8.75-1.65 1.66-1.66 1.66-4.03 1.66-8.75v-.5c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.5c0 1.165 0 2.17-.024 3.037a8.54 8.54 0 0 0-2.686-.437h-.04c-1.61 0-3.176.452-4.671 1.34-.307-.289-.63-.563-.97-.82-2.22-1.68-5-2.56-7.84-2.51a20.1 20.1 0 0 0-.969.035v-.645c0-4.22 0-6.34 1.13-7.47 1.12-1.13 3.25-1.13 7.47-1.13.5 0 .9-.4.9-.9s-.4-.9-.9-.9c-4.72 0-7.09 0-8.75 1.65C1 5.16 1 7.53 1 12.25v.084C1 16.998 1 19.36 2.65 21Zm11.166-3.439c.75.978 1.335 2.066 1.727 3.216 1.621-.11 2.651-.381 3.327-1.057.562-.562.845-1.369.986-2.557a6.836 6.836 0 0 0-2.566-.513h-.03c-1.17 0-2.323.306-3.444.912ZM11.4 20.85c.829 0 1.577 0 2.252-.009a9.68 9.68 0 0 0-3.122-4.031c-1.9-1.44-4.28-2.2-6.74-2.15a8.294 8.294 0 0 0-.979.029c.041 2.649.232 4.151 1.119 5.031 1.13 1.12 3.25 1.13 7.47 1.13Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ImageAddIcon;