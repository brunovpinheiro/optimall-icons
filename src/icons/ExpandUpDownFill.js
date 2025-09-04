import * as React from 'react';
const ExpandUpDownFill = React.forwardRef(function ExpandUpDownFill(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="m18 9-6-6-6 6zm0 6-6 6-6-6z" /></svg>;
});
ExpandUpDownFill.displayName = "ExpandUpDownFill";
export { ExpandUpDownFill };
export default ExpandUpDownFill;