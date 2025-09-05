function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LoginIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "login",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.598 2.25c-5.67 0-10.35 4.32-10.35 9.75s4.68 9.75 10.35 9.75a11.1 11.1 0 0 0 1.502-.102l-.204-1.486a9.56 9.56 0 0 1-1.298.088c-4.934 0-8.85-3.738-8.85-8.25 0-4.511 3.916-8.25 8.85-8.25.441 0 .875.03 1.298.088l.204-1.486a11.09 11.09 0 0 0-1.502-.102Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m14.529 9.53-1.06-1.06L9.937 12l3.53 3.53 1.06-1.06-1.719-1.72h8.19v-1.5h-8.19l1.72-1.72Z"
}));
});
export default LoginIcon;