function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MapPinIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "map, pin",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 10.9a4.4 4.4 0 1 0 8.8 0 4.4 4.4 0 0 0-8.8 0Zm1.8 0c0-1.43 1.17-2.6 2.6-2.6 1.43 0 2.6 1.17 2.6 2.6 0 1.43-1.17 2.6-2.6 2.6-1.43 0-2.6-1.17-2.6-2.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.67 21.92c.6.57 1.39.88 2.23.88v.01c.83 0 1.63-.32 2.23-.88l.92-.86c3.85-3.54 8.64-7.96 5.99-14.14C19.53 3.38 15.85 1 11.9 1S4.28 3.38 2.76 6.93C.133 13.082 4.868 17.469 8.675 20.997l.015.013c.31.282.621.573.923.857l.057.053ZM4.41 7.63C5.65 4.74 8.66 2.8 11.9 2.8l-.01.01c3.24 0 6.25 1.94 7.49 4.83 2.147 5.003-1.76 8.61-5.535 12.096l-.945.874c-.53.5-1.47.5-2 0l-.06-.056a84.044 84.044 0 0 0-.93-.864l-.002-.002C6.148 16.208 2.27 12.62 4.41 7.63Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default MapPinIcon;