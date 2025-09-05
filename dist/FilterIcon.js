function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FilterIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "filter",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.69 21.8C10.46 21.8 10.23 21.75 10.02 21.66C9.43001 21.4 9.02001 20.83 8.94001 20.19C8.81001 19.09 8.55001 16.73 8.26001 13.24C8.26001 13.18 8.23001 13.14 8.22001 13.13C5.82001 11.34 4.09001 9.41 2.84001 7.93C2.38001 7.39 2.25001 6.94 2.18001 6.39C1.95001 4.66 1.82001 3.62 2.56001 2.8C3.29001 2 4.30001 2 6.13001 2H17.66C19.49 2 20.5 2 21.23 2.8C21.97 3.62 21.84 4.66 21.61 6.39C21.53 7.04 21.35 7.46 20.95 7.93C19.71 9.41 17.97 11.34 15.56 13.14C15.55 13.14 15.52 13.19 15.52 13.25C15.27 15.99 15.04 17.52 14.89 18.32C14.64 19.66 13.35 20.44 12.31 21.07C12.06 21.22 11.83 21.36 11.64 21.5C11.35 21.7 11.02 21.81 10.68 21.81L10.69 21.8ZM9.29001 11.69C9.73001 12.02 10 12.53 10.05 13.09C10.33 16.51 10.59 18.84 10.72 19.94C10.92 19.81 11.15 19.67 11.38 19.52C12.07 19.1 13.02 18.52 13.12 17.97C13.26 17.21 13.48 15.74 13.72 13.07C13.77 12.51 14.05 12 14.48 11.68C16.74 9.99 18.39 8.16 19.57 6.76C19.75 6.55 19.78 6.46 19.82 6.15C19.96 5.06 20.07 4.2 19.89 4C19.7 3.79 18.79 3.79 17.65 3.79H6.13001C4.99001 3.79 4.08001 3.79 3.89001 4C3.71001 4.2 3.82001 5.06 3.96001 6.15C4.00001 6.46 4.04001 6.55 4.21001 6.76C5.39001 8.16 7.04001 9.99 9.29001 11.68V11.69Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FilterIcon;