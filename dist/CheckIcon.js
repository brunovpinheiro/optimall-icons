import React, { forwardRef } from 'react';
export const CheckIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "check"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.69 5.777a1 1 0 0 1 .033 1.413l-10.5 11a1 1 0 0 1-1.43.017l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.776 2.776 9.794-10.26a1 1 0 0 1 1.413-.032" clipRule="evenodd" /></svg>);
export default CheckIcon;