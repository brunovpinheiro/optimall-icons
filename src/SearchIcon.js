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
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 10.9c0 5.46 4.44 9.9 9.9 9.9a9.855 9.855 0 0 0 6.328-2.292l4.032 4.032a.935.935 0 0 0 .635.26h-.005.01-.005a.891.891 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-4.03-4.03a9.856 9.856 0 0 0 2.3-6.34c0-5.46-4.44-9.9-9.9-9.9S1 5.44 1 10.9Zm1.8 0c0-4.47 3.63-8.1 8.1-8.1S19 6.43 19 10.9 15.37 19 10.9 19s-8.1-3.63-8.1-8.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default SearchIcon;