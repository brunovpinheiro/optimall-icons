import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Upload = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M11.89 14.8h.01-.02zm-.89-.9c0 .497.395.895.89.9a.896.896 0 0 0 .89-.9V5.86q.12.148.219.274l.131.166.131.163c.193.24.356.444.48.567.34.36.91.37 1.27.02a.89.89 0 0 0 .02-1.27 5 5 0 0 1-.31-.372l-.17-.218c-1.03-1.31-1.78-2.18-2.66-2.18s-1.62.86-2.66 2.18l-.172.218a5 5 0 0 1-.309.372.89.89 0 0 0 .02 1.27c.35.35.92.34 1.27-.02.124-.123.287-.327.48-.567l.13-.163c.09-.12.21-.27.35-.44z" /><path fill="currentColor" d="M10.68 20.8h2.44c2.83 0 4.39 0 5.66-.9s1.79-2.37 2.73-5.04l.23-.66a.907.907 0 0 0-.55-1.15.9.9 0 0 0-1.15.55l-.24.67c-.84 2.39-1.27 3.59-2.07 4.16s-2.08.57-4.62.57h-2.44c-2.54 0-3.81 0-4.62-.57-.793-.565-1.213-1.75-2.049-4.11l-.02-.06-.23-.66a.9.9 0 0 0-1.15-.55c-.47.17-.72.68-.55 1.15l.24.67c.94 2.66 1.46 4.13 2.73 5.03s2.83.9 5.66.9" /></svg>;
});
Upload.displayName = "Upload";
export { Upload };
export default Upload;