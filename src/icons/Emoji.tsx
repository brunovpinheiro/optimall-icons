import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Emoji = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.9a9.1 9.1 0 1 0 0 18.2 9.1 9.1 0 0 0 0-18.2M1.1 12C1.1 5.98 5.98 1.1 12 1.1S22.9 5.98 22.9 12 18.02 22.9 12 22.9 1.1 18.02 1.1 12" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M16.54 14.28a.9.9 0 0 1 .18 1.26A5.9 5.9 0 0 1 12 17.9a5.9 5.9 0 0 1-4.72-2.36.9.9 0 1 1 1.44-1.08c.749.997 1.939 1.64 3.28 1.64s2.53-.643 3.28-1.64a.9.9 0 0 1 1.26-.18M6.75 9c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m7.99 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25" clipRule="evenodd" /></svg>;
});
Emoji.displayName = "Emoji";
export { Emoji };
export default Emoji;