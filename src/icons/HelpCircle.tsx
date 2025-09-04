import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const HelpCircle = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M12.113 15.905a1.1 1.1 0 0 1 0 2.19l-.112.005h-.009a1.1 1.1 0 1 1 0-2.2h.009zM12 6.1a2.9 2.9 0 0 1 2.44 4.466v.001a9 9 0 0 1-.57.77c-.197.244-.369.452-.525.667-.32.438-.445.74-.445.996v.5a.9.9 0 0 1-1.8 0V13c0-.849.417-1.542.79-2.055.19-.26.401-.518.577-.736a8 8 0 0 0 .459-.615L13 9.46q.098-.211.1-.46a1.1 1.1 0 1 0-2.2 0 .9.9 0 0 1-1.8 0A2.9 2.9 0 0 1 12 6.1" /><path fill="currentColor" fillRule="evenodd" d="M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9" clipRule="evenodd" /></svg>;
});
HelpCircle.displayName = "HelpCircle";
export { HelpCircle };
export default HelpCircle;