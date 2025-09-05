function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TargetIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "target",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.996 10.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5h-.01Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.1C5.98 1.1 1.1 5.98 1.1 12c0 6.02 4.88 10.9 10.9 10.9 6.02 0 10.9-4.88 10.9-10.9 0-6.02-4.88-10.9-10.9-10.9ZM2.944 12.9H6a.9.9 0 1 0 0-1.8H2.944A9.103 9.103 0 0 1 11.1 2.944V6a.9.9 0 0 0 1.8 0V2.944a9.103 9.103 0 0 1 8.156 8.156H18a.9.9 0 0 0 0 1.8h3.056a9.103 9.103 0 0 1-8.156 8.156V18a.9.9 0 0 0-1.8 0v3.056A9.103 9.103 0 0 1 2.944 12.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default TargetIcon;