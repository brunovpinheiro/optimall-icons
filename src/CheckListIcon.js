function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CheckListIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "check, list",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.524 14.237a.9.9 0 0 1 .953 1.527c-.796.498-1.578 1.572-2.195 2.651a18.18 18.18 0 0 0-.886 1.776l-.046.11-.012.027-.002.006-.057.117a.9.9 0 0 1-1.507.078l-.07-.112c-.18-.345-.47-.664-.743-.91a4.796 4.796 0 0 0-.428-.345l-.022-.014-.003-.002h.003a.9.9 0 1 1 .983-1.507l-.277.425.277-.425v.001l.004.002.004.003.014.009.044.03a6.596 6.596 0 0 1 .608.487c.044.04.087.083.133.127.124-.242.265-.503.42-.775.633-1.108 1.6-2.534 2.805-3.286Zm13.567 2.868a.9.9 0 0 1 0 1.79l-.092.006H11a.901.901 0 0 1 0-1.801h10l.092.005Zm0-6a.9.9 0 0 1 0 1.79l-.092.006H11a.901.901 0 0 1 0-1.801h10l.092.005ZM7.524 3.237a.9.9 0 0 1 .953 1.527c-.796.498-1.578 1.572-2.195 2.651a18.169 18.169 0 0 0-.886 1.776l-.046.11-.012.027-.002.006-.057.118a.9.9 0 0 1-1.507.077l-.07-.112c-.18-.345-.47-.664-.743-.91a4.765 4.765 0 0 0-.45-.36l-.003-.001h.003a.9.9 0 1 1 .983-1.507l-.277.425.277-.425v.001l.004.001.004.004.014.009a3.966 3.966 0 0 1 .19.135c.119.09.282.218.462.381.044.04.087.084.133.128.124-.242.265-.504.42-.775.633-1.108 1.6-2.534 2.805-3.286Zm13.567 1.868a.9.9 0 0 1 0 1.79L21 6.902H11A.901.901 0 0 1 11 5.1h10l.092.005Z"
})));
export default CheckListIcon;