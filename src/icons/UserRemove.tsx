import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const UserRemove = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.9 11.8c-2.98 0-5.4-2.42-5.4-5.4S8.92 1 11.9 1s5.4 2.42 5.4 5.4-2.42 5.4-5.4 5.4m0-9a3.61 3.61 0 0 0-3.6 3.6c0 1.98 1.62 3.6 3.6 3.6s3.6-1.62 3.6-3.6-1.62-3.6-3.6-3.6" clipRule="evenodd" /><path fill="currentColor" d="M6.49 22.8c-1.6 0-3.03-.65-4.5-2.05-.93-.89-1.04-1.75-.97-2.31.21-1.68 2.21-2.81 3.54-3.56l.18-.105q.154-.088.28-.165c2.55-1.52 5.68-1.99 8.59-1.29.48.12.78.6.67 1.08-.12.48-.61.78-1.08.67-2.46-.59-5.1-.2-7.25 1.08q-.15.089-.323.188l-.177.102-.052.03c-.838.48-2.49 1.426-2.588 2.19-.03.22.12.49.43.78C4.37 20.52 5.37 21 6.5 21h6.41c.5 0 .9.4.9.9s-.4.9-.9.9zm15.405 0h.005-.01zm-.635-.26a.94.94 0 0 0 .635.26.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-2.36-2.36 2.36-2.36a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-2.36 2.36-2.36-2.36a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l2.36 2.36-2.36 2.36a.9.9 0 0 0 0 1.27.9.9 0 0 0 1.27 0l2.36-2.36z" /></svg>;
});
UserRemove.displayName = "UserRemove";
export { UserRemove };
export default UserRemove;