function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ReceiptWaitIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "receipt, wait",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M20 13.1a1.9 1.9 0 0 1 1.9 1.9 3.9 3.9 0 0 1-1.409 3 3.9 3.9 0 0 1 1.41 3A1.9 1.9 0 0 1 20 22.9h-4a1.9 1.9 0 0 1-1.9-1.9c0-1.206.548-2.285 1.408-3a3.9 3.9 0 0 1-1.408-3 1.9 1.9 0 0 1 1.9-1.9zm-2 5.8a2.1 2.1 0 0 0-2.1 2.1.1.1 0 0 0 .1.1h4a.1.1 0 0 0 .1-.1 2.1 2.1 0 0 0-2.1-2.1m-2-4a.1.1 0 0 0-.1.1 2.1 2.1 0 0 0 1.885 2.089l.215.01.215-.01A2.1 2.1 0 0 0 20.1 15a.1.1 0 0 0-.1-.1z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M14.26 1c2.82 0 4.38 0 5.47 1.16C20.8 3.3 20.8 4.93 20.8 7.9v3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3c0-2.5 0-3.88-.58-4.5-.54-.58-1.6-.6-4.16-.6H9.55c-2.57 0-3.63.03-4.17.6-.58.61-.58 1.99-.58 4.5v10.64c0 .74 0 1.5.08 1.79.29-.05.9-.47 1.14-.64q.108-.07.202-.136.088-.062.168-.114c.57-.37 1-.63 1.57-.61.506.02.87.247 1.404.581l.046.03 1.91 1.21.2.122c.18.111.343.212.41.227l-.01.01c.5 0 .89.4.89.9s-.41.9-.91.9c-.545 0-.934-.246-1.525-.62L8.45 20.97l-.072-.045c-.216-.136-.426-.267-.498-.285a4 4 0 0 0-.187.116c-.106.067-.237.15-.343.214q-.135.09-.3.21l-.02.014c-.763.532-2.02 1.41-3.15.676C3 21.31 3 20.27 3 18.55V7.9c0-2.97 0-4.6 1.07-5.74C5.17 1 6.72 1 9.55 1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M11.9 10c.5 0 .9.4.9.9s-.4.9-.9.9h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9zm4-4c.5 0 .9.4.9.9s-.4.9-.9.9h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z"
})));
export default ReceiptWaitIcon;