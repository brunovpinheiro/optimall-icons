function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowRightIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, right",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.533 6.275a.9.9 0 1 0-1.067 1.45l.003.002.01.007.039.03.154.115a44.59 44.59 0 0 1 2.238 1.806A19.65 19.65 0 0 1 18.4 11.1H4a.9.9 0 1 0 0 1.8h14.4c-.413.446-.942.939-1.49 1.415a42.624 42.624 0 0 1-2.392 1.922l-.04.03-.01.006-.002.002a.9.9 0 1 0 1.068 1.45v-.001l.016-.011.044-.033a32.348 32.348 0 0 0 .74-.566 44.404 44.404 0 0 0 1.756-1.44c.636-.553 1.295-1.167 1.803-1.741a6.16 6.16 0 0 0 .662-.875c.16-.265.342-.637.345-1.049v-.02c-.004-.41-.185-.782-.345-1.047a6.215 6.215 0 0 0-.662-.875c-.508-.574-1.167-1.188-1.803-1.74a44.399 44.399 0 0 0-2.496-2.007l-.044-.033-.012-.008-.005-.004ZM15 7l.533-.725L15 7Zm0 10 .534.724L15 17Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ArrowRightIcon;