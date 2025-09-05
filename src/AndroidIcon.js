function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const AndroidIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "android",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.21966 1.46C8.92143 1.06235 8.35731 0.981764 7.95966 1.28C7.56202 1.57823 7.48143 2.14235 7.77966 2.54L8.82913 3.93929C6.89995 5.04163 5.5997 7.11897 5.5997 9.5L5.59969 9.98751C5.59964 9.99167 5.59961 9.99583 5.59961 10C5.59961 10.0042 5.59964 10.0083 5.59969 10.0125L5.59961 18C5.59959 19.0494 6.45028 19.9 7.49961 19.9H8.09961V22C8.09961 22.4971 8.50255 22.9 8.99961 22.9C9.49667 22.9 9.89961 22.4971 9.89961 22V19.9H14.0996V22C14.0996 22.4971 14.5026 22.9 14.9996 22.9C15.4967 22.9 15.8996 22.4971 15.8996 22V19.9H16.4997C17.549 19.9 18.3997 19.0494 18.3997 18V9.50001C18.3997 7.11895 17.0994 5.04159 15.1702 3.93926L16.2197 2.54C16.5179 2.14235 16.4373 1.57823 16.0397 1.28C15.642 0.981764 15.0779 1.06235 14.7797 1.46L13.4294 3.2603C12.9697 3.15541 12.4912 3.10001 11.9997 3.10001C11.5082 3.10001 11.0296 3.15541 10.5699 3.26032L9.21966 1.46ZM16.4997 18.1C16.5549 18.1 16.5997 18.0552 16.5997 18V10.9H7.39968L7.39961 18C7.39961 18.0552 7.44436 18.1 7.49961 18.1H16.4997ZM7.41685 9.10001H16.5825C16.3798 6.74679 14.4055 4.90001 11.9997 4.90001C9.59395 4.90001 7.61955 6.74679 7.41685 9.10001Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.99961 10.1C4.49667 10.1 4.89961 10.5029 4.89961 11V17C4.89961 17.4971 4.49667 17.9 3.99961 17.9C3.50255 17.9 3.09961 17.4971 3.09961 17V11C3.09961 10.5029 3.50255 10.1 3.99961 10.1Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.9996 10.1C20.4967 10.1 20.8996 10.5029 20.8996 11V17C20.8996 17.4971 20.4967 17.9 19.9996 17.9C19.5026 17.9 19.0996 17.4971 19.0996 17V11C19.0996 10.5029 19.5026 10.1 19.9996 10.1Z",
  fill: "currentColor"
})));
export default AndroidIcon;