function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const WhatsappIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "whatsapp",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12.002 1.248C6.064 1.248 1.25 6.062 1.25 12c0 1.901.415 3.561 1.289 5.113l-1.262 4.692a.75.75 0 0 0 .92.92l4.667-1.253c1.563.884 3.231 1.28 5.138 1.28 5.938 0 10.752-4.814 10.752-10.752S17.94 1.248 12.002 1.248M7 6.25a.75.75 0 0 0-.75.75c0 1.586.407 3.28 1.207 4.846l.004.007a10.94 10.94 0 0 0 3.752 4.196q.255.167.525.32l.022.012A10.7 10.7 0 0 0 17 17.75a.75.75 0 0 0 .75-.75v-2.619a.75.75 0 0 0-.589-.732l-3.265-.719a.75.75 0 0 0-.751.27l-1.204 1.532a9.4 9.4 0 0 1-2.782-2.915l1.665-.864a.75.75 0 0 0 .376-.873l-.949-3.288a.75.75 0 0 0-.72-.542z",
  clipRule: "evenodd"
})));
export default WhatsappIcon;