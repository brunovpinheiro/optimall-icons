import * as React from 'react';
const StoreFill = React.forwardRef(function StoreFill(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M10.9 19.28h-4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h4c.5 0 .9.4.9.9s-.4.9-.9.9" /><path fill="currentColor" fillRule="evenodd" d="M2 12.12a2.8 2.8 0 0 1-.46-.62c-.76-1.41-.82-2.25.43-4.12.99-1.49.99-2.18.99-2.54 0-.59.23-1.44.88-2.05.39-.38 1.13-.81 2.25-.76L17.67 2c.68-.04 1.73.25 2.46.95.61.59.7 1.39.77 2.02.11.96.42 1.71 1.02 2.48 1.4 1.79.98 3.6 0 4.52l-.12.109v3.831c0 2.98 0 4.62-1.14 5.76s-2.78 1.14-5.76 1.14h-6c-2.98 0-4.62 0-5.76-1.14S2 18.89 2 15.91zm15.62.93c.42.17.86.26 1.3.26h.03q.525 0 1.05-.166v2.766c0 2.75-.03 3.9-.62 4.49-.59.6-1.73.62-4.48.62h-6c-2.75 0-3.89-.03-4.48-.62-.6-.59-.62-1.73-.62-4.49v-2.776c.323.092.644.15.94.176 1.11.02 2.06-.35 2.81-1.08.2-.19.37-.41.53-.64 1.59 1.86 4.05 1.85 5.37 1.48.84-.23 1.65-.77 2.27-1.47.42.63 1.03 1.09 1.9 1.45" clipRule="evenodd" /></svg>;
});
StoreFill.displayName = "StoreFill";
export { StoreFill };
export default StoreFill;