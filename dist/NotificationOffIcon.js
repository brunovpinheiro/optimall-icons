function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const NotificationOffIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "notification, off",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.363 1.363a.9.9 0 0 1 1.205-.061l.069.061 20 20 .061.069a.901.901 0 0 1-1.267 1.266l-.068-.061-3.736-3.736h-1.32a4.402 4.402 0 0 1-8.616 0H4.768a2.67 2.67 0 0 1-1.886-4.557l.603-.604a2.1 2.1 0 0 0 .614-1.484V9.5c0-1.205.27-2.35.754-3.373l-3.49-3.49-.061-.068a.9.9 0 0 1 .061-1.206Zm8.2 17.538a2.598 2.598 0 0 0 4.873 0H9.563ZM6.233 7.507A6.09 6.09 0 0 0 5.9 9.5v2.756a3.901 3.901 0 0 1-1.142 2.758l-.604.603a.87.87 0 0 0 .614 1.483h11.058L6.233 7.507Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.6a7.9 7.9 0 0 1 7.9 7.9v2.756c0 .557.221 1.09.615 1.484l.603.604c.5.5.782 1.18.782 1.888a.9.9 0 0 1-1.8 0 .871.871 0 0 0-.254-.616l-.604-.602a3.9 3.9 0 0 1-1.143-2.758V9.5A6.1 6.1 0 0 0 8.39 4.582l-.077.051a.9.9 0 0 1-.989-1.501l.25-.176A7.868 7.868 0 0 1 12 1.6Z"
})));
export default NotificationOffIcon;