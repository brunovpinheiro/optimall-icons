import React, { forwardRef } from 'react';
export const ShareIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "share"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14.82 9.289A3.9 3.9 0 0 0 17.9 10.8c2.15 0 3.9-1.75 3.9-3.9S20.05 3 17.9 3a3.905 3.905 0 0 0-3.826 4.657l-5.096 2.351A3.9 3.9 0 0 0 5.9 8.5C3.75 8.5 2 10.25 2 12.4s1.75 3.9 3.9 3.9a3.9 3.9 0 0 0 3.07-1.498l5.101 2.355a3.9 3.9 0 1 0 7.729.743c0-2.15-1.75-3.9-3.9-3.9a3.9 3.9 0 0 0-3.089 1.522l-5.088-2.348a3.9 3.9 0 0 0 .003-1.534zM15.8 6.9a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m-12 5.5a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0m14.1 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2" clipRule="evenodd" /></svg>);
export default ShareIcon;