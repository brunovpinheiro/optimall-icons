import React, { forwardRef } from 'react';
export const MoreHIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "more, h"} ref={ref} {...props}><path fill="currentColor" d="M6 10.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zM10.746 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m6.004 0c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5H18c-.69 0-1.25-.56-1.25-1.25" /></svg>);
export default MoreHIcon;