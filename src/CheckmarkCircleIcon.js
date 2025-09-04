import React, { forwardRef } from 'react';
export const CheckmarkCircleIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "checkmark, circle"} ref={ref} {...props}><path fill="currentColor" d="M9.76 15.54c.17.17.4.26.64.26l-.01-.01h.02c.24 0 .47-.11.64-.29l5.5-6c.34-.36.32-.93-.05-1.27a.9.9 0 0 0-1.27.06l-4.87 5.31-1.83-1.83a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27z" /><path fill="currentColor" fillRule="evenodd" d="M1 11.9c0 6.01 4.89 10.9 10.9 10.9s10.9-4.89 10.9-10.9S17.91 1 11.9 1 1 5.89 1 11.9m1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1" clipRule="evenodd" /></svg>);
export default CheckmarkCircleIcon;