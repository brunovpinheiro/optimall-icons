function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RemoveCircleIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "remove, circle",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.09961C18.0199 1.09961 22.9004 5.98009 22.9004 12C22.9004 18.0199 18.0199 22.9004 12 22.9004C5.98009 22.9004 1.09961 18.0199 1.09961 12C1.09961 5.98009 5.98009 1.09961 12 1.09961ZM12 2.90039C6.97421 2.90039 2.90039 6.97421 2.90039 12C2.90039 17.0257 6.97421 21.0996 12 21.0996C17.0257 21.0996 21.0996 17.0257 21.0996 12C21.0996 6.97421 17.0257 2.90039 12 2.90039ZM16.0918 11.1045C16.5457 11.1505 16.9004 11.5339 16.9004 12C16.9004 12.4661 16.5457 12.8495 16.0918 12.8955L16 12.9004H8C7.50294 12.9004 7.09961 12.4971 7.09961 12C7.09961 11.5029 7.50294 11.0996 8 11.0996H16L16.0918 11.1045Z",
  fill: "currentColor"
})));
export default RemoveCircleIcon;