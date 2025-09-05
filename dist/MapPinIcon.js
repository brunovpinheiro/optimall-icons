function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MapPinIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "map, pin",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.49995 10.9C7.49995 13.33 9.46995 15.3 11.9 15.3C14.33 15.3 16.3 13.33 16.3 10.9C16.3 8.47 14.33 6.5 11.9 6.5C9.46995 6.5 7.49995 8.47 7.49995 10.9ZM9.29995 10.9C9.29995 9.47 10.47 8.3 11.9 8.3C13.33 8.3 14.5 9.47 14.5 10.9C14.5 12.33 13.33 13.5 11.9 13.5C10.47 13.5 9.29995 12.33 9.29995 10.9Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.66995 21.92C10.27 22.49 11.06 22.8 11.9 22.8V22.81C12.73 22.81 13.53 22.49 14.13 21.93L15.05 21.07C18.9 17.53 23.69 13.11 21.04 6.93C19.53 3.38 15.85 1 11.9 1C7.94995 1 4.27995 3.38 2.75995 6.93C0.133283 13.0822 4.86793 17.4689 8.67547 20.9966L8.68995 21.01C9.00051 21.2923 9.31106 21.5835 9.61328 21.8669L9.66995 21.92ZM4.40995 7.63C5.64995 4.74 8.65995 2.8 11.9 2.8L11.89 2.81C15.13 2.81 18.14 4.75 19.38 7.64C21.5271 12.6434 17.6203 16.2505 13.8449 19.7362L12.9 20.61C12.37 21.11 11.43 21.11 10.9 20.61L10.8399 20.5537C10.5387 20.2713 10.2287 19.9806 9.90995 19.69L9.90823 19.6884C6.14877 16.2089 2.27028 12.6192 4.40995 7.63Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default MapPinIcon;