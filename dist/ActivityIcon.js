function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ActivityIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "activity",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.35 16.8h.05c.34 0 .65-.19.8-.5l1.75-3.5h1.94c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.5c-.34 0-.65.2-.8.5l-1.08 2.15-2.28-6.07a.916.916 0 0 0-.8-.58.905.905 0 0 0-.85.5L7.83 11H5.89c-.5 0-.9.4-.9.9s.4.9.9.9h2.5c.34 0 .65-.2.8-.5l1.08-2.15 2.28 6.07c.13.33.44.56.8.58Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.58 20.22c1.58 1.58 3.83 1.58 8.32 1.58s6.74 0 8.32-1.58 1.58-3.83 1.58-8.32 0-6.74-1.58-8.32S16.38 2 11.9 2 5.16 2 3.58 3.58 2 7.41 2 11.9s0 6.74 1.58 8.32ZM4.86 4.85C5.91 3.8 7.91 3.8 11.9 3.8v-.01h.11c3.907 0 5.89 0 6.93 1.05 1.05 1.06 1.05 3.06 1.05 7.05 0 3.99 0 5.99-1.05 7.05-1.05 1.05-3.06 1.05-7.04 1.05s-5.99 0-7.04-1.05c-1.05-1.05-1.05-3.05-1.05-7.04s0-6 1.05-7.05Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ActivityIcon;