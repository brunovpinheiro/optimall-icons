import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Chart = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M11.5 17.4c0 .5.4.9.9.9s.9-.4.9-.9v-10c0-.5-.4-.9-.9-.9s-.9.4-.9.9zm-5 0c0 .5.4.9.9.9s.9-.4.9-.9v-4c0-.5-.4-.9-.9-.9s-.9.4-.9.9zm10.9.9c-.5 0-.9-.4-.9-.9v-6c0-.5.4-.9.9-.9s.9.4.9.9v6c0 .5-.4.9-.9.9" /><path fill="currentColor" fillRule="evenodd" d="M3.65 21.15c1.66 1.65 4.03 1.65 8.75 1.65s7.09 0 8.75-1.65c1.65-1.66 1.65-4.02 1.65-8.75s0-7.09-1.65-8.75C19.49 2 17.12 2 12.4 2S5.31 2 3.66 3.65C2 5.31 1.99 7.67 1.99 12.4s0 7.1 1.66 8.75M4.93 4.93C6.06 3.8 8.18 3.8 12.4 3.8s6.34 0 7.47 1.13S21 8.18 21 12.4s0 6.34-1.13 7.47S16.62 21 12.4 21s-6.34 0-7.47-1.13S3.8 16.62 3.8 12.4s0-6.34 1.13-7.47" clipRule="evenodd" /></svg>;
});
Chart.displayName = "Chart";
export { Chart };
export default Chart;