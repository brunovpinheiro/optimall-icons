function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UniversityIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "university",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 11.1a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9Zm3 0a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9ZM11.4 16a.9.9 0 1 0-1.8 0v.5a.9.9 0 1 0 1.8 0V16Zm3 0a.9.9 0 1 0-1.8 0v.5a.9.9 0 0 0 1.8 0V16Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.9 5.882H16a.9.9 0 0 0 .9-.9c0-.75-.181-1.93-1.208-2.562a15.098 15.098 0 0 0-1.747-.935c-.334-.146-.713-.287-1.07-.35-.282-.049-.91-.118-1.367.342-.267.27-.35.587-.382.822-.027.198-.026.43-.026.634V7.1H6.5a.9.9 0 1 0 0 1.8h.1v3.2H2a.9.9 0 1 0 0 1.8h.1v7.2H2a.9.9 0 0 0 0 1.8h19.5a.9.9 0 0 0 .4-1.706V13.9h.1a.9.9 0 1 0 0-1.8h-4.6V8.9h.1a.9.9 0 1 0 0-1.8h-4.6V5.882ZM12.469 2.9h.026a.082.082 0 0 1-.026 0Zm.43.105c.098.035.207.078.326.13.562.246 1.173.603 1.523.819a.5.5 0 0 1 .137.13H12.9V3.003Zm0 18.096V20a.9.9 0 0 0-1.8 0v1.1H8.4V8.9h7.2v12.2h-2.7Zm-9-7.2h2.7v7.2H3.9v-7.2Zm13.5 0h2.7v7.2h-2.7v-7.2Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default UniversityIcon;