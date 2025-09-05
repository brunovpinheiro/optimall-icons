function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FolderIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "folder",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.15 21.8H11.9c-4.96 0-7.44 0-9.17-1.73C1 18.34 1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4c.35-.63.87-1.15 1.51-1.51C3.89 2 4.88 2 6.84 2c1.23 0 1.91 0 2.57.25 1.44.54 2.05 1.76 2.58 2.83l.46.92h4.19c2.29 0 3.43 0 4.42.66.42.28.79.64 1.07 1.07.66.99.66 2.13.66 4.42 0 3.69 0 5.54-.99 7.03-.43.65-.98 1.2-1.63 1.63-1.49 1-3.34 1-7.03 1l.01-.01Zm-6.31-18c-1.61 0-2.49 0-2.97.27-.34.19-.62.47-.81.81-.27.48-.27 1.36-.27 2.97v3.06c0 4.46 0 6.7 1.2 7.9 1.2 1.2 3.44 1.2 7.9 1.2h1.25c3.32 0 4.99 0 6.03-.69.45-.3.83-.68 1.13-1.13.69-1.03.69-2.7.69-6.03 0-1.86 0-2.89-.35-3.42-.15-.23-.35-.43-.58-.58-.53-.36-1.56-.36-3.42-.36H7.89c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.54l-.06-.12c-.51-1.03-.86-1.67-1.6-1.95-.36-.13-.89-.13-1.94-.13h.01Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default FolderIcon;