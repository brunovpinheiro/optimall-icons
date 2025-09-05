function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const PaintBoardIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "paint, board",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.905 15.8h.005-.01.005Zm.172-.017c-.06.009-.112.017-.172.017a.908.908 0 0 1-.875-.7c-.11-.49.19-.96.68-1.07.48-.11.97.2 1.07.68.11.49-.2.97-.68 1.07l-.023.003Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.4 10.8C8.08 10.8 7 9.72 7 8.4 7 7.08 8.08 6 9.4 6c1.32 0 2.4 1.08 2.4 2.4 0 1.32-1.08 2.4-2.4 2.4Zm0-3c-.33 0-.6.27-.6.6 0 .33.27.6.6.6.33 0 .6-.27.6-.6 0-.33-.27-.6-.6-.6ZM14 9.4c0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4C15.08 7 14 8.08 14 9.4Zm1.8 0c0-.33.27-.6.6-.6.33 0 .6.27.6.6 0 .33-.27.6-.6.6-.33 0-.6-.27-.6-.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.34 22.8c.64 0 1.41-.05 1.95-.58.23-.23.51-.65.51-1.32 0-.855-.416-1.484-.76-2.005l-.03-.045c-.46-.69-.61-.96-.31-1.55.38-.75.85-.83 2.68-.83.86 0 1.92 0 3.15-.18 3.27-.47 3.27-3.22 3.27-4.39C22.8 5.89 17.91 1 11.9 1 5.89 1 1 5.89 1 11.9c0 6.01 4.89 10.9 10.9 10.9h.44ZM2.8 11.9c0-5.02 4.08-9.1 9.1-9.1h.01c5.02 0 9.1 4.08 9.1 9.1 0 1.86-.37 2.42-1.73 2.61-1.1.16-2.05.16-2.89.16-1.74 0-3.37 0-4.29 1.83-.78 1.57-.06 2.65.43 3.37.29.43.47.72.51 1.06-.118.073-.547.071-.828.07H11.9c-5.02 0-9.1-4.08-9.1-9.1Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default PaintBoardIcon;