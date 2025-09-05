function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "alert",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.8998 17.3C11.3998 17.3 10.9998 16.9 10.9998 16.4C10.9998 15.9 11.3998 15.5 11.8998 15.5C12.3998 15.5 12.7998 15.9 12.7998 16.4C12.7998 16.9 12.3998 17.3 11.8998 17.3Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9998 13.4C10.9998 13.9 11.3998 14.3 11.8998 14.3C12.3998 14.3 12.7998 13.9 12.7998 13.4V9.4C12.7998 8.9 12.3998 8.5 11.8998 8.5C11.3998 8.5 10.9998 8.9 10.9998 9.4V13.4Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.8998 22.8C6.84977 22.8 4.30978 22.8 2.75978 21.37C1.89978 20.58 1.31978 19.56 1.08978 18.41C0.659778 16.34 1.91978 14.1 4.44978 9.64C6.95978 5.18 8.22978 2.93 10.2198 2.27C11.3198 1.9 12.4898 1.9 13.5898 2.27C15.5702 2.92683 16.8276 5.1485 19.3334 9.57568L19.3902 9.67618C21.8966 14.1121 23.1586 16.3456 22.7298 18.41C22.4898 19.56 21.9098 20.58 21.0598 21.37C19.5098 22.8 16.9698 22.8 11.9198 22.8H11.8998ZM11.8998 3.8C11.5198 3.8 11.1498 3.86 10.7798 3.98C9.4635 4.41546 8.25496 6.54542 6.06846 10.399L5.99978 10.52C3.76978 14.46 2.54978 16.63 2.83978 18.04C2.99978 18.82 3.38978 19.51 3.96978 20.04C5.00978 20.99 7.44977 20.99 11.8997 20.99C16.3497 20.99 18.7898 20.99 19.8298 20.04C20.4098 19.51 20.7998 18.82 20.9598 18.04C21.2498 16.63 20.0298 14.46 17.7998 10.52C15.5798 6.58 14.3498 4.41 13.0198 3.97C12.6498 3.85 12.2798 3.79 11.8998 3.79V3.8Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default AlertIcon;