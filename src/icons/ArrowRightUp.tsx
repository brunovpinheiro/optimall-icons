import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const ArrowRightUp = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.616 13.063v-.005l.001-.013.004-.05a30 30 0 0 0 .057-.845c.032-.55.065-1.294.071-2.068.006-.77-.014-1.59-.095-2.283a6 6 0 0 0-.184-.973c-.078-.27-.208-.601-.451-.845-.244-.243-.575-.373-.845-.451a6 6 0 0 0-.973-.183c-.694-.081-1.514-.102-2.283-.096a43 43 0 0 0-2.913.128l-.05.004h-.013l-.005.001a.75.75 0 0 0 .126 1.495h.003l.011-.001.046-.004a29 29 0 0 1 .814-.055c.534-.03 1.251-.062 1.993-.068.745-.006 1.494.015 2.097.085l.068.009L5.47 17.47a.75.75 0 1 0 1.06 1.06L17.155 7.905l.009.068c.07.603.091 1.352.085 2.097a41 41 0 0 1-.11 2.632l-.013.176-.004.045v.013a.75.75 0 0 0 1.494.127M11 6.132l-.063-.748zM17.868 13l.748.063z" clipRule="evenodd" /></svg>;
});
ArrowRightUp.displayName = "ArrowRightUp";
export { ArrowRightUp };
export default ArrowRightUp;