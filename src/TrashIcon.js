function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const TrashIcon = /*#__PURE__*/forwardRef(({
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
    "aria-label": ariaLabel || "trash",
    style: style,
    width: width || iconSize,
    height: height || iconSize,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.4 9.5c-.5 0-.9.4-.9.9v6c0 .5.4.9.9.9s.9-.4.9-.9v-6c0-.5-.4-.9-.9-.9Zm4.1.9c0-.5.4-.9.9-.9s.9.4.9.9v6c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-6Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.89 4.5h-4.37l-.44-.91-.026-.055C15.57 2.54 15.3 1.983 14.74 1.57c-.13-.09-.26-.18-.4-.25-.63-.33-1.26-.33-2.41-.33-1.15 0-1.82 0-2.47.34-.14.08-.27.16-.4.26-.57.44-.84 1.03-1.33 2.098v.002l-.37.8H2.9c-.5 0-.9.4-.9.9s.4.9.9.9h.65l.55 9.17c.16 2.73.25 4.1 1.03 5.23.39.56.88 1.03 1.47 1.39 1.17.72 2.55.72 5.28.72 2.73 0 4.1 0 5.28-.72.58-.36 1.08-.82 1.47-1.38.784-1.121.869-2.479 1.036-5.157L20.24 6.3h.65c.5 0 .9-.4.9-.9s-.4-.9-.9-.9ZM9.38 4.44l.056-.12c.335-.725.525-1.138.734-1.29.05-.04.1-.07.15-.1.24-.13.73-.13 1.62-.13.89 0 1.34 0 1.58.12l.15.09c.21.16.42.59.8 1.37l.06.12H9.36l.03-.06h-.01Zm8.5 10.93-.005.082c-.147 2.335-.22 3.516-.715 4.218-.25.35-.56.65-.93.87-.74.45-1.95.45-4.34.45-2.39 0-3.6 0-4.34-.45-.37-.23-.68-.52-.93-.88-.5-.72-.57-1.919-.71-4.305v-.005l-.55-9.06h13.09l-.56 9.07-.01.01Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
});
export default TrashIcon;