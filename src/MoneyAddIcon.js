function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MoneyAddIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "money, add",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.317 4.68c1.218-.57 2.857-.93 4.683-.93 1.417 0 2.597.236 3.419.471.344.098.624.196.831.275V11.5h1.5V3.536l-.416-.207-.003-.002-.008-.004-.024-.011a7.5 7.5 0 0 0-.38-.164 11.328 11.328 0 0 0-1.088-.37A14.022 14.022 0 0 0 17 2.25c-2.008 0-3.87.395-5.317 1.07-1.218.57-2.857.93-4.683.93h-.018c-1.009 0-2.337 0-4.703-.946L1.25 2.892v16.616l.471.188C4.341 20.744 5.88 20.75 7 20.75c2.008 0 3.87-.395 5.317-1.07l-.634-1.36c-1.218.57-2.857.93-4.683.93h-.018c-.94 0-2.157 0-4.232-.765V5.075c2.01.67 3.284.675 4.25.675 2.008 0 3.87-.395 5.317-1.07ZM22 4c.335-.67.335-.671.334-.671L22 4Zm-2.75 17v-2.75H22v-1.5h-2.75V14h-1.5v2.75H15v1.5h2.75V21h1.5ZM12 9.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 11.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM6.5 13.509V11.5h-2v2.009h2Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default MoneyAddIcon;