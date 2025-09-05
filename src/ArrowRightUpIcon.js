function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowRightUpIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, right, up",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.616 13.063v-.005l.001-.013.004-.05a30.281 30.281 0 0 0 .057-.845c.032-.55.065-1.294.071-2.068.006-.77-.014-1.59-.095-2.283a6.065 6.065 0 0 0-.184-.973c-.078-.27-.208-.601-.451-.845-.244-.243-.575-.373-.845-.451a6.06 6.06 0 0 0-.973-.183c-.694-.081-1.514-.102-2.283-.096a42.627 42.627 0 0 0-2.913.128l-.05.004h-.013l-.005.001a.75.75 0 0 0 .126 1.495h.003l.011-.001.046-.004a28.455 28.455 0 0 1 .814-.055c.534-.03 1.251-.062 1.993-.068.745-.006 1.494.015 2.097.085l.068.009L5.47 17.47a.75.75 0 1 0 1.06 1.06L17.155 7.905l.009.068c.07.603.091 1.352.085 2.097a41.023 41.023 0 0 1-.11 2.632l-.013.176-.004.045v.013a.75.75 0 0 0 1.494.127ZM11 6.132l-.063-.748.063.748ZM17.868 13l.748.063-.748-.063Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ArrowRightUpIcon;