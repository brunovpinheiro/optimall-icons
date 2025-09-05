function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ShoppingIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "shopping",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.9 16.8h-2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2c.5 0 .9.4.9.9s-.4.9-.9.9Zm0-3h-2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2c.5 0 .9.4.9.9s-.4.9-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.9 22.8h20c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-.1v-9.1c0-2.99-.91-3.9-3.9-3.9h-2.1V4.9c0-2.99-.91-3.9-3.9-3.9h-6C2.91 1 2 1.91 2 4.9V21h-.1c-.5 0-.9.4-.9.9s.4.9.9.9ZM16.8 21v-2.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9V21h-3.2v-9.1c0-1.98.12-2.1 2.1-2.1h4c1.98 0 2.1.12 2.1 2.1V21h-3.2ZM10 11.9V21H3.8v-6.2h2.1c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H3.8v-2.2h2.1c.5 0 .9-.4.9-.9S6.4 9 5.9 9H3.8V6.8h2.1c.5 0 .9-.4.9-.9S6.4 5 5.9 5H3.8v-.1c0-1.98.12-2.1 2.1-2.1h6c1.98 0 2.1.12 2.1 2.1V8h-.1c-2.99 0-3.9.91-3.9 3.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ShoppingIcon;