function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MeetIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "meet",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.9 2a.9.9 0 1 0-1.8 0v.523c-.778.236-1.447.612-2.009 1.22-.808.873-1.16 1.972-1.328 3.318-.163 1.314-.163 2.994-.163 5.12v.639c0 2.125 0 3.805.163 5.119.167 1.346.52 2.445 1.328 3.319.818.883 1.86 1.278 3.138 1.463 1.23.18 2.795.179 4.749.179h.072a.9.9 0 1 0 0-1.8c-2.043 0-3.477-.002-4.562-.16-1.05-.153-1.641-.435-2.076-.905-.443-.48-.717-1.147-.863-2.318-.148-1.19-.15-2.758-.15-4.96v-.514c0-1.325.001-2.421.034-3.343h17.133c.03.864.034 1.882.034 3.1a.9.9 0 0 0 1.8 0c0-2.077-.005-3.723-.173-5.015-.172-1.312-.526-2.385-1.319-3.242-.562-.608-1.23-.984-2.008-1.22V2a.9.9 0 1 0-1.8 0v.2c-1.114-.1-2.463-.1-4.079-.1h-2.043c-1.615 0-2.965 0-4.078.1V2Zm13.526 5.1H3.574c.15-1.058.418-1.681.838-2.135.212-.23.462-.414.783-.56A.9.9 0 0 0 6.9 4.008c1.03-.107 2.355-.109 4.15-.109h1.9c1.794 0 3.119.002 4.15.109a.9.9 0 0 0 1.704.395c.322.147.57.332.783.56.42.455.688 1.078.839 2.136Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.9 14a.9.9 0 1 0-1.8 0v3.1H13a.9.9 0 0 0 0 1.8h3.1V22a.9.9 0 0 0 1.8 0v-3.1H21a.9.9 0 1 0 0-1.8h-3.1V14Z"
}));
});
export default MeetIcon;