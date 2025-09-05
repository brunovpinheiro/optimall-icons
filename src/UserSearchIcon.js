function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const UserSearchIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "user, search",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 11.8c-2.98 0-5.4-2.42-5.4-5.4C5.5 3.42 7.92 1 10.9 1c2.98 0 5.4 2.42 5.4 5.4 0 2.98-2.42 5.4-5.4 5.4Zm0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.89 22.8h-6.4c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.673 2.194-2.8 3.514-3.55l.016-.01.18-.105c.102-.059.197-.114.28-.165 2.07-1.23 4.55-1.78 6.97-1.56.49.05.86.48.81.98-.05.49-.47.87-.98.81-2.05-.19-4.14.27-5.88 1.31-.101.06-.207.121-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.35 20.52 5.35 21 6.48 21h6.41c.5 0 .9.4.9.9s-.4.9-.9.9Zm9.005 0h.005-.01.005Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.26 22.54a.936.936 0 0 0 .635.26.89.89 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-1.28-1.28c.48-.71.75-1.56.75-2.48 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5c.92 0 1.77-.28 2.48-.75l1.28 1.28ZM14.8 17.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default UserSearchIcon;