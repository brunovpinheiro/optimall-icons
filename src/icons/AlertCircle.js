import * as React from 'react';
const AlertCircle = React.forwardRef(function AlertCircle(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M11.9 22.8C5.89 22.8 1 17.91 1 11.9S5.89 1 11.9 1s10.9 4.89 10.9 10.9-4.89 10.9-10.9 10.9m0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1" /><path fill="currentColor" d="M11.9 15.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9m0-3c-.5 0-.9-.4-.9-.9v-4c0-.5.4-.9.9-.9s.9.4.9.9v4c0 .5-.4.9-.9.9" /></svg>;
});
AlertCircle.displayName = "AlertCircle";
export { AlertCircle };
export default AlertCircle;