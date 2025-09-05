function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const NotificationIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "notification",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.6a7.9 7.9 0 0 1 7.9 7.9v2.756c0 .556.221 1.09.615 1.484l.603.604a2.67 2.67 0 0 1-1.887 4.557h-2.923a4.402 4.402 0 0 1-8.616 0H4.77a2.67 2.67 0 0 1-1.887-4.557l.603-.604a2.1 2.1 0 0 0 .615-1.484V9.5A7.9 7.9 0 0 1 12 1.6ZM9.563 18.9a2.598 2.598 0 0 0 4.873 0H9.564ZM12 3.4a6.1 6.1 0 0 0-6.1 6.1v2.756a3.9 3.9 0 0 1-1.142 2.758l-.604.603A.87.87 0 0 0 4.77 17.1h14.46a.868.868 0 0 0 .615-1.484l-.604-.602a3.9 3.9 0 0 1-1.142-2.758V9.5A6.1 6.1 0 0 0 12 3.4Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default NotificationIcon;