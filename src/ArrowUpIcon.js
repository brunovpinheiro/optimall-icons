function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const ArrowUpIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "arrow, up",
  style: style,
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 3.1c-.416 0-.791.183-1.058.344-.292.176-.59.41-.875.663-.575.507-1.189 1.167-1.741 1.803A44.412 44.412 0 0 0 6.32 8.406l-.033.044-.009.012-.003.004a.9.9 0 1 0 1.45 1.067l.001-.002.007-.01.03-.04a30.474 30.474 0 0 1 .542-.709c.36-.46.851-1.073 1.38-1.682.476-.548.968-1.077 1.415-1.49V20a.9.9 0 0 0 1.8 0V5.6c.446.413.938.942 1.414 1.49a42.684 42.684 0 0 1 1.922 2.392l.03.04.009.012a.9.9 0 1 0 1.449-1.068l-.003-.004-.009-.012-.032-.044a32.107 32.107 0 0 0-.567-.741 44.42 44.42 0 0 0-1.44-1.755c-.552-.636-1.166-1.296-1.74-1.803a6.208 6.208 0 0 0-.876-.663C12.79 3.284 12.415 3.1 12 3.1ZM17 9l.724-.534L17 9ZM7 9l-.725-.534L7 9Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default ArrowUpIcon;