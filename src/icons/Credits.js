import * as React from 'react';
const Credits = React.forwardRef(function Credits(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0" clipRule="evenodd" /><path fill="currentColor" d="M3.891 11.343a1 1 0 0 0-1.72-1.02 8.398 8.398 0 0 0 11.506 11.506 1 1 0 1 0-1.02-1.72 6.398 6.398 0 0 1-8.766-8.765" /></svg>;
});
Credits.displayName = "Credits";
export { Credits };
export default Credits;