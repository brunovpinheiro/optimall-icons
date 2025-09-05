function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MissionIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "mission",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.1c.56 0 1.11.042 1.646.124l.533.094.09.023a.9.9 0 0 1-.357 1.755l-.09-.014-.446-.08A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 8.997-10.475l-.079-.445-.014-.091a.9.9 0 0 1 1.755-.357l.023.09.094.533c.082.537.124 1.087.124 1.646 0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9C1.1 5.98 5.98 1.1 12 1.1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6.1a.9.9 0 0 1 0 1.8 4.1 4.1 0 1 0 4.1 4.1.9.9 0 0 1 1.8 0A5.9 5.9 0 1 1 12 6.1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.008 1.31c.724-.45 1.644-.113 1.976.618l.063.162.008.026.41 1.48 1.376.34.034.01.168.06c.754.327 1.094 1.27.635 2l-.112.153c-.554.67-1.309 1.557-2.325 2.077-.958.49-2.082.625-3.378.165L12.667 12.6l-.068.061a.9.9 0 0 1-1.205-1.334l4.217-4.219c-.441-1.216-.33-2.305.125-3.252.505-1.047 1.395-1.842 2.12-2.435l.152-.11Zm.49 1.927c-.492.444-.9.9-1.14 1.399-.257.533-.35 1.173.013 2.033.895.344 1.533.23 2.05-.035.48-.246.903-.643 1.324-1.114l-1.22-.302a.9.9 0 0 1-.652-.632l-.375-1.349Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default MissionIcon;