function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const PcdIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "pcd",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.537 8.229a.9.9 0 0 1 .926 1.542c-.73.438-1.605.762-2.563.948v3.172l.973 3.89.018.091a.9.9 0 0 1-1.738.435l-.026-.088-.83-3.319h-.594l-.83 3.319a.9.9 0 0 1-1.746-.438l.973-3.89V10.72a8.106 8.106 0 0 1-2.335-.818l-.228-.13-.077-.051a.9.9 0 0 1 .922-1.536l.08.044.169.095c.859.469 2.038.776 3.369.776 1.42 0 2.667-.35 3.537-.871Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.169 5.108a1.65 1.65 0 1 1-1.81 1.811l-.01-.169.01-.169A1.65 1.65 0 0 1 12 5.1l.169.008Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.1c6.02 0 10.9 4.88 10.9 10.9 0 6.02-4.88 10.9-10.9 10.9-6.02 0-10.9-4.88-10.9-10.9C1.1 5.98 5.98 1.1 12 1.1Zm0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default PcdIcon;