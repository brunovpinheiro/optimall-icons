import * as React from 'react';
const ArrowGoBack = React.forwardRef(function ArrowGoBack(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M5.738 15.8H15.4c2.98 0 5.4-2.42 5.4-5.4S18.38 5 15.4 5h-4.5c-.5 0-.9.4-.9.9s.4.9.9.9h4.5c1.99 0 3.6 1.62 3.6 3.6S17.39 14 15.4 14H5.76a23 23 0 0 1 1.68-1.37c.4-.3.48-.86.19-1.26-.3-.4-.86-.48-1.26-.19C3 13.65 3 14.6 3 14.9s0 1.24 3.37 3.72c.16.12.34.18.53.18v.02c.28 0 .55-.13.73-.37.3-.4.21-.97-.19-1.26a23 23 0 0 1-1.702-1.39" /></svg>;
});
ArrowGoBack.displayName = "ArrowGoBack";
export { ArrowGoBack };
export default ArrowGoBack;