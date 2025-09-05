function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckboxFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "checkbox, fill",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.932 1.6h.135c2.182 0 3.911 0 5.265.182 1.393.187 2.522.582 3.413 1.473.89.89 1.285 2.02 1.473 3.413.182 1.353.182 3.083.182 5.264v.136c0 2.181 0 3.91-.182 5.264-.188 1.393-.582 2.522-1.473 3.413-.89.89-2.02 1.286-3.413 1.473-1.354.182-3.083.182-5.265.182h-.135c-2.182 0-3.91 0-5.264-.182-1.394-.187-2.523-.582-3.414-1.473-.89-.89-1.285-2.02-1.472-3.413-.182-1.354-.182-3.083-.182-5.264v-.136c0-2.181 0-3.91.182-5.264.187-1.393.582-2.522 1.472-3.413.891-.89 2.02-1.286 3.414-1.473C8.02 1.6 9.75 1.6 11.932 1.6Zm4.731 8.008a.9.9 0 1 0-1.327-1.216l-4.865 5.307-1.835-1.835a.9.9 0 1 0-1.273 1.272l2.5 2.5a.9.9 0 0 0 1.3-.028l5.5-6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckboxFillIcon;