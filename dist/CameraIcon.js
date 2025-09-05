function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CameraIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "camera",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 9.5a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7c-1.43 0-2.6-1.17-2.6-2.6 0-1.43 1.17-2.6 2.6-2.6 1.43 0 2.6 1.17 2.6 2.6 0 1.43-1.17 2.6-2.6 2.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.81 5.9c0 .5-.4.9-.9.9-.49 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.99 6.53c-.21-.27-.45-.51-.72-.72-1.02-.78-1.91-.8-4.16-.8l-.37-.93-.005-.013c-.37-.938-.83-2.11-2.015-2.697-.71-.35-1.46-.35-2.82-.35-1.36 0-2.1 0-2.82.35-1.183.581-1.637 1.736-2.004 2.67l-.016.04-.37.93c-2.25 0-3.15.02-4.16.81-.27.21-.51.45-.72.72C1 7.59 1 8.95 1 11.41v4.5c0 2.98 0 4.62 1.14 5.76 1.14 1.14 2.78 1.14 5.76 1.14h8c2.98 0 4.62 0 5.76-1.14 1.14-1.14 1.14-2.78 1.14-5.76v-4.5c0-2.47 0-3.82-.81-4.87v-.01ZM21 15.9c0 2.75-.02 3.89-.61 4.48-.59.59-1.73.62-4.49.62h-8c-2.75 0-3.89-.02-4.48-.62-.59-.59-.62-1.73-.62-4.48v-4.5c0-2.07 0-3.21.43-3.78.11-.15.24-.28.39-.39.47-.36.87-.42 2.4-.43-.04.39.16.78.54.93.11.04.22.06.33.06.36 0 .7-.21.84-.57l1-2.52c.29-.76.57-1.47 1.14-1.75.34-.17.93-.17 2.02-.17 1.09 0 1.68 0 2.02.17.57.28.85 1 1.14 1.75l1 2.51c.18.46.71.69 1.17.5.38-.15.59-.54.54-.93 1.53.01 1.93.07 2.4.43.15.11.28.24.39.39.43.57.43 1.71.43 3.78v4.5l.02.02Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CameraIcon;