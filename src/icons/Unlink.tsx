import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Unlink = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M6.9 4.88c.5 0 .9-.4.9-.9V1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v2.08c0 .5.4.9.9.9m9.21 10.26a.9.9 0 0 1 0-1.27v-.01l2.61-2.61A4.35 4.35 0 0 0 20 8.16c0-1.17-.45-2.26-1.28-3.09a4.364 4.364 0 0 0-6.18 0L9.93 7.68a.9.9 0 0 1-1.27 0 .9.9 0 0 1 0-1.27l2.61-2.61a6.174 6.174 0 0 1 8.73 0 6.1 6.1 0 0 1 1.81 4.36c0 1.65-.64 3.2-1.81 4.37l-2.61 2.61c-.18.17-.41.26-.64.26s-.46-.08-.64-.26m-4.85 3.58 2.61-2.61h.01a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a6.15 6.15 0 0 1-4.37 1.81c-1.64 0-3.19-.64-4.36-1.81A6.1 6.1 0 0 1 2 15.63c0-1.64.64-3.19 1.81-4.36l2.61-2.61a.9.9 0 0 1 1.27 0 .9.9 0 0 1 0 1.27l-2.61 2.61a4.364 4.364 0 0 0 0 6.18A4.35 4.35 0 0 0 8.17 20c1.17 0 2.26-.45 3.09-1.28M21.9 16h-2.08c-.5 0-.9.4-.9.9s.4.9.9.9h2.08c.5 0 .9-.4.9-.9s-.4-.9-.9-.9M16 19.82c0-.5.4-.9.9-.9s.9.4.9.9v2.08c0 .5-.4.9-.9.9s-.9-.4-.9-.9zM3.98 6c.5 0 .9.4.9.9s-.4.9-.9.9H1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" /></svg>;
});
Unlink.displayName = "Unlink";
export { Unlink };
export default Unlink;