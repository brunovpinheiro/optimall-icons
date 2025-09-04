import * as React from 'react';
const AlertFill = React.forwardRef(function AlertFill(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.324 3.803c1.198-2.07 4.153-2.07 5.351 0l7.645 13.218c1.2 2.075-.258 4.729-2.675 4.729H4.355c-2.419 0-3.877-2.654-2.677-4.73zM10.5 12.5a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 1.5 1.5v4.5a1 1 0 1 1-2 0v-4a1 1 0 0 1-1-1m1.5-4a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z" clipRule="evenodd" /></svg>;
});
AlertFill.displayName = "AlertFill";
export { AlertFill };
export default AlertFill;