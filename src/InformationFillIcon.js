import React, { forwardRef } from 'react';
export const InformationFillIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "information, fill"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75M11 6.5V8h2V6.5zM10 11h1v6h2V9h-3z" clipRule="evenodd" /></svg>);
export default InformationFillIcon;