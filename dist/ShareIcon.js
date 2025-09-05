function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ShareIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "share",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.8194 9.28874C15.5336 10.2076 16.6491 10.8 17.9 10.8C20.05 10.8 21.8 9.05 21.8 6.9C21.8 4.75 20.05 3 17.9 3C15.75 3 14 4.75 14 6.9C14 7.15883 14.0254 7.41186 14.0737 7.65674L8.97839 10.0084C8.26409 9.09116 7.14961 8.5 5.9 8.5C3.75 8.5 2 10.25 2 12.4C2 14.55 3.75 16.3 5.9 16.3C7.14472 16.3 8.25537 15.7134 8.97 14.8023L14.0711 17.1567C14.0244 17.3974 14 17.6459 14 17.9C14 20.05 15.75 21.8 17.9 21.8C20.05 21.8 21.8 20.05 21.8 17.9C21.8 15.75 20.05 14 17.9 14C16.6442 14 15.5249 14.597 14.8111 15.522L9.72289 13.1736C9.77346 12.9235 9.8 12.6648 9.8 12.4C9.8 12.1399 9.77439 11.8857 9.72557 11.6397L14.8194 9.28874ZM15.8 6.9C15.8 5.74 16.74 4.8 17.9 4.8C19.06 4.8 20 5.74 20 6.9C20 8.06 19.06 9 17.9 9C16.74 9 15.8 8.06 15.8 6.9ZM3.8 12.4C3.8 11.24 4.74 10.3 5.9 10.3C7.06 10.3 8 11.24 8 12.4C8 13.56 7.06 14.5 5.9 14.5C4.74 14.5 3.8 13.56 3.8 12.4ZM17.9 15.8C16.74 15.8 15.8 16.74 15.8 17.9C15.8 19.06 16.74 20 17.9 20C19.06 20 20 19.06 20 17.9C20 16.74 19.06 15.8 17.9 15.8Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ShareIcon;