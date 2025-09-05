function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const StarIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "star",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.56 22.8c-.56 0-1.27-.17-2.14-.7l-2.99-1.79c-.26-.16-.8-.15-1.06 0l-2.98 1.78c-1.83 1.1-2.94.66-3.44.3-.5-.36-1.26-1.29-.78-3.39l.71-3.09c.06-.28-.08-.79-.28-.99l-2.48-2.5C.82 11.12.93 9.99 1.11 9.43c.18-.56.75-1.53 2.54-1.84l3.19-.53c.25-.04.64-.34.75-.56l1.76-3.55C10.2 1.25 11.34 1 11.9 1c.59 0 1.7.26 2.53 1.94l1.76 3.55c.12.24.51.53.76.57l3.19.53c1.8.3 2.37 1.28 2.55 1.84.18.56.29 1.69-1.01 2.99l-2.48 2.5c-.2.2-.34.71-.28 1l.71 3.09c.48 2.11-.28 3.03-.78 3.39-.26.19-.69.4-1.3.4h.01Zm-5.66-4.4c.52 0 1.04.12 1.45.37l2.99 1.78c.87.52 1.33.48 1.46.39.13-.09.31-.53.08-1.53l-.71-3.09c-.2-.9.12-2.02.76-2.66l2.48-2.5c.44-.44.66-.89.57-1.17-.09-.28-.52-.51-1.13-.62l-3.19-.53c-.84-.14-1.71-.79-2.08-1.55l-1.76-3.54c-.34-.69-.71-.94-.92-.94-.21 0-.58.25-.93.95L9.21 7.31c-.36.74-1.25 1.41-2.06 1.55l-3.19.54c-.61.1-1.04.34-1.13.61-.09.28.13.73.57 1.17l2.48 2.5c.64.64.96 1.76.76 2.65l-.71 3.1c-.23.99-.04 1.43.08 1.53.13.09.6.13 1.46-.38l2.99-1.78c.42-.25.94-.37 1.46-.37l-.02-.03Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default StarIcon;