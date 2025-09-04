import * as React from 'react';
const Notification = React.forwardRef(function Notification(props, ref) {
  const {
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    className,
    ...rest
  } = props;
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.6a7.9 7.9 0 0 1 7.9 7.9v2.756c0 .556.221 1.09.615 1.484l.603.604a2.67 2.67 0 0 1-1.887 4.557h-2.923a4.402 4.402 0 0 1-8.616 0H4.77a2.67 2.67 0 0 1-1.887-4.557l.603-.604a2.1 2.1 0 0 0 .615-1.484V9.5A7.9 7.9 0 0 1 12 1.6M9.563 18.9a2.598 2.598 0 0 0 4.874 0zM12 3.4a6.1 6.1 0 0 0-6.1 6.1v2.756a3.9 3.9 0 0 1-1.142 2.758l-.604.603A.87.87 0 0 0 4.77 17.1h14.46a.868.868 0 0 0 .615-1.484l-.604-.602a3.9 3.9 0 0 1-1.142-2.758V9.5A6.1 6.1 0 0 0 12 3.4" clipRule="evenodd" /></svg>;
});
Notification.displayName = "Notification";
export { Notification };
export default Notification;