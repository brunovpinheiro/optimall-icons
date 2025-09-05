function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ComputerIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "computer",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21.82 3.3a5.42 5.42 0 0 0-1.33-1.33c-1.4-.98-3.13-.98-6.6-.98h-4C6.44 1 4.7 1 3.3 1.98c-.52.36-.96.81-1.33 1.33C.99 4.7.99 6.44.99 9.91c0 3.47 0 5.2.98 6.6.36.52.81.96 1.33 1.33 1.33.93 2.99.97 6.15.98.12.77-.03 1.58-.45 2.14l-.04.06H6.91c-.5 0-.9.4-.9.9s.4.9.9.9h10c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.05l-.04-.06c-.42-.55-.57-1.37-.45-2.14 3.16 0 4.82-.04 6.15-.98.52-.36.96-.81 1.33-1.33.98-1.39.98-3.13.98-6.6 0-3.47 0-5.2-.98-6.6l-.03-.01ZM10.99 21c.26-.68.35-1.45.28-2.2h1.26c-.07.75.03 1.52.28 2.2h-1.82Zm9.36-5.54c-.24.34-.54.64-.88.88-.93.65-2.48.65-5.56.65h-4c-3.09 0-4.63 0-5.57-.65-.34-.24-.64-.54-.88-.88-.65-.93-.65-2.48-.65-5.56 0-3.08 0-4.64.65-5.56.24-.35.54-.64.88-.88.93-.65 2.48-.65 5.56-.65h4c3.09 0 4.63 0 5.56.65.35.24.64.54.88.88.65.93.65 2.48.65 5.56 0 3.08 0 4.63-.65 5.56h.01Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.9 14h-2c-.5 0-.9.4-.9.9s.4.9.9.9h2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z"
})));
export default ComputerIcon;