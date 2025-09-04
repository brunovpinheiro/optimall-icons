import * as React from 'react';
const Table = React.forwardRef(function Table(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M20.75 3.25C19.09 1.6 16.73 1.6 12 1.6s-7.09 0-8.75 1.65S1.6 7.28 1.6 12s0 7.09 1.65 8.75C4.9 22.4 7.27 22.4 12 22.4s7.09 0 8.75-1.65c1.65-1.66 1.65-4.03 1.65-8.75s0-7.09-1.65-8.75M12 3.4c4.22 0 6.34 0 7.47 1.13.71.71.97 1.81 1.07 3.57H3.46c.1-1.76.36-2.86 1.07-3.57C5.66 3.4 7.78 3.4 12 3.4m8.6 8.6v.1h-7.7V9.9h7.69V12zM3.4 12V9.9h7.69v2.2H3.4zm7.7 1.9v2.2H3.47c-.04-.64-.06-1.37-.07-2.2zm1.8 0h7.69c0 .83-.03 1.56-.07 2.2h-7.63v-2.2zm-9.17 4h7.37v2.7c-3.62 0-5.53-.08-6.57-1.13-.39-.39-.64-.9-.8-1.57m9.17 2.7v-2.7h7.37c-.17.67-.41 1.18-.8 1.57-1.04 1.04-2.96 1.12-6.57 1.13" /></svg>;
});
Table.displayName = "Table";
export { Table };
export default Table;