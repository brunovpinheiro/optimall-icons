function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UserAddIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "user, add",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.4 22.8H6.49c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56.17-.1.33-.19.46-.27a11.56 11.56 0 0 1 10.22-.76c.46.19.68.71.49 1.17-.19.46-.71.68-1.17.49-.73-.3-1.5-.51-2.29-.62-2.2-.31-4.45.14-6.34 1.26-.15.09-.31.18-.5.29-.82.47-2.54 1.44-2.64 2.22-.03.22.12.49.43.78C4.35 20.52 5.35 21 6.48 21h5.91c.5 0 .9.4.9.9s-.4.9-.9.9h.01Zm-.5-11c-2.98 0-5.4-2.42-5.4-5.4C6.5 3.42 8.92 1 11.9 1c2.98 0 5.4 2.42 5.4 5.4 0 2.98-2.42 5.4-5.4 5.4Zm0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.4 22.8c-.5 0-.9-.4-.9-.9v-2.6h-2.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.6v-2.6c0-.5.4-.9.9-.9s.9.4.9.9v2.6h2.6c.5 0 .9.4.9.9s-.4.9-.9.9h-2.6v2.6c0 .5-.4.9-.9.9Z"
})));
export default UserAddIcon;