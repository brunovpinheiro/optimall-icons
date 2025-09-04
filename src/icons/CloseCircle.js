import * as React from 'react';
const CloseCircle = React.forwardRef(function CloseCircle(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M14.895 15.8h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-2.36-2.36 2.36-2.36a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-2.36 2.36-2.36-2.36a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l2.36 2.36-2.36 2.36a.9.9 0 0 0 0 1.27.9.9 0 0 0 1.27 0l2.36-2.36z" /><path fill="currentColor" fillRule="evenodd" d="M1 11.9c0 6.01 4.89 10.9 10.9 10.9s10.9-4.89 10.9-10.9S17.91 1 11.9 1 1 5.89 1 11.9m1.8 0c0-5.02 4.08-9.1 9.1-9.1S21 6.88 21 11.9 16.92 21 11.9 21s-9.1-4.08-9.1-9.1" clipRule="evenodd" /></svg>;
});
CloseCircle.displayName = "CloseCircle";
export { CloseCircle };
export default CloseCircle;