import React, { forwardRef } from 'react';
export const MinusIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "minus"} ref={ref} {...props}><path fill="currentColor" d="m20 11.1.092.005a.9.9 0 0 1 0 1.79L20 12.9H4a.9.9 0 0 1 0-1.8z" /></svg>);
export default MinusIcon;