function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ShoppingCart02Icon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "shopping, cart, 02",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.966 1.1c1.34 0 2.534.888 2.869 2.191L6.301 5.1H22l.092.004a.9.9 0 0 1 0 1.792L22 6.9h-.194l-.548 4.928c-.15 1.351-.393 2.489-1.179 3.253-.687.669-1.649.915-2.786 1.041l-.498.048-8.21.683c-.056.111-.116.22-.188.325l-.096.133-.393.508c.388.34.684.78.848 1.28h5.488a2.9 2.9 0 1 1 0 1.801H8.756a2.9 2.9 0 1 1-2.57-3.794l.69-.894.07-.103c.128-.21.177-.453.144-.69l-.023-.118L4.092 3.739c-.123-.477-.576-.839-1.126-.839H2a.9.9 0 0 1 0-1.8h.966ZM6 18.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm11 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm-8.19-4.047.037.16v.013l7.798-.65.477-.047c1.024-.119 1.459-.301 1.702-.538.278-.27.493-.792.645-2.161l.525-4.73H6.764l2.047 7.952Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default ShoppingCart02Icon;