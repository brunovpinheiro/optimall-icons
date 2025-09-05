function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "alert, fill",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.32365 3.80328C10.5216 1.73224 13.4774 1.73224 14.6753 3.80328L22.3205 17.0209C23.5208 19.096 22.0625 21.75 19.6447 21.75H4.35427C1.93644 21.75 0.478187 19.096 1.67844 17.0209L9.32365 3.80328ZM10.5 12.5C10.5 11.9477 10.9477 11.5 11.5 11.5H12C12.8284 11.5 13.5 12.1716 13.5 13V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5V13.5C10.9477 13.5 10.5 13.0523 10.5 12.5ZM12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 11.4477 10.5 12 10.5H12.009C12.5613 10.5 13.009 10.0523 13.009 9.5C13.009 8.94772 12.5613 8.5 12.009 8.5H12Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default AlertFillIcon;