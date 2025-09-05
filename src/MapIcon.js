function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const MapIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "map",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.9 16.3c-.5 0-.9-.4-.9-.9v-1c0-.5.4-.9.9-.9s.9.4.9.9v1c0 .5-.4.9-.9.9Zm0-4c-.5 0-.9-.4-.9-.9v-1c0-.5.4-.9.9-.9s.9.4.9.9v1c0 .5-.4.9-.9.9Zm-7.9.1c0 .5.4.9.9.9s.9-.4.9-.9v-1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1Zm0-4c0 .5.4.9.9.9s.9-.4.9-.9v-1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.9 21.8h-2.08c-1.06 0-1.2-.03-2.15-.51l-3.81-1.9-.135-.067c-.74-.366-1.124-.555-1.435-.593-.66-.09-1.23.21-2.09.71l-.12.07c-1.49.86-2.24 1.29-3.09 1.14-.57-.1-1.08-.4-1.44-.86-.54-.67-.54-1.54-.54-3.28V8.36c0-1.28 0-1.98.39-2.67s.99-1.04 2.08-1.67l1.23-.71.45.78-.44-.78.004-.003C6.131 2.49 6.921 2.03 7.88 2c.96-.04 1.78.37 3.26 1.11l3.33 1.66c.426.213.876.32 1.35.32h2.08c2.07 0 3.21 0 4.06.87.84.86.84 2.02.84 4.12v6.74c0 2.1 0 3.26-.84 4.12-.85.87-1.99.87-4.06.87v-.01Zm-9.294-4.84a.898.898 0 0 0 .194-.56v-1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1c0 .23.084.439.224.597-.725.17-1.354.535-1.934.873l-.13.08-.092.053c-.782.454-1.576.915-1.768.867a.582.582 0 0 1-.36-.21c-.14-.18-.14-1.18-.14-2.15V8.35c0-1.04 0-1.51.15-1.77.14-.25.54-.49 1.42-1l1.23-.71-.45-.78.46.77c.6-.35 1.041-.601 1.39-.772V4.4c0 .5.4.9.9.9s.9-.4.9-.9v-.413c.374.147.857.382 1.54.723l3.33 1.66c.122.062.23.116.33.164V7.4c0 .5.4.9.9.9s.9-.4.9-.9v-.52h2.1c1.65 0 2.46.02 2.77.33.33.34.33 1.29.33 2.86v6.74c0 1.57 0 2.52-.33 2.86-.31.32-1.12.33-2.77.33h-2.08c-.08 0-.16-.003-.24-.01a.898.898 0 0 0 .22-.59v-1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.047l-3.35-1.667c-.92-.46-1.455-.728-2.044-.82Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default MapIcon;