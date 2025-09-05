function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CloseCircleIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "close, circle",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.895 15.8h.005-.01.005Zm-.635-.26a.935.935 0 0 0 .635.26.891.891 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-2.36-2.36 2.36-2.36a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-2.36 2.36-2.36-2.36a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l2.36 2.36-2.36 2.36a.9.9 0 0 0 0 1.27.9.9 0 0 0 1.27 0l2.36-2.36 2.36 2.36Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 11.9c0 6.01 4.89 10.9 10.9 10.9 6.01 0 10.9-4.89 10.9-10.9C22.8 5.89 17.91 1 11.9 1 5.89 1 1 5.89 1 11.9Zm1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default CloseCircleIcon;