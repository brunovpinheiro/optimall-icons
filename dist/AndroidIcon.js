function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AndroidIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "android",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M9.22 1.46a.9.9 0 1 0-1.44 1.08l1.05 1.4A6.4 6.4 0 0 0 5.6 9.5V18c0 1.05.85 1.9 1.9 1.9h.6V22a.9.9 0 1 0 1.8 0v-2.1h4.2V22a.9.9 0 0 0 1.8 0v-2.1h.6a1.9 1.9 0 0 0 1.9-1.9V9.5c0-2.381-1.3-4.458-3.23-5.56l1.05-1.4a.9.9 0 0 0-1.44-1.08l-1.35 1.8a6.4 6.4 0 0 0-2.86 0zM16.5 18.1a.1.1 0 0 0 .1-.1v-7.1H7.4V18a.1.1 0 0 0 .1.1zm-9.083-9h9.166a4.6 4.6 0 0 0-9.166 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M4 10.1a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9m16 0a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9"
})));
export default AndroidIcon;