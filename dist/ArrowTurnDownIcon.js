function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowTurnDownIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "arrow, turn, down",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M10.5 3.1a5.4 5.4 0 0 1 5.4 5.4v9.654l.217-.244a25 25 0 0 0 1.069-1.323l.067-.09.017-.024.004-.005.001-.001.059-.072a.9.9 0 0 1 1.441 1.062l-.05.077-.001.001-.001.002-.006.007-.02.027-.075.1a30 30 0 0 1-1.146 1.419 12 12 0 0 1-1.078 1.116c-.18.16-.377.314-.578.436a1.7 1.7 0 0 1-.82.258l-.129-.006a1.7 1.7 0 0 1-.691-.252 4 4 0 0 1-.578-.436 12 12 0 0 1-1.078-1.116 27 27 0 0 1-1.146-1.42q-.048-.062-.074-.099l-.02-.027-.007-.007v-.002h-.002l-.05-.078a.9.9 0 0 1 1.441-1.062l.059.07v.003l.005.005.017.023.068.09a28 28 0 0 0 1.285 1.57V8.5a3.6 3.6 0 1 0-7.2 0V20a.9.9 0 0 1-1.8 0V8.5a5.4 5.4 0 0 1 5.4-5.4"
})));
export default ArrowTurnDownIcon;