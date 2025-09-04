import React, { forwardRef } from 'react';
export const MoreIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "more"} ref={ref} {...props}><path fill="currentColor" d="M12 4.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zM10.742 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m-.008 6c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25" /></svg>);
export default MoreIcon;