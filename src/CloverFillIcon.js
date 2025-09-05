function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CloverFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "clover, fill",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m12.1 10.83 4.24-4.24c.4-.4.62-.93.62-1.49a2.112 2.112 0 0 0-3.6-1.49L12.1 4.87l-1.26-1.26c-.4-.4-.93-.62-1.49-.62a2.112 2.112 0 0 0-1.49 3.6l4.24 4.24Zm0 2.54-4.24 4.24c-.82.82-.82 2.16 0 2.98.82.82 2.15.82 2.98 0l1.26-1.26 1.26 1.26c.82.82 2.16.82 2.98 0 .82-.82.82-2.16 0-2.98l-4.24-4.24Zm7.22-1.27 1.26-1.26c.4-.4.62-.93.62-1.49a2.112 2.112 0 0 0-3.6-1.49l-4.24 4.24 4.24 4.24c.79.8 2.18.79 2.97 0 .4-.4.62-.93.62-1.49 0-.56-.22-1.09-.62-1.49l-1.26-1.26h.01ZM6.59 7.86c-.82-.82-2.16-.82-2.98 0-.82.82-.82 2.15 0 2.98l1.26 1.26-1.26 1.26c-.4.4-.62.93-.62 1.49 0 .56.22 1.09.62 1.49.79.79 2.18.79 2.98 0l4.24-4.24-4.24-4.24Z"
})));
export default CloverFillIcon;