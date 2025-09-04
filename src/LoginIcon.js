import React, { forwardRef } from 'react';
export const LoginIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "login"} ref={ref} {...props}><path fill="currentColor" d="M12.598 2.25c-5.67 0-10.35 4.32-10.35 9.75s4.68 9.75 10.35 9.75q.765 0 1.502-.102l-.204-1.486a10 10 0 0 1-1.298.088c-4.934 0-8.85-3.738-8.85-8.25 0-4.511 3.916-8.25 8.85-8.25q.663 0 1.298.088l.204-1.486q-.736-.101-1.502-.102" /><path fill="currentColor" d="m14.529 9.53-1.06-1.06L9.937 12l3.53 3.53 1.06-1.06-1.719-1.72h8.19v-1.5h-8.19z" /></svg>);
export default LoginIcon;