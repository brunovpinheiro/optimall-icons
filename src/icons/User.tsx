import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const User = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M16.31 22.8H7.49c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56.17-.1.33-.19.46-.27 3.57-2.13 8.19-2.13 11.76 0 .14.08.29.17.46.27 1.33.75 3.33 1.88 3.54 3.56.07.56-.04 1.42-.98 2.31-1.47 1.4-2.9 2.05-4.5 2.05zm-4.41-7.99c-1.73 0-3.45.45-4.96 1.35-.15.09-.31.18-.5.29-.82.47-2.54 1.44-2.64 2.22-.03.22.12.49.43.78 1.13 1.08 2.13 1.56 3.26 1.56h8.82c1.12 0 2.13-.48 3.26-1.55.31-.3.46-.56.43-.78-.1-.78-1.81-1.75-2.64-2.22-.18-.1-.35-.2-.5-.29a9.7 9.7 0 0 0-4.96-1.35zm0-3.01c-2.98 0-5.4-2.42-5.4-5.4S8.92 1 11.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6" /></svg>;
});
User.displayName = "User";
export { User };
export default User;