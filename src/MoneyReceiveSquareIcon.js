function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MoneyReceiveSquareIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "money, receive, square",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.75 2.5a.75.75 0 0 1 .75-.75h11v1.5H3.25v17.5h17.5V10.5h1.5v11a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75v-19Zm9.5 5.834a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661 0 .703.382 1.283.886 1.66.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.345v.835h1.5v-.834a2.95 2.95 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661 0-.703-.382-1.283-.886-1.66-.504-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345V7.5h-1.5v.834Zm9.72-6.34-3.708 3.698V2.998h-1.5V8.25H21v-1.5h-2.674l3.704-3.695-1.06-1.062Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default MoneyReceiveSquareIcon;