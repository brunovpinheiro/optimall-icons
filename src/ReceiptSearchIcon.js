function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ReceiptSearchIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "receipt, search",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.52 20.773c.18.111.344.212.41.227l-.01.01c.5 0 .89.4.89.9s-.41.9-.91.9c-.545 0-.933-.246-1.525-.62L8.45 20.97l-.072-.045c-.216-.136-.426-.267-.498-.285-.019.01-.093.056-.186.116-.106.067-.238.15-.344.214-.09.06-.19.13-.3.21l-.02.015c-.763.531-2.02 1.408-3.15.675C3 21.31 3 20.27 3 18.55V7.9c0-2.97 0-4.6 1.07-5.74C5.17 1 6.72 1 9.55 1h4.71c2.82 0 4.38 0 5.47 1.16C20.8 3.3 20.8 4.93 20.8 7.9v4c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-4c0-2.5 0-3.88-.58-4.5-.54-.58-1.6-.6-4.16-.6H9.55c-2.57 0-3.63.03-4.17.6-.58.61-.58 1.99-.58 4.5v10.64c0 .74 0 1.5.08 1.79.29-.05.9-.47 1.14-.64.072-.046.139-.093.202-.136.059-.041.115-.08.168-.114.57-.37 1-.63 1.57-.61.506.02.87.247 1.404.582l.046.028 1.91 1.21.2.123Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 10.9c0-.5.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9h-4c-.5 0-.9-.4-.9-.9Zm9.8-4c0-.5-.4-.9-.9-.9h-8c-.5 0-.9.4-.9.9s.4.9.9.9h8c.5 0 .9-.4.9-.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m19.96 19.68 1.58 1.58h.01a.9.9 0 0 1 0 1.27c-.18.17-.41.26-.64.26-.23 0-.46-.08-.64-.26l-1.58-1.58A4.332 4.332 0 0 1 12 17.32c0-2.39 1.94-4.33 4.33-4.33a4.332 4.332 0 0 1 3.63 6.69Zm-1.85-.56c.09-.08.17-.17.24-.27h-.01c.34-.44.51-.97.51-1.52 0-1.4-1.13-2.53-2.53-2.53s-2.53 1.13-2.53 2.53a2.533 2.533 0 0 0 4.32 1.79Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ReceiptSearchIcon;