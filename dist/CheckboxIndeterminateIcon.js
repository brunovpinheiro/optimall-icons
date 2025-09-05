function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckboxIndeterminateIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "checkbox, indeterminate",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16.092 11.104a.9.9 0 0 1 0 1.792L16 12.9H8a.9.9 0 0 1 0-1.8h8l.092.005Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.6c2.214 0 3.965-.002 5.332.182 1.393.188 2.522.582 3.413 1.473l.161.17c.778.863 1.136 1.937 1.312 3.243.184 1.367.182 3.118.182 5.332s.002 3.965-.182 5.332c-.176 1.306-.534 2.38-1.312 3.243l-.16.17c-.892.89-2.02 1.285-3.414 1.473-1.367.184-3.118.182-5.332.182s-3.965.002-5.332-.182c-1.306-.176-2.38-.534-3.243-1.312l-.17-.16c-.89-.892-1.285-2.02-1.473-3.414C1.598 15.965 1.6 14.214 1.6 12s-.002-3.965.182-5.332c.188-1.393.582-2.522 1.473-3.413l.17-.161c.863-.778 1.937-1.136 3.243-1.312C8.035 1.598 9.786 1.6 12 1.6Zm0 1.8c-2.264 0-3.872.002-5.092.165-1.044.14-1.7.39-2.183.785l-.198.177c-.5.5-.801 1.188-.962 2.381C3.402 8.128 3.4 9.736 3.4 12s.002 3.872.165 5.092c.16 1.194.462 1.88.962 2.38l.198.178c.483.396 1.139.644 2.183.785 1.22.164 2.828.165 5.092.165s3.872-.002 5.092-.165c1.194-.16 1.88-.462 2.38-.962l.178-.198c.396-.483.644-1.139.785-2.183.164-1.22.165-2.828.165-5.092s-.002-3.872-.165-5.092c-.14-1.044-.39-1.7-.785-2.183l-.177-.198c-.5-.5-1.188-.801-2.381-.962C15.872 3.402 14.264 3.4 12 3.4Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CheckboxIndeterminateIcon;