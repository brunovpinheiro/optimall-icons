import React, { forwardRef } from 'react';
export const AddCircleIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "add, circle"} ref={ref} {...props}><path fill="currentColor" d="M12 7c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1" /><path fill="currentColor" fillRule="evenodd" d="M1 12C1 5.93 5.92 1 12 1s11 4.93 11 11-4.92 11-11 11S1 18.07 1 12m11-9a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3" clipRule="evenodd" /></svg>);
export default AddCircleIcon;