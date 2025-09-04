import React, { forwardRef } from 'react';
export const DragDropVerticalIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "drag, drop, vertical"} ref={ref} {...props}><path fill="currentColor" d="m8.007 16.5.153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 0 1 0-3zm7.993 0a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3zm-7.993-6 .153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H8a1.5 1.5 0 1 1 0-3zM16 4.5a1.5 1.5 0 0 1 0 3h-.006a1.5 1.5 0 0 1 0-3z" /></svg>);
export default DragDropVerticalIcon;