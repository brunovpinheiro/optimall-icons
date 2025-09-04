import * as React from 'react';
const ArrowLeft = React.forwardRef(function ArrowLeft(props, ref) {
  const {
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    className,
    ...rest
  } = props;
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M8.37 17.62c.16.12.34.18.53.18v.02c.28 0 .55-.13.73-.37.3-.4.21-.97-.19-1.26-1.58-1.173-3.092-2.485-3.942-3.39H19.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H5.515c.853-.907 2.355-2.211 3.925-3.37.4-.3.48-.86.19-1.26-.3-.4-.86-.48-1.26-.19C5.92 7.98 3 10.44 3 11.9s2.92 3.92 5.37 5.72" /></svg>;
});
ArrowLeft.displayName = "ArrowLeft";
export { ArrowLeft };
export default ArrowLeft;