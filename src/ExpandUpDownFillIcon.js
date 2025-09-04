import React, { forwardRef } from 'react';
export const ExpandUpDownFillIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "expand, up, down, fill"} ref={ref} {...props}><path fill="currentColor" d="m18 9-6-6-6 6zm0 6-6 6-6-6z" /></svg>);
export default ExpandUpDownFillIcon;