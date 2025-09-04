import React, { forwardRef } from 'react';
export const MissionIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "mission"} ref={ref} {...props}><path fill="currentColor" d="M12 1.1q.841 0 1.646.124l.533.094.09.023a.9.9 0 0 1-.357 1.755l-.09-.014-.446-.08A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 8.997-10.475l-.079-.445-.014-.091a.9.9 0 0 1 1.755-.357l.023.09.094.533q.124.806.124 1.646c0 6.02-4.88 10.9-10.9 10.9S1.1 18.02 1.1 12 5.98 1.1 12 1.1" /><path fill="currentColor" d="M12 6.1a.9.9 0 0 1 0 1.8 4.1 4.1 0 1 0 4.1 4.1.9.9 0 0 1 1.8 0A5.9 5.9 0 1 1 12 6.1" /><path fill="currentColor" fillRule="evenodd" d="M18.008 1.31c.724-.45 1.644-.113 1.976.618l.063.162.008.026.41 1.48 1.376.34.034.01.168.06c.754.327 1.094 1.27.635 2l-.112.153c-.554.67-1.309 1.557-2.325 2.077-.958.49-2.082.625-3.378.165L12.667 12.6l-.068.061a.9.9 0 0 1-1.205-1.334l4.217-4.219c-.441-1.216-.33-2.305.125-3.252.505-1.047 1.395-1.842 2.12-2.435zm.49 1.927c-.492.444-.9.9-1.14 1.399-.257.533-.35 1.173.013 2.033.895.344 1.533.23 2.05-.035.48-.246.903-.643 1.324-1.114l-1.22-.302a.9.9 0 0 1-.652-.632z" clipRule="evenodd" /></svg>);
export default MissionIcon;