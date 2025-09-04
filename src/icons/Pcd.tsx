import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Pcd = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M15.537 8.229a.9.9 0 0 1 .926 1.542c-.73.438-1.605.762-2.563.948v3.172l.973 3.89.018.091a.9.9 0 0 1-1.738.435l-.026-.088-.83-3.319h-.594l-.83 3.319a.9.9 0 0 1-1.746-.438l.973-3.89V10.72a8.1 8.1 0 0 1-2.335-.818l-.228-.13-.077-.051a.9.9 0 0 1 .922-1.536l.08.044.169.095c.859.469 2.038.776 3.369.776 1.42 0 2.667-.35 3.537-.871" /><path fill="currentColor" d="M12.169 5.108a1.65 1.65 0 1 1-1.81 1.811l-.01-.169.01-.169A1.65 1.65 0 0 1 12 5.1z" /><path fill="currentColor" fillRule="evenodd" d="M12 1.1c6.02 0 10.9 4.88 10.9 10.9S18.02 22.9 12 22.9 1.1 18.02 1.1 12 5.98 1.1 12 1.1m0 1.8A9.1 9.1 0 0 0 2.9 12a9.1 9.1 0 0 0 9.1 9.1 9.1 9.1 0 0 0 9.1-9.1A9.1 9.1 0 0 0 12 2.9" clipRule="evenodd" /></svg>;
});
Pcd.displayName = "Pcd";
export { Pcd };
export default Pcd;