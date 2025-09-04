import * as React from 'react';
const NotificationFill = React.forwardRef(function NotificationFill(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M15.75 20a4.249 4.249 0 0 1-7.5 0zM12 1.75a7.75 7.75 0 0 1 7.75 7.75v2.756c0 .597.237 1.169.66 1.59l.603.604a2.52 2.52 0 0 1-1.782 4.3H4.77a2.519 2.519 0 0 1-1.782-4.3l.604-.603.15-.165c.327-.4.509-.904.509-1.426V9.5A7.75 7.75 0 0 1 12 1.75" /></svg>;
});
NotificationFill.displayName = "NotificationFill";
export { NotificationFill };
export default NotificationFill;