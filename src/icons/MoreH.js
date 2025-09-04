import * as React from 'react';
const MoreH = React.forwardRef(function MoreH(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M6 10.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zM10.746 12c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m6.004 0c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5H18c-.69 0-1.25-.56-1.25-1.25" /></svg>;
});
MoreH.displayName = "MoreH";
export { MoreH };
export default MoreH;