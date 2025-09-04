import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Android = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.22 1.46a.9.9 0 1 0-1.44 1.08l1.05 1.4A6.4 6.4 0 0 0 5.6 9.5V18c0 1.05.85 1.9 1.9 1.9h.6V22a.9.9 0 1 0 1.8 0v-2.1h4.2V22a.9.9 0 0 0 1.8 0v-2.1h.6a1.9 1.9 0 0 0 1.9-1.9V9.5c0-2.381-1.3-4.458-3.23-5.56l1.05-1.4a.9.9 0 0 0-1.44-1.08l-1.35 1.8a6.4 6.4 0 0 0-2.86 0zM16.5 18.1a.1.1 0 0 0 .1-.1v-7.1H7.4V18a.1.1 0 0 0 .1.1zm-9.083-9h9.166a4.6 4.6 0 0 0-9.166 0" clipRule="evenodd" /><path fill="currentColor" d="M4 10.1a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9m16 0a.9.9 0 0 1 .9.9v6a.9.9 0 1 1-1.8 0v-6a.9.9 0 0 1 .9-.9" /></svg>;
});
Android.displayName = "Android";
export { Android };
export default Android;