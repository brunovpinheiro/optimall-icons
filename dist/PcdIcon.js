function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const PcdIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "pcd",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.5371 8.22852C15.9633 7.973 16.5158 8.11099 16.7715 8.53711C17.027 8.96321 16.8888 9.5157 16.4629 9.77148C15.733 10.2095 14.8578 10.5327 13.9004 10.7188V13.8906L14.873 17.7812L14.8906 17.8721C14.956 18.3233 14.6704 18.7597 14.2188 18.873C13.7667 18.9861 13.3082 18.7357 13.1533 18.3066L13.127 18.2188L12.2969 14.9004H11.7031L10.873 18.2188C10.7523 18.7006 10.2632 18.9934 9.78125 18.873C9.29931 18.7523 9.00644 18.2633 9.12695 17.7812L10.0996 13.8906V10.7197C9.23952 10.5528 8.44619 10.2747 7.76465 9.90234L7.53711 9.77148L7.45996 9.7207C7.09465 9.44765 6.9888 8.93663 7.22852 8.53711C7.4683 8.13769 7.96905 7.99067 8.38184 8.18457L8.46289 8.22852L8.63086 8.32422C9.48988 8.79268 10.6687 9.09961 12 9.09961C13.4202 9.09955 14.667 8.7506 15.5371 8.22852Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.1689 5.1084C13.0008 5.193 13.6504 5.89576 13.6504 6.75C13.6504 7.66127 12.9112 8.40039 12 8.40039C11.1458 8.40039 10.443 7.75086 10.3584 6.91895L10.3496 6.75L10.3584 6.58105C10.443 5.74914 11.1458 5.09961 12 5.09961L12.1689 5.1084Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.09961C18.0199 1.09961 22.9004 5.9801 22.9004 12C22.9004 18.0199 18.0199 22.9004 12 22.9004C5.9801 22.9004 1.09961 18.0199 1.09961 12C1.09961 5.9801 5.9801 1.09961 12 1.09961ZM12 2.90039C6.97421 2.90039 2.90039 6.97421 2.90039 12C2.90039 17.0258 6.97421 21.0996 12 21.0996C17.0258 21.0996 21.0996 17.0258 21.0996 12C21.0996 6.97421 17.0258 2.90039 12 2.90039Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default PcdIcon;