function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowDownIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "arrow, down",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "m6.805 8.407.003.003.008.012.036.048.139.185a53.817 53.817 0 0 0 2.171 2.69c.64.737 1.308 1.449 1.896 1.968.295.26.546.452.747.573.095.057.159.087.195.101.036-.014.1-.044.195-.101.2-.12.452-.312.748-.573.587-.52 1.255-1.231 1.895-1.969a51.284 51.284 0 0 0 2.31-2.874l.036-.048.008-.012.003-.002m-10.39-.001a1 1 0 0 0-1.61 1.186L6 9l-.805.593.004.005.01.014.04.053c.033.046.083.112.146.196a55.013 55.013 0 0 0 2.257 2.795c.662.762 1.396 1.55 2.081 2.156.342.302.695.58 1.039.787.317.19.752.401 1.228.401s.911-.21 1.228-.401a7.383 7.383 0 0 0 1.039-.787c.685-.606 1.419-1.394 2.081-2.156a53.284 53.284 0 0 0 2.404-2.991l.039-.052.01-.014.004-.005L18 9l.805.594a1 1 0 1 0-1.61-1.186",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default ArrowDownIcon;