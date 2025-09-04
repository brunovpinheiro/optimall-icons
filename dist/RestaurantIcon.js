function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RestaurantIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "restaurant",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M6.433 17.301a.9.9 0 0 1 1.204 1.335l-3 3.001a.9.9 0 0 1-1.274-1.273l3.001-3.001z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M1.655 2.169a.9.9 0 0 1 .982.194l18 18 .061.068a.901.901 0 0 1-1.266 1.267l-.069-.062L12 14.273l-2.363 2.363a.9.9 0 0 1-1.274 0L5.606 13.88A15.4 15.4 0 0 1 1.1 2.999a.9.9 0 0 1 .555-.83m1.456 3.215a13.6 13.6 0 0 0 3.768 7.222l2.12 2.12L10.727 13z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M17.432 2.302a.9.9 0 0 1 1.204 1.335l-3 3c-.596.596-.73.747-.793.875a1.1 1.1 0 0 0 0 .977l.066.107c.092.124.278.319.719.76l.009.008.008.009c.589.588.738.722.866.785.308.152.67.152.977 0 .128-.064.279-.198.875-.794l3-3a.9.9 0 0 1 1.273 1.273l-3.354 3.354c-.34.335-.65.61-.995.78a2.9 2.9 0 0 1-2.575 0 3.2 3.2 0 0 1-.704-.506l-.371.372a.9.9 0 0 1-1.274-1.273l.371-.372a3.2 3.2 0 0 1-.505-.703 2.9 2.9 0 0 1 0-2.576c.228-.46.64-.855 1.134-1.35l3-3z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M19.363 4.363a.901.901 0 0 1 1.274 1.273l-3 3a.9.9 0 0 1-1.274-1.273z"
})));
export default RestaurantIcon;