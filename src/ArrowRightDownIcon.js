function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowRightDownIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  size = 24,
  width,
  height,
  ...props
}, ref) => {
  const iconSize = width || height || size;
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    className: className,
    "aria-label": ariaLabel || "arrow, right, down",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.53 5.47a.75.75 0 0 0-1.06 1.06l10.625 10.625a9.043 9.043 0 0 1-.068.009c-.603.07-1.352.09-2.097.085a41.169 41.169 0 0 1-2.807-.123l-.046-.004h-.014a.75.75 0 1 0-.126 1.494h.005l.013.001.05.004a30.126 30.126 0 0 0 .846.057c.549.032 1.293.065 2.067.071.77.006 1.59-.014 2.283-.095.346-.04.682-.099.973-.184.27-.078.601-.208.845-.451.243-.244.373-.575.451-.845.085-.291.143-.627.184-.973.08-.694.101-1.514.095-2.283a42.672 42.672 0 0 0-.128-2.913l-.004-.05v-.013l-.001-.005-.747.063.747-.063a.75.75 0 1 0-1.495.127l.001.013.004.045.013.176a42.11 42.11 0 0 1 .11 2.632c.006.745-.015 1.494-.085 2.097a5.745 5.745 0 0 1-.009.068M11 17.869l-.063.747.063-.747Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default ArrowRightDownIcon;