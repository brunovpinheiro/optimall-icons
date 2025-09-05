function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ReceiveMoneyIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "receive, money",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.249 12c0-5.937 4.813-10.75 10.75-10.75.735 0 1.454.074 2.15.215l-.3 1.47a9.25 9.25 0 1 0 7.214 7.214l1.471-.298A10.8 10.8 0 0 1 22.749 12c0 5.937-4.813 10.75-10.75 10.75S1.249 17.937 1.249 12Zm10-3.666a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661 0 .703.382 1.283.886 1.66.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.345v.835h1.5v-.834a2.948 2.948 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661 0-.703-.382-1.283-.886-1.66-.503-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345V7.5h-1.5v.834Zm10.222-6.86-3.708 3.699V2.479h-1.5V7.73H21.5v-1.5h-2.674l3.704-3.694-1.06-1.062Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ReceiveMoneyIcon;