import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const TShirtFill = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.824 2.281A.75.75 0 0 1 6.41 2h3a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .586.281l3.44 4.302a1.75 1.75 0 0 1-.128 2.33l-3.148 3.148v7.689a1.75 1.75 0 0 1-1.75 1.75h-10a1.75 1.75 0 0 1-1.75-1.75v-7.69L2.513 8.914a1.75 1.75 0 0 1-.13-2.33z" clipRule="evenodd" /></svg>;
});
TShirtFill.displayName = "TShirtFill";
export { TShirtFill };
export default TShirtFill;