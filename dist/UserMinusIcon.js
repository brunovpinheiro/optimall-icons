function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UserMinusIcon = /*#__PURE__*/forwardRef(({
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
  "aria-label": ariaLabel || "user, minus",
  ref: ref
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "M10.9 11.8c-2.98 0-5.4-2.42-5.4-5.4S7.92 1 10.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M12.39 22.8h-5.9c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56l.18-.105q.154-.088.28-.165a11.56 11.56 0 0 1 10.22-.76c.46.19.68.71.49 1.17s-.71.68-1.17.49c-.73-.3-1.5-.51-2.29-.62-2.2-.31-4.45.14-6.34 1.26q-.15.089-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.35 20.52 5.35 21 6.48 21h5.91c.5 0 .9.4.9.9s-.4.9-.9.9"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M14.9 19.3h7c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7c-.5 0-.9.4-.9.9s.4.9.9.9"
})));
export default UserMinusIcon;