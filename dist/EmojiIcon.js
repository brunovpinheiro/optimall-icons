function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const EmojiIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "emoji",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 2.9a9.1 9.1 0 1 0 0 18.2 9.1 9.1 0 0 0 0-18.2ZM1.1 12C1.1 5.98 5.98 1.1 12 1.1c6.02 0 10.9 4.88 10.9 10.9 0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.54 14.28a.9.9 0 0 1 .18 1.26A5.892 5.892 0 0 1 12 17.9a5.892 5.892 0 0 1-4.72-2.36.9.9 0 1 1 1.44-1.08A4.092 4.092 0 0 0 12 16.1c1.34 0 2.53-.643 3.28-1.64a.9.9 0 0 1 1.26-.18ZM6.75 9c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25Zm7.99 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default EmojiIcon;