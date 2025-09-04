import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const ZoomIn = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M10 14.4c0 .5.4.9.9.9s.9-.4.9-.9v-2.6h2.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.6V7.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9V10H7.4c-.5 0-.9.4-.9.9s.4.9.9.9H10z" /><path fill="currentColor" fillRule="evenodd" d="M10.9 20.8c-5.46 0-9.9-4.44-9.9-9.9S5.44 1 10.9 1s9.9 4.44 9.9 9.9c0 2.41-.865 4.62-2.3 6.34l4.03 4.03a.9.9 0 0 1 0 1.27.9.9 0 0 1-.635.26.94.94 0 0 1-.635-.26l-4.032-4.032A9.86 9.86 0 0 1 10.9 20.8m0-18c-4.47 0-8.1 3.63-8.1 8.1S6.43 19 10.9 19s8.1-3.63 8.1-8.1-3.63-8.1-8.1-8.1" clipRule="evenodd" /><path fill="currentColor" d="M21.895 22.8h.005-.01z" /></svg>;
});
ZoomIn.displayName = "ZoomIn";
export { ZoomIn };
export default ZoomIn;