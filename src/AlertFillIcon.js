function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AlertFillIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "alert, fill",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.324 3.803c1.198-2.07 4.153-2.07 5.351 0l7.645 13.218c1.2 2.075-.258 4.729-2.675 4.729H4.355c-2.419 0-3.877-2.654-2.677-4.73L9.324 3.804ZM10.5 12.5a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1 1 0 1 1-2 0v-4a1 1 0 0 1-1-1Zm1.5-4a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2H12Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default AlertFillIcon;