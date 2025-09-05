function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CrmallIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "crmall",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4a1 1 0 0 1 1-1h10.044a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Zm0 7.147a1 1 0 0 1 1-1h13.618a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.706Zm5.824 7.147a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h3.824a1 1 0 0 0 1-1v-1.706Z"
})));
export default CrmallIcon;