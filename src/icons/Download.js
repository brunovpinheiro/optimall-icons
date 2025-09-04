import * as React from 'react';
const Download = React.forwardRef(function Download(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M9.24 12.62c1.03 1.32 1.78 2.18 2.66 2.18v-.01c.88 0 1.63-.86 2.66-2.18.19-.25.36-.47.48-.59a.9.9 0 0 0-.02-1.27.9.9 0 0 0-1.27.02c-.15.16-.36.42-.61.74-.041.057-.097.125-.158.201q-.087.106-.182.229V3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.05l-.194-.246q-.081-.105-.146-.184l-.02-.026c-.241-.309-.444-.568-.59-.714a.9.9 0 0 0-1.27-.02.89.89 0 0 0-.02 1.27c.084.091.202.24.341.415l.14.175" /><path fill="currentColor" d="M10.68 20.8h2.44c2.83 0 4.39 0 5.66-.9s1.79-2.37 2.73-5.04l.23-.66a.907.907 0 0 0-.55-1.15.907.907 0 0 0-1.15.55l-.23.66c-.84 2.4-1.27 3.6-2.07 4.17s-2.08.57-4.62.57h-2.44c-2.54 0-3.82 0-4.62-.57-.793-.565-1.213-1.75-2.049-4.11l-.02-.06-.23-.66a.9.9 0 0 0-1.15-.55c-.47.17-.72.68-.55 1.15l.23.66c.94 2.67 1.46 4.14 2.73 5.04s2.83.9 5.66.9" /></svg>;
});
Download.displayName = "Download";
export { Download };
export default Download;