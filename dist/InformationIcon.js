function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const InformationIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "information",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.14 17.8c-.5 0-.9-.4-.9-.9v-5.1h-.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9c.58 0 1.08 0 1.49.41.41.42.41.92.41 1.49v5c0 .5-.4.9-.9.9ZM11 7.9c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 22.8C5.89 22.8 1 17.91 1 11.9 1 5.89 5.89 1 11.9 1c6.01 0 10.9 4.89 10.9 10.9 0 6.01-4.89 10.9-10.9 10.9Zm0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default InformationIcon;