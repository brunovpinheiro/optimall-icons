import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const FolderFill = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.15 21.8H11.9c-4.96 0-7.44 0-9.17-1.73S1 15.86 1 10.9V7.84C1 5.87 1 4.88 1.49 4c.35-.63.87-1.15 1.51-1.51C3.89 2 4.88 2 6.84 2c1.23 0 1.91 0 2.57.25 1.44.54 2.05 1.76 2.58 2.83l.46.92h4.19c2.29 0 3.43 0 4.42.66.42.28.79.64 1.07 1.07.66.99.66 2.13.66 4.42 0 3.69 0 5.54-.99 7.03-.43.65-.98 1.2-1.63 1.63-1.49 1-3.34 1-7.03 1z" clipRule="evenodd" /></svg>;
});
FolderFill.displayName = "FolderFill";
export { FolderFill };
export default FolderFill;