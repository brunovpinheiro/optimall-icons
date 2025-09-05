function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const PriceTagIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "price, tag",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.4 8.81c-1.32 0-2.4-1.08-2.4-2.4 0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4 0 1.32-1.08 2.4-2.4 2.4Zm0-3c-.33 0-.6.27-.6.6 0 .33.27.6.6.6.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.896 17.81H9.9h-.01.006Zm-.636-.26a.936.936 0 0 0 .636.26.891.891 0 0 0 .634-.26.9.9 0 0 0 0-1.27l-3-3a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l3 3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.71 22.81c-.88 0-1.76-.29-2.5-.86a35.022 35.022 0 0 1-6.35-6.35c-1.2-1.55-1.14-3.72.15-5.15 2.74-3.07 5.62-5.88 8.78-8.6.46-.39 1.01-.63 1.6-.68 3.31-.3 7.58-.35 9.09 1.16 1.51 1.51 1.46 5.78 1.16 9.09-.05.59-.29 1.14-.68 1.6a92.643 92.643 0 0 1-8.6 8.78c-.75.67-1.69 1.01-2.65 1.01ZM3.35 11.65c-.71.79-.73 1.99-.06 2.85 1.77 2.28 3.74 4.25 6.03 6.03.87.67 2.06.64 2.85-.06a91.43 91.43 0 0 0 8.43-8.61c.15-.17.24-.38.25-.59.35-3.84.1-6.92-.64-7.66-.73-.73-3.81-.99-7.66-.64-.21.02-.42.11-.59.26-3.1 2.66-5.92 5.42-8.61 8.43v-.01Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default PriceTagIcon;