function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const Female1Icon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "female 1",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.156 8.906C20.156 4.41 16.497.75 12 .75c-4.497 0-8.156 3.66-8.156 8.156 0 4.148 3.112 7.583 7.125 8.091v1.472H9.28a1.031 1.031 0 1 0 0 2.062h1.688v1.688a1.031 1.031 0 1 0 2.062 0V20.53h1.688a1.031 1.031 0 1 0 0-2.062H13.03v-1.472c4.013-.508 7.125-3.943 7.125-8.09Zm-14.25 0A6.1 6.1 0 0 1 12 2.812a6.1 6.1 0 0 1 6.094 6.094A6.1 6.1 0 0 1 12 15a6.1 6.1 0 0 1-6.094-6.094Z"
}));
});
export default Female1Icon;