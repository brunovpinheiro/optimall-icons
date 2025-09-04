import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Signature = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M1.9 22.8a.9.9 0 0 1-.67-1.5c1.45-1.62 2.77-3.77 3.82-6.01C1.91 11.22.82 6.96 2.12 3.8c.65-1.6 1.87-2.64 3.25-2.78 1.29-.14 2.54.53 3.43 1.83 1.49 2.18.48 7.32-1.63 12.13.04.02.05.03.05.03.14-.08.61-.74.96-1.23.43-.61.93-1.3 1.56-1.95.73-.75 1.66-.91 2.5-.44.16.09.32.21.47.34.61-.85 1.41-1.52 2.36-1.7 1.29-.25 2.12.75 2.8 1.54.52.61 1.01 1.19 1.57 1.23.48.03 1.12-.29 1.86-.95.37-.33.94-.29 1.27.08s.29.94-.08 1.27c-1.15 1.01-2.19 1.46-3.18 1.39-1.31-.1-2.14-1.08-2.81-1.87-.39-.46-.84-.98-1.08-.94-.53.1-1.12.68-1.59 1.54.43.98.61 2.07.42 2.8-.18.68-.7 1.11-1.35 1.11s-1.38-.41-1.49-1.56c-.06-.59.09-1.43.41-2.27-.13-.19-.28-.35-.44-.45-.1-.06-.15-.09-.34.11-.54.56-.99 1.19-1.39 1.74-.74 1.04-1.39 1.94-2.41 1.98-.31 0-.59-.07-.83-.19-1.12 2.25-2.46 4.34-3.85 5.89-.18.2-.42.3-.67.3zm3.8-20h-.14c-.72.08-1.38.7-1.78 1.67-.77 1.86-.55 5.09 2.1 8.9C7.53 9.24 8.24 5.2 7.32 3.86c-.48-.69-1.04-1.07-1.62-1.07zm13.2 19h-10c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h10c.5 0 .9.4.9.9s-.4.9-.9.9" /></svg>;
});
Signature.displayName = "Signature";
export { Signature };
export default Signature;