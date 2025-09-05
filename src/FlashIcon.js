function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FlashIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "flash",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m12.797 3.238-6.783 8.706A.067.067 0 0 0 6 11.98a.136.136 0 0 0 .001.035h3.303c1.16 0 1.899 1.02 1.899 2.015v6.732l6.782-8.706a.067.067 0 0 0 .014-.037.133.133 0 0 0 0-.034h-3.303c-1.16 0-1.9-1.02-1.9-2.015V3.238Zm.81-2.09c.707.3 1.19 1.015 1.19 1.87v6.967H18.1c.886 0 1.496.598 1.748 1.225.25.627.217 1.432-.284 2.075l-6.998 8.983c-.562.72-1.444.895-2.173.584-.707-.3-1.19-1.015-1.19-1.87v-6.967H5.9c-.886 0-1.496-.598-1.747-1.225a2.105 2.105 0 0 1 .284-2.075l6.998-8.983c.561-.72 1.444-.895 2.173-.585Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FlashIcon;