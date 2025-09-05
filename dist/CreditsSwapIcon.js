function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CreditsSwapIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "credits, swap",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 9.1a6.9 6.9 0 1 1 0 13.8A6.9 6.9 0 0 1 8 9.1Zm0 1.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 14.1a.9.9 0 0 1 .9.9 6.896 6.896 0 0 1-6.544 6.89L16 21.9a.901.901 0 0 1-.805-1.302l.857-1.715.046-.08a.9.9 0 0 1 1.564.886l-.08.16A5.095 5.095 0 0 0 21.1 15a.9.9 0 0 1 .9-.9Zm-4.877.788a.9.9 0 0 1-.3-1.776l.3 1.776Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.957 1.1a6.944 6.944 0 0 1 1.166 13.788l-.15-.888-.15-.888a5.144 5.144 0 1 0-5.935-5.935L10 7.027l-.888-.15A6.945 6.945 0 0 1 15.957 1.1ZM8.116 2.107a.9.9 0 0 1 .689 1.295l-.857 1.715a.9.9 0 0 1-1.61-.805l.08-.162A5.096 5.096 0 0 0 2.9 9a.9.9 0 0 1-1.8 0c0-3.814 3.086-6.9 6.9-6.9l.116.007Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.888 7.177a.9.9 0 0 1-1.776-.3l1.776.3Z"
})));
export default CreditsSwapIcon;