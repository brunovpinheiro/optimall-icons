import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const ArrowGoForward = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M20.8 14.922c-.006.343-.145 1.314-3.37 3.678-.16.12-.35.18-.53.18v.02a.91.91 0 0 1-.73-.37c-.29-.4-.21-.96.19-1.26a23 23 0 0 0 1.68-1.37H8.4c-2.98 0-5.4-2.42-5.4-5.4S5.42 5 8.4 5h4.5c.5 0 .9.4.9.9s-.4.9-.9.9H8.4c-1.99 0-3.6 1.62-3.6 3.6S6.41 14 8.4 14h9.662a23 23 0 0 0-1.702-1.39.897.897 0 0 1-.19-1.26c.29-.4.86-.49 1.26-.19 3.37 2.48 3.37 3.42 3.37 3.72z" /></svg>;
});
ArrowGoForward.displayName = "ArrowGoForward";
export { ArrowGoForward };
export default ArrowGoForward;