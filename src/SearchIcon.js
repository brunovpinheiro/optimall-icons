function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const SearchIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "search",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 10.9C1 16.36 5.44 20.8 10.9 20.8C13.3047 20.8 15.5116 19.9388 17.2284 18.5084L21.26 22.54C21.4387 22.7088 21.6668 22.7987 21.8951 22.8L21.89 22.8H21.9L21.8951 22.8C22.1234 22.7988 22.3513 22.7187 22.53 22.54C22.88 22.19 22.88 21.62 22.53 21.27L18.4993 17.2393C19.9351 15.5209 20.8 13.3098 20.8 10.9C20.8 5.44 16.36 1 10.9 1C5.44 1 1 5.44 1 10.9ZM2.8 10.9C2.8 6.43 6.43 2.8 10.9 2.8C15.37 2.8 19 6.43 19 10.9C19 15.37 15.37 19 10.9 19C6.43 19 2.8 15.37 2.8 10.9Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default SearchIcon;