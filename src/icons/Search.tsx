import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Search = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 10.9c0 5.46 4.44 9.9 9.9 9.9a9.86 9.86 0 0 0 6.328-2.292l4.032 4.032a.94.94 0 0 0 .635.26h-.005.01-.005a.9.9 0 0 0 .635-.26.9.9 0 0 0 0-1.27l-4.03-4.03a9.86 9.86 0 0 0 2.3-6.34c0-5.46-4.44-9.9-9.9-9.9S1 5.44 1 10.9m1.8 0c0-4.47 3.63-8.1 8.1-8.1S19 6.43 19 10.9 15.37 19 10.9 19s-8.1-3.63-8.1-8.1" clipRule="evenodd" /></svg>;
});
Search.displayName = "Search";
export { Search };
export default Search;