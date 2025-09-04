import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const RotateLeft = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M15.46 21.29c.16.32.48.51.81.51h.01q.195 0 .39-.09c3.79-1.84 6.14-5.6 6.14-9.81 0-6.01-4.89-10.9-10.9-10.9-2.62 0-5.13.94-7.09 2.64V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v3.13c0 .52.31.96.8 1.14s1.01.03 1.32-.34a9.15 9.15 0 0 1 6.78-3.03c5.01 0 9.09 4.08 9.09 9.1 0 3.51-1.97 6.65-5.13 8.19a.89.89 0 0 0-.42 1.2m-4.72.61c0 .5.4.899.898.9h-.008.01-.002c.498 0 1.005-.03 1.492-.1.49-.06.84-.52.77-1.01a.883.883 0 0 0-1.01-.77c-.41.05-.83.08-1.25.08-.5 0-.9.4-.9.9m-2.66.74c.11.05.23.07.35.07l.01.01a.9.9 0 0 0 .35-1.73c-.34-.14-.68-.31-1.01-.5a.9.9 0 1 0-.9 1.56c.39.22.79.42 1.2.59M3.83 19.5c.17.21.43.32.68.32.2 0 .41-.08.58-.22.38-.32.42-.89.1-1.27-.25-.3-.49-.62-.71-.94a.9.9 0 0 0-1.49 1.01c.26.38.54.75.84 1.1m-2.48-4.63c.11.39.47.65.86.65v.01a.907.907 0 0 0 .86-1.16c-.1-.36-.19-.72-.25-1.09a.9.9 0 0 0-1.04-.73.89.89 0 0 0-.73 1.04c.08.44.18.87.3 1.28m.41-4.21c.04.01.14.01.14.01v.01c.44 0 .82-.32.89-.76.06-.37.14-.74.24-1.1a.895.895 0 0 0-.62-1.11.903.903 0 0 0-1.11.62c-.12.42-.22.86-.29 1.3-.07.49.26.95.75 1.03" /></svg>;
});
RotateLeft.displayName = "RotateLeft";
export { RotateLeft };
export default RotateLeft;