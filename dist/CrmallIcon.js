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
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 4C4 3.44772 4.44771 3 5 3H15.0441C15.5964 3 16.0441 3.44772 16.0441 4V5.70588C16.0441 6.25817 15.5964 6.70588 15.0441 6.70588H5C4.44772 6.70588 4 6.25817 4 5.70588V4Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 11.1471C4 10.5948 4.44771 10.1471 5 10.1471H18.6176C19.1699 10.1471 19.6176 10.5948 19.6176 11.1471V12.8529C19.6176 13.4052 19.1699 13.8529 18.6176 13.8529H5C4.44772 13.8529 4 13.4052 4 12.8529V11.1471Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.82353 18.2941C9.82353 17.7418 9.37581 17.2941 8.82353 17.2941H5C4.44772 17.2941 4 17.7418 4 18.2941V20C4 20.5523 4.44771 21 5 21H8.82353C9.37581 21 9.82353 20.5523 9.82353 20V18.2941Z",
  fill: "currentColor"
})));
export default CrmallIcon;