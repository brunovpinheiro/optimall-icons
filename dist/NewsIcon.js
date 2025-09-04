function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const NewsIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "news",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M10.092 15.105a.9.9 0 0 1 0 1.79L10 16.9H6a.9.9 0 0 1 0-1.8h4zm4-4a.9.9 0 0 1 0 1.79L14 12.9H6a.9.9 0 0 1 0-1.8h8zm0-4.001a.9.9 0 0 1 0 1.792L14 8.9H6a.9.9 0 0 1 0-1.8h8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M12 2.1c1.389 0 2.521-.002 3.412.118.917.123 1.711.39 2.346 1.024.634.635.901 1.43 1.024 2.346.06.443.09.947.104 1.512H19c.682 0 1.283-.002 1.766.063.444.06.89.187 1.271.496l.16.144.144.16c.309.382.436.827.496 1.271.065.483.063 1.084.063 1.766v8a2.9 2.9 0 0 1-2.75 2.896L20 21.9H8c-1.389 0-2.521.002-3.412-.118-.917-.123-1.711-.39-2.346-1.024-.634-.634-.9-1.43-1.024-2.346-.12-.89-.118-2.023-.118-3.412V9c0-1.389-.002-2.521.118-3.412.123-.917.39-1.711 1.024-2.346.635-.634 1.43-.9 2.346-1.024C5.478 2.098 6.61 2.1 8 2.1zM8 3.9c-1.44 0-2.429.002-3.172.102-.717.096-1.07.268-1.313.513-.245.244-.417.596-.513 1.313C2.902 6.571 2.9 7.56 2.9 9v6c0 1.44.002 2.429.102 3.172.096.717.268 1.07.513 1.313.244.245.596.417 1.313.513.743.1 1.732.102 3.172.102h9.316A2.9 2.9 0 0 1 17.1 19V8.792c0-1.328-.007-2.257-.102-2.964-.096-.717-.268-1.07-.513-1.313-.244-.245-.596-.417-1.313-.513-.743-.1-1.732-.102-3.172-.102zM18.9 19a1.1 1.1 0 1 0 2.2 0v-8c0-.732-.002-1.192-.047-1.526-.042-.309-.105-.373-.13-.398-.024-.025-.09-.088-.397-.129-.334-.045-.793-.047-1.526-.047h-.1z",
  clipRule: "evenodd"
})));
export default NewsIcon;