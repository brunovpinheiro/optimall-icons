function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TableIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "table",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20.7496 3.25001C19.0896 1.60001 16.7296 1.60001 11.9996 1.60001C7.26961 1.60001 4.90961 1.60001 3.24961 3.25001C1.58961 4.90001 1.59961 7.28001 1.59961 12C1.59961 16.72 1.59961 19.09 3.24961 20.75C4.89961 22.4 7.26961 22.4 11.9996 22.4C16.7296 22.4 19.0896 22.4 20.7496 20.75C22.3996 19.09 22.3996 16.72 22.3996 12C22.3996 7.28001 22.3996 4.91001 20.7496 3.25001ZM11.9996 3.40001C16.2196 3.40001 18.3396 3.40001 19.4696 4.53001C20.1796 5.24001 20.4396 6.34001 20.5396 8.10001H3.45961C3.55961 6.34001 3.81961 5.24001 4.52961 4.53001C5.65961 3.40001 7.77961 3.40001 11.9996 3.40001ZM20.5996 12C20.5996 12 20.5996 12.06 20.5996 12.1H12.8996V9.90001H20.5896C20.5896 10.54 20.5896 11.22 20.5896 12H20.5996ZM3.39961 12C3.39961 11.22 3.39961 10.54 3.39961 9.90001H11.0896V12.1H3.39961C3.39961 12.1 3.39961 12.04 3.39961 12ZM11.0996 13.9V16.1H3.46961C3.42961 15.46 3.40961 14.73 3.39961 13.9H11.0896H11.0996ZM12.8996 13.9H20.5896C20.5896 14.73 20.5596 15.46 20.5196 16.1H12.8896V13.9H12.8996ZM3.72961 17.9H11.0996V20.6C7.47961 20.6 5.56961 20.52 4.52961 19.47C4.13961 19.08 3.88961 18.57 3.72961 17.9ZM12.8996 20.6V17.9H20.2696C20.0996 18.57 19.8596 19.08 19.4696 19.47C18.4296 20.51 16.5096 20.59 12.8996 20.6Z",
  fill: "currentColor"
})));
export default TableIcon;