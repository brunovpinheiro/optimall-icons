function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FilterIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "filter",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M10.69 21.8c-.23 0-.46-.05-.67-.14-.59-.26-1-.83-1.08-1.47-.13-1.1-.39-3.46-.68-6.95 0-.06-.03-.1-.04-.11-2.4-1.79-4.13-3.72-5.38-5.2-.46-.54-.59-.99-.66-1.54-.23-1.73-.36-2.77.38-3.59C3.29 2 4.3 2 6.13 2h11.53c1.83 0 2.84 0 3.57.8.74.82.61 1.86.38 3.59-.08.65-.26 1.07-.66 1.54-1.24 1.48-2.98 3.41-5.39 5.21-.01 0-.04.05-.04.11-.25 2.74-.48 4.27-.63 5.07-.25 1.34-1.54 2.12-2.58 2.75-.25.15-.48.29-.67.43-.29.2-.62.31-.96.31zm-1.4-10.11c.44.33.71.84.76 1.4.28 3.42.54 5.75.67 6.85.2-.13.43-.27.66-.42.69-.42 1.64-1 1.74-1.55.14-.76.36-2.23.6-4.9.05-.56.33-1.07.76-1.39 2.26-1.69 3.91-3.52 5.09-4.92.18-.21.21-.3.25-.61.14-1.09.25-1.95.07-2.15-.19-.21-1.1-.21-2.24-.21H6.13c-1.14 0-2.05 0-2.24.21-.18.2-.07 1.06.07 2.15.04.31.08.4.25.61 1.18 1.4 2.83 3.23 5.08 4.92z",
  clipRule: "evenodd"
})));
export default FilterIcon;