import * as React from 'react';
const Apps = React.forwardRef(function Apps(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 1.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M2.9 6a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0M6 13.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M2.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0M13.1 6a4.9 4.9 0 1 1 9.8 0 4.9 4.9 0 0 1-9.8 0M18 2.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2m0 10.2a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8M14.9 18a3.1 3.1 0 1 1 6.2 0 3.1 3.1 0 0 1-6.2 0" clipRule="evenodd" /></svg>;
});
Apps.displayName = "Apps";
export { Apps };
export default Apps;