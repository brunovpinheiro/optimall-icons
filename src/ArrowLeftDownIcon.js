function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowLeftDownIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, left, down",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.636 6.636a.9.9 0 1 0-1.273-1.272L6.96 15.767a19.507 19.507 0 0 1-.06-1.836 40.974 40.974 0 0 1 .123-2.797l.004-.045v-.01l.001-.004a.9.9 0 1 0-1.794-.15v.005l-.001.013-.004.05a30.379 30.379 0 0 0-.057.849c-.032.55-.065 1.297-.071 2.075-.006.771.014 1.599.096 2.301.041.35.1.695.188.998.081.277.219.638.49.909.27.27.632.409.908.49.303.088.648.147.998.187.703.082 1.53.103 2.302.097a42.784 42.784 0 0 0 2.924-.128l.05-.004.013-.001h.005L13 17.867l.075.897a.9.9 0 1 0-.151-1.793h-.014l-.045.004a29.872 29.872 0 0 1-.81.055 40.92 40.92 0 0 1-1.986.068 19.53 19.53 0 0 1-1.836-.06M6.13 11l-.897-.075.897.075Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ArrowLeftDownIcon;