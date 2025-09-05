function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UploadIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "upload",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.89 14.8h.01-.02.01Zm-.89-.9c0 .497.395.895.89.9a.896.896 0 0 0 .89-.9V5.86c.08.097.154.191.219.274l.131.166.131.163c.193.24.356.444.48.567.34.36.91.37 1.27.02a.89.89 0 0 0 .02-1.27 4.523 4.523 0 0 1-.31-.372l-.17-.218c-1.03-1.31-1.78-2.18-2.66-2.18-.88 0-1.62.86-2.66 2.18l-.172.218a4.529 4.529 0 0 1-.309.372.89.89 0 0 0 .02 1.27c.35.35.92.34 1.27-.02.124-.123.287-.327.48-.567l.13-.163c.09-.12.21-.27.35-.44v8.04Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.68 20.8h2.44c2.83 0 4.39 0 5.66-.9 1.27-.9 1.79-2.37 2.73-5.04l.23-.66a.907.907 0 0 0-.55-1.15.899.899 0 0 0-1.15.55l-.24.67c-.84 2.39-1.27 3.59-2.07 4.16-.8.57-2.08.57-4.62.57h-2.44c-2.54 0-3.81 0-4.62-.57-.793-.565-1.213-1.75-2.049-4.11l-.02-.06-.23-.66a.899.899 0 0 0-1.15-.55c-.47.17-.72.68-.55 1.15l.24.67c.94 2.66 1.46 4.13 2.73 5.03 1.27.9 2.83.9 5.66.9Z"
})));
export default UploadIcon;