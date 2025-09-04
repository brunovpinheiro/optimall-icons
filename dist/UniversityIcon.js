import React, { forwardRef } from 'react';
export const UniversityIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "university"} ref={ref} {...props}><path fill="currentColor" d="M10.5 11.1a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9m3 0a.9.9 0 0 1 .9.9v.5a.9.9 0 1 1-1.8 0V12a.9.9 0 0 1 .9-.9M11.4 16a.9.9 0 1 0-1.8 0v.5a.9.9 0 1 0 1.8 0zm3 0a.9.9 0 1 0-1.8 0v.5a.9.9 0 0 0 1.8 0z" /><path fill="currentColor" fillRule="evenodd" d="M12.9 5.882H16a.9.9 0 0 0 .9-.9c0-.75-.181-1.93-1.208-2.562a15 15 0 0 0-1.747-.935c-.334-.146-.713-.287-1.07-.35-.282-.049-.91-.118-1.367.342-.267.27-.35.587-.382.822-.027.198-.026.43-.026.634V7.1H6.5a.9.9 0 1 0 0 1.8h.1v3.2H2a.9.9 0 1 0 0 1.8h.1v7.2H2a.9.9 0 0 0 0 1.8h19.5a.9.9 0 0 0 .4-1.706V13.9h.1a.9.9 0 1 0 0-1.8h-4.6V8.9h.1a.9.9 0 1 0 0-1.8h-4.6zM12.469 2.9h.026zm.43.105q.147.052.326.13c.562.246 1.173.603 1.523.819a.5.5 0 0 1 .137.13H12.9zm0 18.096V20a.9.9 0 0 0-1.8 0v1.1H8.4V8.9h7.2v12.2zm-9-7.2h2.7v7.2H3.9zm13.5 0h2.7v7.2h-2.7z" clipRule="evenodd" /></svg>);
export default UniversityIcon;