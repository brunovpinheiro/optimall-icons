import * as React from 'react';
const AddPi = React.forwardRef(function AddPi(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M5 3.4a2.1 2.1 0 0 0-2.1 2.1v10c0 1.16.94 2.1 2.1 2.1h14a2.1 2.1 0 0 0 2.1-2.1v-3a.9.9 0 0 1 1.8 0v3a3.9 3.9 0 0 1-3.9 3.9h-6.1v2.1a.9.9 0 1 1-1.8 0v-2.1H5a3.9 3.9 0 0 1-3.9-3.9v-10A3.9 3.9 0 0 1 5 1.6h6a.9.9 0 1 1 0 1.8z" /><path fill="currentColor" d="M18.9 2.5a.9.9 0 1 0-1.8 0v3.1H14a.9.9 0 0 0 0 1.8h3.1v3.1a.9.9 0 0 0 1.8 0V7.4H22a.9.9 0 1 0 0-1.8h-3.1z" /></svg>;
});
AddPi.displayName = "AddPi";
export { AddPi };
export default AddPi;