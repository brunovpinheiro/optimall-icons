import React, { forwardRef } from 'react';
export const AttachmentIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "attachment"} ref={ref} {...props}><path fill="currentColor" d="M12.4 21.8c-4.63 0-8.4-3.77-8.4-8.4V7.9C4 4.65 6.65 2 9.9 2s5.9 2.65 5.9 5.9v5.5c0 1.88-1.52 3.4-3.4 3.4S9 15.27 9 13.4v-4c0-.5.4-.9.9-.9s.9.4.9.9v4c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6V7.9c0-2.26-1.84-4.1-4.1-4.1S5.8 5.64 5.8 7.9v5.5c0 3.64 2.96 6.6 6.6 6.6s6.6-2.96 6.6-6.6v-1.5c0-.5.4-.9.9-.9s.9.4.9.9v1.5c0 4.63-3.77 8.4-8.4 8.4" /></svg>);
export default AttachmentIcon;