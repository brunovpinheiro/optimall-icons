import * as React from 'react';
const Briefcase = React.forwardRef(function Briefcase(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.868 1.6a1.9 1.9 0 0 0-1.881 1.631L7.72 5.1H3.5A1.9 1.9 0 0 0 1.6 7v3a.9.9 0 0 0 .095.402c1.573 3.148 5.417 5.234 9.405 5.475v.623a.9.9 0 0 0 1.8 0v-.623c3.987-.24 7.83-2.327 9.405-5.475A.9.9 0 0 0 22.4 10V7a1.9 1.9 0 0 0-1.9-1.9h-4.22l-.266-1.869A1.9 1.9 0 0 0 14.133 1.6zm4.595 3.5-.23-1.614a.1.1 0 0 0-.1-.086H9.868a.1.1 0 0 0-.1.086L9.539 5.1zm-2.453 9c3.718.04 7.211-1.8 8.59-4.32V7a.1.1 0 0 0-.1-.1h-17a.1.1 0 0 0-.1.1v2.78c1.378 2.52 4.87 4.36 8.589 4.32z" clipRule="evenodd" /><path fill="currentColor" d="M21.897 15.069a.9.9 0 1 0-1.795-.138l-.358 4.653a1.1 1.1 0 0 1-1.096 1.016H5.352a1.1 1.1 0 0 1-1.097-1.016l-.358-4.653a.9.9 0 1 0-1.795.138l.358 4.653A2.9 2.9 0 0 0 5.352 22.4h13.296a2.9 2.9 0 0 0 2.891-2.678z" /></svg>;
});
Briefcase.displayName = "Briefcase";
export { Briefcase };
export default Briefcase;