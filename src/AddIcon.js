function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AddIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "add",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H11V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H13V4Z",
  fill: "currentColor"
})));
export default AddIcon;