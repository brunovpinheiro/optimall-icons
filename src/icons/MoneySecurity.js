import * as React from 'react';
const MoneySecurity = React.forwardRef(function MoneySecurity(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M11 15.93c0 .5.4.9.9.9s.9-.4.9-.9v-.21c1.17-.31 2-1.21 2-2.29 0-1.35-1.27-2.4-2.9-2.4-.67 0-1.1-.36-1.1-.6s.43-.6 1.1-.6c.55 0 .96.25 1.07.48.21.45.75.64 1.2.43s.64-.75.43-1.2c-.32-.68-.99-1.19-1.8-1.4v-.22c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.21c-1.17.31-2 1.21-2 2.29 0 1.35 1.27 2.4 2.9 2.4.67 0 1.1.36 1.1.6s-.43.6-1.1.6c-.55 0-.96-.25-1.07-.48a.903.903 0 0 0-1.2-.43c-.45.21-.64.75-.43 1.2.32.68.99 1.18 1.8 1.4z" /><path fill="currentColor" fillRule="evenodd" d="M10.116 22.264c.626.328 1.081.566 1.784.566v-.01c.72 0 1.19-.24 1.83-.58 2.42-1.28 8.07-4.93 8.07-11.13v-2.9c0-1.78 0-2.76-.59-3.54s-1.6-1.07-3.62-1.64c-1.04-.3-2.09-.67-3.11-1.13-1.348-.6-1.963-.9-2.579-.9s-1.234.3-2.591.9c-1.02.45-2.07.83-3.11 1.13l-.043.012c-1.981.572-2.991.863-3.567 1.628C2 5.45 2 6.43 2 8.21v2.9c0 6.2 5.65 9.85 8.07 11.13zm.013-18.753c.868-.382 1.549-.681 1.771-.681.224 0 .858.279 1.682.642l.178.078c1.1.49 2.23.9 3.35 1.22 1.42.4 2.45.7 2.67.99S20 6.91 20 8.21v2.9c0 5.03-4.45 8.14-7.11 9.54-.6.32-.73.38-.99.38-.255 0-.385-.067-.954-.361l-.036-.019c-2.65-1.4-7.11-4.51-7.11-9.54v-2.9c0-1.3 0-2.16.22-2.45s1.25-.59 2.67-.99a25.5 25.5 0 0 0 3.439-1.259" clipRule="evenodd" /></svg>;
});
MoneySecurity.displayName = "MoneySecurity";
export { MoneySecurity };
export default MoneySecurity;