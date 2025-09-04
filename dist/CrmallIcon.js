import React, { forwardRef } from 'react';
export const CrmallIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "crmall"} ref={ref} {...props}><path fill="currentColor" d="M4 4a1 1 0 0 1 1-1h10.044a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 7.147a1 1 0 0 1 1-1h13.618a1 1 0 0 1 1 1v1.706a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm5.824 7.147a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h3.824a1 1 0 0 0 1-1z" /></svg>);
export default CrmallIcon;