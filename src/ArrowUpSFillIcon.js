import React, { forwardRef } from 'react';
export const ArrowUpSFillIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "arrow, up, s, fill"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.47 8.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.53-1.28z" clipRule="evenodd" /></svg>);
export default ArrowUpSFillIcon;