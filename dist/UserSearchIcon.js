import React, { forwardRef } from 'react';
export const UserSearchIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "user, search"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.9 11.8c-2.98 0-5.4-2.42-5.4-5.4S7.92 1 10.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6" clipRule="evenodd" /><path fill="currentColor" d="M12.89 22.8h-6.4c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.673 2.194-2.8 3.514-3.55l.016-.01.18-.105q.154-.088.28-.165c2.07-1.23 4.55-1.78 6.97-1.56.49.05.86.48.81.98-.05.49-.47.87-.98.81-2.05-.19-4.14.27-5.88 1.31q-.15.089-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.35 20.52 5.35 21 6.48 21h6.41c.5 0 .9.4.9.9s-.4.9-.9.9m9.005 0h.005-.01z" /><path fill="currentColor" fillRule="evenodd" d="M21.26 22.54a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-1.28-1.28c.48-.71.75-1.56.75-2.48 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5c.92 0 1.77-.28 2.48-.75zM14.8 17.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7-1.21 2.7-2.7 2.7-2.7-1.21-2.7-2.7" clipRule="evenodd" /></svg>);
export default UserSearchIcon;