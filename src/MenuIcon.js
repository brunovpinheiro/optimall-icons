import React, { forwardRef } from 'react';
export const MenuIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "menu"} ref={ref} {...props}><path fill="currentColor" d="M20 4.1a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8z" /></svg>);
export default MenuIcon;