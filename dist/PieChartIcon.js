function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { forwardRef } from 'react';
export const PieChartIcon = /*#__PURE__*/forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  className: className,
  "aria-label": ariaLabel || "pie, chart",
  style: style,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.74 5.07a11.04 11.04 0 0 1 2.4 3.59v.01l.011.026c.584 1.426 1.005 2.452.22 3.724-.016.02-.036.05-.056.08-.02.03-.04.06-.055.08-.89 1.23-2.2 1.23-4.18 1.23h-2.11c-2.09 0-3.25 0-4.11-.86-.86-.86-.86-2.01-.86-4.11V6.73c0-1.98 0-3.29 1.22-4.17.03-.03.12-.09.17-.12 1.28-.79 2.319-.36 3.747.229l.003.001c1.35.56 2.57 1.37 3.6 2.4ZM18.09 12c1.89 0 2.4-.05 2.71-.47l.01-.01c.33-.53.25-.81-.32-2.18a9.139 9.139 0 0 0-2.01-3.01 9.404 9.404 0 0 0-3.01-2.01c-.87-.36-1.3-.52-1.62-.52-.19 0-.33.06-.5.16-.49.36-.54.87-.54 2.76v2.11c0 1.56 0 2.51.33 2.84.33.33 1.28.33 2.84.33h2.11Z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.07 15.88a.9.9 0 0 1 1.18-.48h-.01a.9.9 0 0 1 .48 1.18c-1.3 3.09-4.12 5.34-7.54 6.02-.7.13-1.39.2-2.08.2-2.68 0-5.25-1.01-7.14-2.89-2.38-2.36-3.42-5.82-2.78-9.25.64-3.41 2.85-6.24 5.91-7.57.45-.2.98 0 1.18.46.2.45 0 .98-.46 1.18-2.52 1.1-4.34 3.44-4.86 6.26-.53 2.85.32 5.7 2.28 7.64 1.95 1.93 4.79 2.76 7.6 2.2 2.84-.56 5.17-2.41 6.24-4.95Z"
})));
export default PieChartIcon;