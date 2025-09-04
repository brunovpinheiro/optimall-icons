// src/icons/Change.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Change = React.forwardRef(({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", viewBox: "0 0 24 24", role: "img", stroke: color, strokeWidth: computedStrokeWidth, className, ref, ...props, children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M8.854 5.63a.9.9 0 0 0-1.286-1.26L5.282 6.705c-.32.327-.624.638-.825.91-.19.258-.52.789-.266 1.415.257.635.874.776 1.192.822.332.048.765.048 1.216.048H19a.9.9 0 0 0 0-1.8H6.436l.174-.178zm8.709 10.27-.173.178-2.244 2.292a.9.9 0 1 0 1.286 1.26l2.285-2.335c.32-.327.625-.638.825-.91.19-.258.52-.789.267-1.414-.258-.636-.874-.777-1.192-.823-.333-.048-.765-.048-1.216-.048H5a.9.9 0 1 0 0 1.8z" }) });
});
Change.displayName = "Change";
var Change_default = Change;
export {
  Change,
  Change_default as default
};
//# sourceMappingURL=Change.js.map