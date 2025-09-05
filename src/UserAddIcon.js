function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UserAddIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "user, add",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.4001 22.8H6.49013C4.89013 22.8 3.46013 22.15 1.99013 20.75C1.06013 19.86 0.950127 19 1.02013 18.44C1.23013 16.76 3.23013 15.63 4.56013 14.88C4.73013 14.78 4.89013 14.69 5.02013 14.61C7.26013 13.28 9.92013 12.75 12.5301 13.12C13.4601 13.25 14.3701 13.5 15.2401 13.85C15.7001 14.04 15.9201 14.56 15.7301 15.02C15.5401 15.48 15.0201 15.7 14.5601 15.51C13.8301 15.21 13.0601 15 12.2701 14.89C10.0701 14.58 7.82013 15.03 5.93013 16.15C5.78013 16.24 5.62013 16.33 5.43013 16.44C4.61013 16.91 2.89013 17.88 2.79013 18.66C2.76013 18.88 2.91013 19.15 3.22013 19.44C4.35013 20.52 5.35013 21 6.48013 21H12.3901C12.8901 21 13.2901 21.4 13.2901 21.9C13.2901 22.4 12.8901 22.8 12.3901 22.8H12.4001Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.9001 11.8C8.92013 11.8 6.50013 9.38 6.50013 6.4C6.50013 3.42 8.92013 1 11.9001 1C14.8801 1 17.3001 3.42 17.3001 6.4C17.3001 9.38 14.8801 11.8 11.9001 11.8ZM11.9001 2.8C9.92013 2.8 8.30013 4.42 8.30013 6.4C8.30013 8.38 9.92013 10 11.9001 10C13.8801 10 15.5001 8.38 15.5001 6.4C15.5001 4.42 13.8801 2.8 11.9001 2.8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.4001 22.8C17.9001 22.8 17.5001 22.4 17.5001 21.9V19.3H14.9001C14.4001 19.3 14.0001 18.9 14.0001 18.4C14.0001 17.9 14.4001 17.5 14.9001 17.5H17.5001V14.9C17.5001 14.4 17.9001 14 18.4001 14C18.9001 14 19.3001 14.4 19.3001 14.9V17.5H21.9001C22.4001 17.5 22.8001 17.9 22.8001 18.4C22.8001 18.9 22.4001 19.3 21.9001 19.3H19.3001V21.9C19.3001 22.4 18.9001 22.8 18.4001 22.8Z",
  fill: "currentColor"
})));
export default UserAddIcon;