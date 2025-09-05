function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UserBlockIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "user, block",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11.9 11.8c-2.98 0-5.4-2.42-5.4-5.4C6.5 3.42 8.92 1 11.9 1c2.98 0 5.4 2.42 5.4 5.4 0 2.98-2.42 5.4-5.4 5.4Zm0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.49 22.8c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56l.18-.105c.102-.059.197-.114.28-.165 2.55-1.52 5.68-1.99 8.59-1.29.48.12.78.6.67 1.08-.12.48-.61.78-1.08.67-2.46-.59-5.1-.2-7.25 1.08-.101.06-.207.121-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.37 20.52 5.37 21 6.5 21h6.41c.5 0 .9.4.9.9s-.4.9-.9.9H6.49Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 18.4a4.4 4.4 0 1 0 8.8 0 4.4 4.4 0 0 0-8.8 0Zm1.8 0c0-.39.09-.76.24-1.09l3.45 3.45c-.33.15-.7.24-1.09.24-1.43 0-2.6-1.17-2.6-2.6Zm4.96 1.09-3.45-3.45c.33-.15.7-.24 1.09-.24 1.43 0 2.6 1.17 2.6 2.6 0 .39-.09.76-.24 1.09Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default UserBlockIcon;