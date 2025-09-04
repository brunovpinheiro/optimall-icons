import * as React from 'react';
const CloverFill = React.forwardRef(function CloverFill(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="m12.1 10.83 4.24-4.24c.4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49c-.82-.82-2.15-.82-2.98 0L12.1 4.87l-1.26-1.26c-.4-.4-.93-.62-1.49-.62s-1.09.22-1.49.62c-.82.82-.82 2.15 0 2.98zm0 2.54-4.24 4.24c-.82.82-.82 2.16 0 2.98s2.15.82 2.98 0l1.26-1.26 1.26 1.26c.82.82 2.16.82 2.98 0s.82-2.16 0-2.98zm7.22-1.27 1.26-1.26c.4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49c-.82-.82-2.16-.82-2.98 0l-4.24 4.24 4.24 4.24c.79.8 2.18.79 2.97 0 .4-.4.62-.93.62-1.49s-.22-1.09-.62-1.49l-1.26-1.26zM6.59 7.86c-.82-.82-2.16-.82-2.98 0s-.82 2.15 0 2.98l1.26 1.26-1.26 1.26c-.4.4-.62.93-.62 1.49s.22 1.09.62 1.49c.79.79 2.18.79 2.98 0l4.24-4.24z" /></svg>;
});
CloverFill.displayName = "CloverFill";
export { CloverFill };
export default CloverFill;