import React, { forwardRef } from 'react';
export const CreditsIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "credits"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0" clipRule="evenodd" /><path fill="currentColor" d="M3.891 11.343a1 1 0 0 0-1.72-1.02 8.398 8.398 0 0 0 11.506 11.506 1 1 0 1 0-1.02-1.72 6.398 6.398 0 0 1-8.766-8.765" /></svg>);
export default CreditsIcon;