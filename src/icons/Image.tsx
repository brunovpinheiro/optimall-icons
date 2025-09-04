import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Image = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.4 10.8C7.08 10.8 6 9.72 6 8.4S7.08 6 8.4 6s2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4m0-3c-.33 0-.6.27-.6.6s.27.6.6.6.6-.27.6-.6-.27-.6-.6-.6" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M13.9 21.8h-4c-4.01 0-6.03 0-7.46-1.44C1 18.93 1 16.91 1 12.9v-2c0-4.01 0-6.03 1.43-7.46C3.87 2 5.88 2 9.9 2h4c4.01 0 6.03 0 7.46 1.44 1.44 1.44 1.44 3.45 1.44 7.46v2c0 4.01 0 6.03-1.44 7.46-1.43 1.44-3.45 1.44-7.46 1.44m-4-18c-3.52 0-5.28 0-6.19.91S2.8 7.38 2.8 10.9v2c0 1.261 0 2.297.042 3.148L5.38 13.19c.76-.85 2.19-.89 2.99-.09l1.52 1.53 4.02-4.02c.8-.8 2.23-.77 2.99.07l4.088 4.46C21 14.488 21 13.745 21 12.9v-2c0-3.52 0-5.28-.91-6.19s-2.67-.91-6.19-.91zm10.894 13.783c-.133.668-.349 1.152-.704 1.507-.91.91-2.67.91-6.19.91h-4c-3.52 0-5.28 0-6.19-.91a2.2 2.2 0 0 1-.487-.754L6.71 14.41c.1-.11.28-.11.38-.01l2.16 2.16c.17.16.4.26.64.26a.9.9 0 0 0 .64-.26l4.66-4.66c.1-.11.29-.11.39 0l5.15 5.62a1 1 0 0 0 .064.063" clipRule="evenodd" /></svg>;
});
Image.displayName = "Image";
export { Image };
export default Image;