function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const FlashIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "flash",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12.7969 3.23789L6.01431 11.944C6.01431 11.944 6.01431 11.9439 6.01431 11.944C6.00726 11.953 6.00233 11.9633 6.00041 11.9805C5.9992 11.9913 5.99951 12.0032 6.00125 12.015H9.30388C10.4636 12.015 11.2025 13.0353 11.2025 14.0301V20.7621L17.985 12.056C17.9921 12.047 17.997 12.0366 17.999 12.0194C18.0002 12.0086 17.9999 11.9968 17.9981 11.985H14.6955C13.5358 11.985 12.7969 10.9647 12.7969 9.96993V3.23789ZM13.6076 1.14747C14.3143 1.44866 14.7969 2.16282 14.7969 3.01706V9.96993C14.7969 9.97537 14.7971 9.98039 14.7976 9.98499H18.0993C18.9851 9.98499 19.5954 10.5828 19.8466 11.2103C20.0974 11.8372 20.0636 12.6423 19.5627 13.2852C19.5627 13.2852 19.5628 13.2851 19.5627 13.2852L12.5645 22.2681C12.0032 22.9886 11.1206 23.1631 10.3917 22.8525C9.68509 22.5513 9.20248 21.8371 9.20248 20.9829V14.0301C9.20248 14.0246 9.20223 14.0196 9.20179 14.015H5.90003C5.01421 14.015 4.40394 13.4171 4.1528 12.7896C3.90194 12.1628 3.93575 11.3577 4.43657 10.7148L11.4348 1.73194C11.4348 1.73195 11.4348 1.73194 11.4348 1.73194C11.9961 1.01139 12.8788 0.836827 13.6076 1.14747Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
})));
export default FlashIcon;