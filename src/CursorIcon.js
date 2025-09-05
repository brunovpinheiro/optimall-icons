function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const CursorIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "cursor",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.99 22.81c-.51 0-.98-.21-1.34-.57-.26-.27-.38-.57-.58-1.07l-1.49-3.71c-.15-.38-.31-.77-.38-.86-.08.04-.41.3-.72.54-1.63 1.25-2.45 1.88-3.39 1.78-.63-.06-1.22-.39-1.62-.89-.58-.73-.5-1.76-.35-3.81l.56-7.72c.19-2.9.3-4.65 1.93-5.32 1.63-.66 2.93.52 5.07 2.48l5.73 5.16c1.53 1.37 2.29 2.06 2.38 2.99.06.63-.14 1.28-.55 1.77-.61.72-1.62.84-3.66 1.09-.4.05-.81.1-.92.15.02.1.18.49.33.87l1.48 3.7c.19.48.32.8.32 1.18 0 .51-.21.99-.57 1.34-.26.26-.56.38-1.05.58-.51.21-.81.33-1.18.33v-.01Zm-3.8-7.98c.37 0 .74.11 1.05.32.48.32.68.82 1.01 1.65l1.48 3.7c.09.23.18.45.22.51.08 0 .31-.1.53-.19.22-.09.45-.18.5-.22 0-.1-.1-.33-.18-.54l-1.48-3.7c-.33-.83-.53-1.32-.41-1.89.09-.41.3-.76.6-1.03.44-.39.97-.45 1.85-.56 1.13-.14 2.3-.28 2.5-.46.1-.12.15-.28.13-.43-.06-.27-.94-1.06-1.79-1.82L10.47 5C8.76 3.44 7.85 2.63 7.29 2.86c-.56.23-.66 1.45-.82 3.78l-.57 7.73c-.09 1.2-.17 2.33-.03 2.57.09.12.24.2.39.21.27 0 1.2-.72 2.11-1.42.71-.54 1.14-.87 1.72-.9h.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default CursorIcon;