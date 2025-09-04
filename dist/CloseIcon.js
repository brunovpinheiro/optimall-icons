import React, { forwardRef } from 'react';
export const CloseIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "close"} ref={ref} {...props}><path fill="currentColor" d="M18.9 19.8c-.23 0-.46-.09-.64-.26l-6.36-6.36-6.36 6.36a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l6.36-6.36-6.37-6.37a.91.91 0 0 1 0-1.28c.36-.35.93-.35 1.28 0l6.36 6.36 6.36-6.36a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-6.36 6.36 6.36 6.36a.9.9 0 0 1 0 1.27c-.18.18-.41.26-.64.26z" /></svg>);
export default CloseIcon;