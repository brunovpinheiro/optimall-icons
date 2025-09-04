import React, { forwardRef } from 'react';
export const ArrowMoveUpRightIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "arrow, move, up, right"} ref={ref} {...props}><path fill="currentColor" d="m18.9 18.155.008-.01c.253-.298.5-.613.732-.908l.053-.068c.231-.294.474-.602.662-.796a.9.9 0 0 1 1.29 1.254 11 11 0 0 0-.536.654l-.057.072c-.228.29-.495.631-.77.956a9 9 0 0 1-.958.993c-.165.14-.352.28-.553.387-.194.104-.46.211-.77.211s-.577-.107-.771-.21a3.2 3.2 0 0 1-.553-.388 9 9 0 0 1-.957-.993c-.276-.325-.543-.666-.771-.956l-.057-.072a10 10 0 0 0-.537-.654.9.9 0 0 1 1.29-1.254c.19.194.432.502.663.796l.053.068c.232.295.48.61.732.909l.007.008c-.002-1.85-.018-3.34-.123-4.068-.68-4.713-4.036-8.328-8.215-9.054-.741-.129-1.646-.132-3.685-.132H3.001a.9.9 0 1 1 0-1.8h2.193c1.89 0 2.962 0 3.876.159 5.037.874 8.91 5.18 9.689 10.57.125.867.14 2.504.141 4.325" /></svg>);
export default ArrowMoveUpRightIcon;