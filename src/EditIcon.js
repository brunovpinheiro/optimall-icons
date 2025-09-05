function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const EditIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "edit",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.008 2.733a1.9 1.9 0 0 1 2.543.13l1.586 1.586.13.145a1.9 1.9 0 0 1 0 2.398l-.13.145-7.902 7.9a2.904 2.904 0 0 1-1.158.71l-.19.053-3.461.866a.901.901 0 0 1-1.092-1.092l.865-3.462.055-.19a2.9 2.9 0 0 1 .708-1.157l7.901-7.902.145-.13Zm-6.773 9.304a1.102 1.102 0 0 0-.244.37l-.046.142-.502 2.007 2.008-.502.142-.046a1.1 1.1 0 0 0 .369-.243l5.472-5.472-1.728-1.727-5.47 5.471Zm7.934-7.923-.032.023-1.157 1.156 1.727 1.727 1.156-1.157.023-.033a.1.1 0 0 0 0-.075l-.023-.033-1.586-1.585a.1.1 0 0 0-.108-.023Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.307 18.793v-12a2.9 2.9 0 0 1 2.9-2.9h5.5l.092.004a.9.9 0 0 1 0 1.791l-.092.005h-5.5a1.1 1.1 0 0 0-1.1 1.1v12a1.1 1.1 0 0 0 1.1 1.1h12a1.1 1.1 0 0 0 1.1-1.1v-5.5a.9.9 0 0 1 1.8 0v5.5a2.9 2.9 0 0 1-2.9 2.9h-12a2.9 2.9 0 0 1-2.9-2.9Z"
}));
});
export default EditIcon;