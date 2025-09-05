function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowMoveUpRightIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "arrow, move, up, right",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "m18.9 18.154.008-.008c.253-.299.5-.614.732-.909l.053-.068c.231-.294.474-.602.662-.796a.9.9 0 0 1 1.29 1.254 11.2 11.2 0 0 0-.536.654l-.057.072c-.228.29-.495.631-.77.956a8.82 8.82 0 0 1-.958.993c-.165.14-.352.28-.553.387-.194.104-.46.211-.77.211s-.577-.107-.771-.21a3.203 3.203 0 0 1-.553-.388 8.837 8.837 0 0 1-.957-.993c-.276-.325-.543-.666-.771-.956l-.057-.072a10.31 10.31 0 0 0-.537-.654.9.9 0 0 1 1.29-1.254c.19.194.432.502.663.796l.053.068c.232.295.48.61.732.909l.007.008c-.002-1.85-.018-3.34-.123-4.068-.68-4.713-4.036-8.328-8.215-9.054-.741-.129-1.646-.132-3.685-.132H3.001a.9.9 0 1 1 0-1.8h2.193c1.89 0 2.962 0 3.876.159 5.037.874 8.91 5.18 9.689 10.57.125.867.14 2.504.141 4.325Z"
}));
});
export default ArrowMoveUpRightIcon;