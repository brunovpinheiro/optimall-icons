function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const WhatsappIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "whatsapp",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.002 1.248C6.064 1.248 1.25 6.062 1.25 12c0 1.901.415 3.561 1.288 5.113l-1.26 4.692a.75.75 0 0 0 .918.92l4.668-1.253c1.563.884 3.231 1.28 5.138 1.28 5.938 0 10.752-4.814 10.752-10.752 0-5.938-4.814-10.752-10.752-10.752ZM7 6.25a.75.75 0 0 0-.75.75c0 1.586.407 3.28 1.207 4.846l.004.007a10.938 10.938 0 0 0 3.752 4.196c.17.111.345.218.525.32l.022.012A10.727 10.727 0 0 0 17 17.75a.75.75 0 0 0 .75-.75v-2.619a.75.75 0 0 0-.589-.732l-3.265-.719a.75.75 0 0 0-.751.27l-1.204 1.532a9.382 9.382 0 0 1-2.782-2.915l1.665-.864a.75.75 0 0 0 .376-.873l-.949-3.288a.75.75 0 0 0-.72-.542H7Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default WhatsappIcon;