function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const SaveMoneyDollarIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "save, money, dollar",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 8.9C6 4.54 9.54 1 13.9 1v.01c4.36 0 7.9 3.54 7.9 7.9 0 1.62-.49 3.18-1.42 4.51a.894.894 0 0 1-1.25.23c-.4-.28-.5-.84-.22-1.25A6.134 6.134 0 0 0 20 8.91c0-3.36-2.74-6.1-6.1-6.1-3.36 0-6.1 2.74-6.1 6.1 0 .91.2 1.79.59 2.61.21.45.02.99-.43 1.2-.45.21-.99.02-1.2-.43C6.26 11.22 6 10.08 6 8.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.9 4c-.5 0-.9.4-.9.9v.21c-1.17.31-2 1.2-2 2.29 0 1.35 1.27 2.4 2.9 2.4.67 0 1.1.35 1.1.6s-.43.6-1.1.6c-.55 0-.96-.25-1.07-.48a.903.903 0 0 0-1.2-.43c-.45.21-.64.75-.43 1.2.32.68.99 1.19 1.8 1.4v.21c0 .5.4.9.9.9s.9-.4.9-.9v-.21c1.17-.31 2-1.2 2-2.29 0-1.35-1.27-2.4-2.9-2.4-.67 0-1.1-.35-1.1-.6s.43-.6 1.1-.6c.55 0 .96.25 1.07.48.21.45.75.65 1.2.43.45-.21.64-.75.43-1.2-.32-.68-.99-1.19-1.8-1.4V4.9c0-.5-.4-.9-.9-.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m16.23 14.13-4.03 1.24c-.5-.61-1.27-.99-2.12-.99H9.04c-.16 0-.31-.04-.46-.1l-2.04-.99a2.78 2.78 0 0 0-1.24-.28H2.9c-.5 0-.9.4-.9.9s.4.9.9.9h2.39c.16 0 .32.04.46.1l2.04.99c.38.18.81.28 1.24.28h1.04c.28 0 .54.12.71.31l-1.73.48c-.25.07-.51.04-.74-.07l-2.18-1.06a.89.89 0 0 0-1.2.42c-.21.45-.03.99.42 1.2l2.18 1.05c.62.3 1.33.37 2 .18l2.54-.7c.42-.12.72-.5.73-.93l3.96-1.22c.44-.14.93.03 1.21.42.04.05.04.11.03.14 0 .03-.02.07-.07.1l-7.51 4.34c-.27.15-.57.19-.86.1l-6.39-1.9a.9.9 0 0 0-1.12.61.9.9 0 0 0 .61 1.12l6.39 1.9a2.904 2.904 0 0 0 2.28-.27l7.51-4.34a1.971 1.971 0 0 0 .6-2.86 2.881 2.881 0 0 0-3.2-1.09l-.01.02Z"
}));
});
export default SaveMoneyDollarIcon;