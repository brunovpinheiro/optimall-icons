function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ReceiveMoneyIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "none",
  viewBox: "0 0 20 20",
  className: className,
  style: style,
  "aria-label": ariaLabel || "receive, money",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M1.249 12c0-5.937 4.813-10.75 10.75-10.75q1.104.002 2.15.215l-.3 1.47a9.25 9.25 0 1 0 7.214 7.214l1.471-.298A11 11 0 0 1 22.749 12c0 5.937-4.813 10.75-10.75 10.75S1.249 17.937 1.249 12m10-3.666a2.95 2.95 0 0 0-1.114.505c-.504.378-.886.958-.886 1.661s.382 1.283.886 1.66c.504.379 1.165.59 1.864.59.406 0 .744.124.964.29.22.164.286.335.286.46s-.066.296-.286.46c-.22.166-.558.29-.964.29-.668 0-1.09-.321-1.208-.57l-1.357.64c.33.7 1.026 1.165 1.815 1.345v.835h1.5v-.834a2.95 2.95 0 0 0 1.114-.505c.504-.378.886-.958.886-1.661s-.382-1.283-.886-1.66c-.503-.379-1.165-.59-1.864-.59-.406 0-.744-.124-.964-.29-.22-.164-.286-.335-.286-.46s.066-.296.286-.46c.22-.166.558-.29.964-.29.668 0 1.09.321 1.208.57l1.357-.64c-.33-.7-1.026-1.165-1.815-1.345V7.5h-1.5zm10.222-6.86-3.708 3.699V2.479h-1.5V7.73H21.5v-1.5h-2.674l3.704-3.694z",
  clipRule: "evenodd"
})));
export default ReceiveMoneyIcon;