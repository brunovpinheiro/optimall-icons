import * as React from 'react';
const Logout = React.forwardRef(function Logout(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M12.6 2.25C6.93 2.25 2.25 6.57 2.25 12s4.68 9.75 10.35 9.75q.765 0 1.502-.102l-.204-1.486a10 10 0 0 1-1.298.088c-4.934 0-8.85-3.738-8.85-8.25 0-4.511 3.916-8.25 8.85-8.25q.662 0 1.298.088l.204-1.486q-.736-.101-1.502-.102" /><path fill="currentColor" d="m17.47 9.53 1.72 1.72H11v1.5h8.19l-1.72 1.72 1.06 1.06L22.06 12l-3.53-3.53z" /></svg>;
});
Logout.displayName = "Logout";
export { Logout };
export default Logout;