import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Smartphone = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M10 18.9c0-.5.4-.9.9-.9h2c.5 0 .9.4.9.9s-.4.9-.9.9h-2c-.5 0-.9-.4-.9-.9" /><path fill="currentColor" fillRule="evenodd" d="M19.66 4.94c-.14-1.05-.44-1.94-1.15-2.65s-1.6-1.01-2.65-1.15C14.85 1 13.56 1 11.97 1h-.13c-1.6 0-2.89 0-3.9.14-1.05.14-1.94.44-2.65 1.15s-1.01 1.6-1.15 2.65C4 5.95 4 7.24 4 8.83v6.14c0 1.59 0 2.88.14 3.89.14 1.05.44 1.94 1.15 2.65s1.6 1.01 2.65 1.15c1.01.14 2.3.14 3.9.14h.13c1.59 0 2.88 0 3.89-.14 1.05-.14 1.94-.44 2.65-1.15s1.01-1.6 1.15-2.65c.14-1.01.14-2.3.14-3.89V8.83c0-1.59 0-2.88-.14-3.89M18 14.9c0 1.68 0 2.84-.12 3.72-.11.85-.32 1.3-.64 1.62s-.77.53-1.62.64c-.88.12-2.04.12-3.72.12s-2.84 0-3.72-.12c-.85-.11-1.3-.32-1.62-.64s-.52-.77-.64-1.62c-.12-.88-.12-2.04-.12-3.72v-6c0-1.68 0-2.84.12-3.72.12-.85.32-1.3.64-1.62.313-.313.75-.52 1.562-.632.1.786.28 1.672.958 2.272.68.6 1.53.6 2.82.6v.01c1.29 0 2.14 0 2.82-.6.68-.602.859-1.493.96-2.282.811.112 1.247.32 1.56.632.32.32.53.77.64 1.62.12.88.12 2.04.12 3.72zM13.879 2.811c-.06.436-.154.867-.349 1.039-.17.15-.85.15-1.63.15s-1.46 0-1.63-.15c-.193-.178-.287-.606-.347-1.039.57-.011 1.222-.011 1.977-.011s1.408 0 1.979.011" clipRule="evenodd" /></svg>;
});
Smartphone.displayName = "Smartphone";
export { Smartphone };
export default Smartphone;