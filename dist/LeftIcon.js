function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const LeftIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "left",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m15.533 6.725-.003.002-.012.009-.048.036a54.203 54.203 0 0 0-2.88 2.315c-.74.641-1.455 1.312-1.978 1.904a5.538 5.538 0 0 0-.584.762 1.296 1.296 0 0 0-.122.247c.01.032.04.112.122.247.125.207.32.464.584.762.523.592 1.239 1.263 1.978 1.904a51.182 51.182 0 0 0 2.88 2.315l.048.036.012.009.003.002a.9.9 0 0 1-1.067 1.45L15 18l-.534.725-.005-.004-.014-.01-.053-.04a54.991 54.991 0 0 1-2.985-2.4c-.76-.66-1.545-1.39-2.146-2.07a7.3 7.3 0 0 1-.776-1.025C8.298 12.864 8.1 12.448 8.1 12c0-.448.198-.864.387-1.176A7.28 7.28 0 0 1 9.263 9.8c.6-.68 1.385-1.412 2.147-2.073a53.14 53.14 0 0 1 2.984-2.399l.053-.038.014-.01.004-.004L15 6l-.535-.724a.9.9 0 0 1 1.068 1.449Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default LeftIcon;