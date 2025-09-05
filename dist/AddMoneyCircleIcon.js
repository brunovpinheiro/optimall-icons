function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AddMoneyCircleIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "add, money, circle",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 18.8c-.5 0-.9-.4-.9-.9v-.6h-.6c-1.32 0-2.4-1.08-2.4-2.4 0-.5.4-.9.9-.9s.9.4.9.9c0 .33.27.6.6.6h3c.33 0 .6-.27.6-.6v-.5c0-.33-.27-.6-.6-.6h-3c-1.32 0-2.4-1.08-2.4-2.4v-.5c0-1.32 1.08-2.4 2.4-2.4h.6v-.6c0-.5.4-.9.9-.9s.9.4.9.9v.6h.6c1.32 0 2.4 1.08 2.4 2.4 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.33-.27-.6-.6-.6h-3c-.33 0-.6.27-.6.6v.5c0 .33.27.6.6.6h3c1.32 0 2.4 1.08 2.4 2.4v.5c0 1.32-1.08 2.4-2.4 2.4h-.6v.6c0 .5-.4.9-.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 22.8c-5.46 0-9.9-4.44-9.9-9.9S5.44 3 10.9 3a10 10 0 0 1 1.1.06c.49.06.85.5.79.99-.06.49-.49.85-.99.79-.3-.03-.6-.05-.9-.05-4.47.01-8.1 3.64-8.1 8.11 0 4.47 3.63 8.1 8.1 8.1a8.104 8.104 0 0 0 8.05-9c-.05-.49.3-.94.8-.99.48-.06.94.3.99.8.04.36.06.73.06 1.1 0 5.46-4.44 9.9-9.9 9.9v-.01Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.4 9.8c-.5 0-.9-.4-.9-.9V6.3h-2.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.6V1.9c0-.5.4-.9.9-.9s.9.4.9.9v2.6h2.6c.5 0 .9.4.9.9s-.4.9-.9.9h-2.6v2.6c0 .5-.4.9-.9.9Z"
}));
});
export default AddMoneyCircleIcon;