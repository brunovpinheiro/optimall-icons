function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const EmojiIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "emoji",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 2.9a9.1 9.1 0 1 0 0 18.2 9.1 9.1 0 0 0 0-18.2M1.1 12C1.1 5.98 5.98 1.1 12 1.1S22.9 5.98 22.9 12 18.02 22.9 12 22.9 1.1 18.02 1.1 12",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M16.54 14.28a.9.9 0 0 1 .18 1.26A5.9 5.9 0 0 1 12 17.9a5.9 5.9 0 0 1-4.72-2.36.9.9 0 1 1 1.44-1.08c.749.997 1.939 1.64 3.28 1.64s2.53-.643 3.28-1.64a.9.9 0 0 1 1.26-.18M6.75 9c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m7.99 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25",
  clipRule: "evenodd"
})));
export default EmojiIcon;