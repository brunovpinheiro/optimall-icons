function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const EmojiEmptyIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  size = 24,
  width,
  height,
  ...props
}, ref) => {
  const iconSize = width || height || size;
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    className: className,
    "aria-label": ariaLabel || "emoji, empty",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.575 20.99a9.182 9.182 0 0 0 2.85 0 .9.9 0 1 1 .28 1.778 10.976 10.976 0 0 1-3.41 0 .901.901 0 0 1 .28-1.779ZM3.38 17.15a.9.9 0 0 1 1.257.199 9.159 9.159 0 0 0 2.014 2.014.9.9 0 1 1-1.06 1.455 10.959 10.959 0 0 1-2.41-2.41.9.9 0 0 1 .199-1.258Zm15.983.199a.9.9 0 1 1 1.455 1.06 10.96 10.96 0 0 1-2.41 2.41.9.9 0 0 1-1.06-1.456 9.159 9.159 0 0 0 2.015-2.014ZM7.46 14.28a.9.9 0 0 1 1.26.18c.75.997 1.94 1.64 3.28 1.64 1.34 0 2.53-.643 3.28-1.64a.9.9 0 0 1 1.44 1.08A5.893 5.893 0 0 1 12 17.9c-1.93 0-3.645-.93-4.72-2.36a.9.9 0 0 1 .18-1.26ZM2.262 9.546a.9.9 0 0 1 .749 1.03 9.175 9.175 0 0 0 0 2.849.9.9 0 1 1-1.779.28 10.975 10.975 0 0 1 0-3.41.9.9 0 0 1 1.03-.75Zm19.476 0a.901.901 0 0 1 1.03.75 10.976 10.976 0 0 1 0 3.408.901.901 0 0 1-1.779-.28 9.182 9.182 0 0 0 0-2.849.9.9 0 0 1 .75-1.03ZM8.009 7.75a1.25 1.25 0 0 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5h.009Zm7.991 0a1.25 1.25 0 1 1 0 2.5h-.009a1.25 1.25 0 0 1 0-2.5H16ZM5.592 3.182a.9.9 0 0 1 1.06 1.455A9.159 9.159 0 0 0 4.636 6.65a.9.9 0 1 1-1.455-1.06 10.958 10.958 0 0 1 2.41-2.41Zm11.558.198a.9.9 0 0 1 1.258-.198 10.959 10.959 0 0 1 2.41 2.41.9.9 0 0 1-1.455 1.06 9.159 9.159 0 0 0-2.014-2.015.9.9 0 0 1-.199-1.257ZM12 1.1c.58 0 1.148.045 1.704.132a.9.9 0 0 1-.28 1.779 9.175 9.175 0 0 0-2.849 0 .9.9 0 1 1-.28-1.779A10.975 10.975 0 0 1 12 1.1Z"
}));
});
export default EmojiEmptyIcon;