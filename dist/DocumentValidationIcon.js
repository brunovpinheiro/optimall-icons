function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const DocumentValidationIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "document, validation",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.88 9.32h-.05a.925.925 0 0 1-.76-.5c-.42-.84-.83-1.27-.84-1.27a.909.909 0 0 1 .01-1.27.9.9 0 0 1 1.27 0c.03.03.2.2.43.51.67-.84 1.64-1.87 2.64-2.22.47-.17.98.08 1.15.55.17.47-.08.98-.55 1.15-.77.27-1.95 1.7-2.54 2.63-.17.26-.45.42-.76.42Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.32 22.8c-2.21 0-4.54-.06-6.18-.15-3.12-.18-4.13-3.45-4.13-5C1 16.38 1 13.84 1 11.12V6.87c.01-4.96 3.37-5.59 4.4-5.66.01 0 1.98-.29 4.53-.18.5.02.88.44.86.94-.02.5-.48.88-.94.86-2.37-.1-4.24.17-4.26.17-1.31.1-2.79.84-2.79 3.87v4.26c-.01 2.71-.02 5.24 0 6.51 0 .66.41 3.1 2.43 3.22 3.06.18 8.58.22 11.1 0 .05 0 2.19-.15 2.44-2.26.26-2.24.24-3.87.23-4.48v-.19c0-.5.4-.9.9-.9s.9.4.9.9v.17c0 .65.03 2.36-.25 4.71-.31 2.68-2.62 3.77-4.1 3.85-1.22.11-3.14.15-5.15.15l.02-.01Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.9 12.82c-3.26 0-5.91-2.65-5.91-5.9 0-3.25 2.65-5.9 5.91-5.9 3.26 0 5.91 2.65 5.91 5.9 0 3.25-2.65 5.9-5.91 5.9Zm0-10c-2.26 0-4.1 1.84-4.1 4.1s1.84 4.1 4.1 4.1S21 9.18 21 6.92s-1.84-4.1-4.1-4.1Zm-6.02 11h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9Zm4 4h-8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h8c.5 0 .9.4.9.9s-.4.9-.9.9Z"
})));
export default DocumentValidationIcon;