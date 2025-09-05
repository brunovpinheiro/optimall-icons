function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const DragDropVerticalIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "drag, drop, vertical",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m8.007 16.5.153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3h.007Zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3H16Zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3h.007Zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3H16Zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 1 1 0-3h.007ZM16 4.5a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3H16Z"
})));
export default DragDropVerticalIcon;