import * as React from 'react';
const Lock = React.forwardRef(function Lock(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M11.9 17.3c-.5 0-.9-.4-.9-.9v-2c0-.5.4-.9.9-.9s.9.4.9.9v2c0 .5-.4.9-.9.9" /><path fill="currentColor" fillRule="evenodd" d="M17.3 8.263a4.41 4.41 0 0 1 3.22 3.687c.14 1.02.28 2.22.28 3.47s-.14 2.45-.28 3.46c-.29 2.12-2.03 3.74-4.14 3.83-1.46.07-2.92.1-4.48.1v-.01c-1.56 0-3.02-.03-4.48-.1-2.11-.1-3.86-1.71-4.14-3.83-.14-1.01-.28-2.22-.28-3.46s.14-2.45.28-3.46c.247-1.802 1.541-3.243 3.22-3.69V6.4C6.5 3.42 8.92 1 11.9 1s5.4 2.42 5.4 5.4zm-1.8-.178V6.4c0-1.98-1.61-3.6-3.6-3.6S8.3 4.42 8.3 6.4v1.685c2.377-.083 4.83-.083 7.2 0M11.9 9.8c-1.52 0-2.96.03-4.4.1-1.24.06-2.27 1.02-2.44 2.28-.13.95-.26 2.08-.26 3.22s.13 2.27.26 3.22c.17 1.26 1.2 2.22 2.44 2.28 2.86.13 5.94.13 8.8 0 1.25-.06 2.27-1.02 2.44-2.28.13-.95.26-2.08.26-3.22s-.13-2.27-.26-3.23c-.17-1.26-1.2-2.22-2.44-2.28-1.44-.07-2.88-.1-4.4-.1z" clipRule="evenodd" /></svg>;
});
Lock.displayName = "Lock";
export { Lock };
export default Lock;