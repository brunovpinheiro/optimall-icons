function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const HomeIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "home",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 22.8h2c4.02 0 6.04 0 7.47-1.44 1.43-1.44 1.43-3.46 1.43-7.49v-2.09c0-2 0-3.1-.5-4.12s-1.36-1.7-2.94-2.93l-1.036-.808C14.907 2.04 13.572 1 11.9 1c-1.672 0-3.007 1.04-5.424 2.922l-.036.028-1.038.812C3.85 5.978 2.997 6.646 2.5 7.66 2 8.68 2 9.78 2 11.78v2.09c0 4.03 0 6.05 1.43 7.49 1.44 1.44 3.45 1.44 7.47 1.44ZM7.58 5.34C9.753 3.65 10.846 2.8 11.9 2.8l-.01-.01c1.054 0 2.147.85 4.32 2.54l.04.03 1.01.79c1.4 1.09 2.1 1.64 2.42 2.29.32.65.32 1.54.32 3.33v2.09c0 3.53 0 5.31-.91 6.22-.615.615-1.618.814-3.29.879V17.9c0-1.02 0-1.58-.22-2.11-.29-.71-.86-1.28-1.57-1.57-.53-.22-1.09-.22-2.11-.22-1.02 0-1.58 0-2.11.22-.72.3-1.27.85-1.57 1.57C8 16.33 8 16.89 8 17.9v3.059c-1.672-.065-2.675-.264-3.29-.879-.91-.92-.91-2.69-.91-6.22v-2.09c0-1.78 0-2.68.32-3.33.31-.64 1.01-1.19 2.42-2.29l1-.78.04-.03ZM9.8 20.988V17.9c0-.73 0-1.22.08-1.42.12-.28.33-.49.6-.6.2-.08.66-.08 1.42-.08.76 0 1.22 0 1.42.08.27.11.49.33.6.6.08.2.08.66.08 1.42v3.089l-1.1.001h-2l-1.1-.001Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default HomeIcon;