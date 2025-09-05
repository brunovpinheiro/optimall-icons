function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const RightIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "right",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.276 5.466a.9.9 0 0 1 1.181-.241l.078.05v.001l.004.003.014.01.053.04a37.517 37.517 0 0 1 .886.677 53.16 53.16 0 0 1 2.098 1.722c.761.66 1.546 1.391 2.148 2.072.3.339.572.686.775 1.023.188.313.388.729.388 1.177 0 .448-.2.864-.388 1.177a7.281 7.281 0 0 1-.775 1.023c-.601.68-1.386 1.412-2.148 2.073a53.178 53.178 0 0 1-2.79 2.252l-.194.147-.053.039-.014.01-.003.003h-.001a.9.9 0 0 1-1.068-1.449l.003-.002.012-.01.048-.035c.042-.031.106-.078.186-.14a55.52 55.52 0 0 0 2.695-2.175c.738-.641 1.453-1.312 1.977-1.904.263-.298.46-.555.584-.762.082-.135.111-.215.122-.247a1.277 1.277 0 0 0-.122-.247 5.558 5.558 0 0 0-.584-.762c-.524-.592-1.239-1.263-1.977-1.904A51.376 51.376 0 0 0 8.716 6.91l-.186-.14-.048-.035-.012-.008-.003-.002v-.001a.9.9 0 0 1-.191-1.26Z"
})));
export default RightIcon;