function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AddPiIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "add, pi",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 3.4a2.1 2.1 0 0 0-2.1 2.1v10c0 1.16.94 2.1 2.1 2.1h14a2.1 2.1 0 0 0 2.1-2.1v-3a.9.9 0 0 1 1.8 0v3a3.9 3.9 0 0 1-3.9 3.9h-6.1v2.1a.9.9 0 1 1-1.8 0v-2.1H5a3.9 3.9 0 0 1-3.9-3.9v-10A3.9 3.9 0 0 1 5 1.6h6a.9.9 0 1 1 0 1.8H5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.9 2.5a.9.9 0 1 0-1.8 0v3.1H14a.9.9 0 0 0 0 1.8h3.1v3.1a.9.9 0 0 0 1.8 0V7.4H22a.9.9 0 1 0 0-1.8h-3.1V2.5Z"
}));
});
export default AddPiIcon;