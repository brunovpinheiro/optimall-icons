function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ShareIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "share",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.82 9.289A3.896 3.896 0 0 0 17.9 10.8c2.15 0 3.9-1.75 3.9-3.9S20.05 3 17.9 3a3.905 3.905 0 0 0-3.826 4.657l-5.096 2.351A3.896 3.896 0 0 0 5.9 8.5C3.75 8.5 2 10.25 2 12.4s1.75 3.9 3.9 3.9a3.896 3.896 0 0 0 3.07-1.498l5.101 2.355a3.9 3.9 0 1 0 7.729.743c0-2.15-1.75-3.9-3.9-3.9a3.896 3.896 0 0 0-3.089 1.522l-5.088-2.348a3.9 3.9 0 0 0 .003-1.534l5.093-2.351ZM15.8 6.9a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm-12 5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0Zm14.1 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ShareIcon;