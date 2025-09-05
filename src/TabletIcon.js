function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TabletIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "tablet",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.01 17.75a1.25 1.25 0 0 1 0 2.5H12a1.25 1.25 0 1 1 0-2.5h.01Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5 1.1c1.389 0 2.521-.002 3.412.118.917.123 1.712.39 2.346 1.024.634.635.901 1.43 1.024 2.346.12.89.118 2.023.118 3.412v8c0 1.389.002 2.521-.118 3.412-.123.917-.39 1.712-1.024 2.346-.634.634-1.43.9-2.346 1.024-.89.12-2.023.118-3.412.118h-5c-1.389 0-2.521.002-3.412-.118-.917-.123-1.711-.39-2.346-1.024-.634-.634-.9-1.43-1.024-2.346-.12-.89-.118-2.023-.118-3.412V8c0-1.389-.002-2.521.118-3.412.123-.917.39-1.711 1.024-2.346.635-.634 1.43-.9 2.346-1.024.89-.12 2.023-.118 3.412-.118h5Zm-5 1.8c-1.44 0-2.429.002-3.172.102-.717.096-1.07.268-1.313.513-.245.244-.417.596-.513 1.313C4.402 5.571 4.4 6.56 4.4 8v8c0 1.44.002 2.429.102 3.172.096.717.268 1.07.513 1.313.244.245.596.417 1.313.513.743.1 1.732.102 3.172.102h5c1.44 0 2.429-.002 3.172-.102.717-.096 1.07-.268 1.313-.513.245-.244.417-.596.513-1.313.1-.743.102-1.732.102-3.172V8c0-1.44-.002-2.429-.102-3.172-.096-.717-.268-1.07-.513-1.313-.244-.245-.596-.417-1.313-.513-.743-.1-1.732-.102-3.172-.102h-5Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default TabletIcon;