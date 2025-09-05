function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MoneyIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "money",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.902 7.507a.9.9 0 0 0-1.8 0v.33c-.457.11-.878.304-1.231.57-.578.433-1.02 1.1-1.02 1.913 0 .812.442 1.48 1.02 1.913.577.433 1.333.674 2.13.674.446 0 .815.137 1.052.314.236.178.299.354.299.474 0 .119-.063.295-.3.473-.236.178-.605.314-1.05.314-.737 0-1.188-.354-1.308-.608a.9.9 0 1 0-1.629.767c.374.793 1.154 1.32 2.037 1.534v.332a.9.9 0 0 0 1.8 0v-.33c.456-.11.877-.304 1.23-.57.578-.432 1.02-1.1 1.02-1.912 0-.813-.442-1.48-1.02-1.914-.577-.433-1.333-.674-2.13-.674-.446 0-.815-.136-1.051-.314-.237-.178-.3-.354-.3-.473 0-.12.063-.296.3-.474.236-.177.605-.314 1.05-.314.737 0 1.188.354 1.308.609a.9.9 0 0 0 1.629-.767c-.374-.794-1.154-1.322-2.036-1.535v-.332Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12c0 6.02 4.88 10.9 10.9 10.9 6.02 0 10.9-4.88 10.9-10.9 0-6.02-4.88-10.9-10.9-10.9ZM2.9 12a9.1 9.1 0 1 1 18.2 0 9.1 9.1 0 0 1-18.2 0Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default MoneyIcon;