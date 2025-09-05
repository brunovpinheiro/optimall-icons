function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowTurnDownIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, turn, down",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 3.1a5.4 5.4 0 0 1 5.4 5.4v9.654a17.4 17.4 0 0 0 .217-.244 25.115 25.115 0 0 0 1.069-1.323l.067-.09.017-.024.004-.005.001-.001.059-.072a.9.9 0 0 1 1.441 1.062l-.05.077-.001.001-.001.002-.006.007-.02.027-.075.1a29.617 29.617 0 0 1-1.146 1.419 12.29 12.29 0 0 1-1.078 1.116c-.18.16-.377.314-.578.436a1.681 1.681 0 0 1-.82.258l-.129-.006a1.704 1.704 0 0 1-.691-.252 4.083 4.083 0 0 1-.578-.436 12.29 12.29 0 0 1-1.078-1.116 27.093 27.093 0 0 1-1.146-1.42 2.721 2.721 0 0 1-.074-.099l-.02-.027-.007-.007v-.002h-.002l-.05-.078a.9.9 0 0 1 1.441-1.063l.059.072v.002l.005.005.017.023c.015.02.038.052.068.09a27.75 27.75 0 0 0 1.285 1.57V8.5a3.6 3.6 0 1 0-7.2 0V20a.9.9 0 0 1-1.8 0V8.5a5.4 5.4 0 0 1 5.4-5.4Z"
})));
export default ArrowTurnDownIcon;