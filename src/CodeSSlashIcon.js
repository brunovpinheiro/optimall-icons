function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CodeSSlashIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "code, s, slash",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.365 7.362a.9.9 0 0 1 1.273.003l1.84 1.85.037.038c.354.356.681.685.912.989.254.335.473.742.473 1.258s-.22.923-.473 1.258c-.23.304-.558.633-.912.989l-.037.037-1.84 1.85a.9.9 0 1 1-1.277-1.269l1.84-1.85c.405-.407.643-.649.792-.845a.81.81 0 0 0 .103-.162l.003-.008-.003-.008a.81.81 0 0 0-.103-.163c-.149-.195-.387-.437-.792-.844l-1.84-1.85a.9.9 0 0 1 .004-1.273Zm-8.731 0a.9.9 0 0 1 .004 1.273l-1.84 1.85c-.405.407-.643.649-.791.845a.805.805 0 0 0-.106.17l.002.008a.86.86 0 0 0 .104.163c.148.195.386.437.791.844l1.84 1.85a.9.9 0 1 1-1.277 1.27l-1.84-1.85-.037-.038c-.354-.357-.681-.685-.911-.989-.255-.335-.473-.742-.473-1.258s.218-.923.473-1.258c.23-.304.557-.632.911-.989l.038-.038 1.84-1.85a.9.9 0 0 1 1.272-.003Zm7.134-4.221a.9.9 0 0 1 .59 1.127l-5 16a.9.9 0 1 1-1.717-.536l5-16a.9.9 0 0 1 1.127-.591Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CodeSSlashIcon;