function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ChatSquareIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "chat, square",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M5.22 22.8c-.44 0-.89-.04-1.33-.12a.92.92 0 0 1-.68-.57c-.11-.3-.05-.63.15-.88.45-.56.76-1.23.9-1.95.03-.18-.07-.41-.28-.62C2.06 16.71 1 14.16 1 11.47 1 5.7 5.89 1 11.9 1s10.9 4.7 10.9 10.47-4.89 10.47-10.9 10.47c-.68.04-1.41-.07-2.1-.2-.25-.05-.51-.1-.58-.1 0 .01-.26.15-.51.29-1.08.58-2.28.87-3.49.87m6.68-20c-5.02 0-9.1 3.89-9.1 8.67 0 2.21.87 4.31 2.46 5.92.63.64.91 1.45.76 2.22-.09.48-.24.94-.43 1.38.78-.05 1.56-.27 2.26-.65.55-.29.82-.43 1.13-.48s.59 0 1.15.11c.58.11 1.17.16 1.75.16h.01c5.02 0 9.1-3.89 9.1-8.67S16.92 2.8 11.9 2.8"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M6.65 11.9a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m3.99 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0",
  clipRule: "evenodd"
})));
export default ChatSquareIcon;