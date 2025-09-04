import * as React from 'react';
const Repeat = React.forwardRef(function Repeat(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.71 5.07c-.24.57-.81.67-1.01.7-.23.03-.52.03-.8.03H9.1c-3.5 0-6.3 2.76-6.3 6.1 0 1.29.41 2.49 1.12 3.48.29.4.2.97-.2 1.25-.41.29-.97.2-1.26-.2A7.73 7.73 0 0 1 1 11.9C1 7.52 4.65 4 9.1 4h7.03l-.47-.45a.9.9 0 0 1-.01-1.27.89.89 0 0 1 1.27-.02l1 .97s.02.03.04.04c.19.19.4.39.54.57.13.17.46.64.21 1.23m1.38 2.1a.9.9 0 0 1 1.26.21 7.7 7.7 0 0 1 1.46 4.52c0 4.39-3.65 7.9-8.09 7.9H7.69l.47.45a.9.9 0 0 1 .02 1.27.9.9 0 0 1-1.27.02l-1-.98s-.02-.02-.04-.03c-.19-.19-.4-.39-.54-.57-.13-.16-.46-.64-.22-1.23.24-.57.81-.67 1.01-.7.23-.03.52-.03.8-.03h7.81c3.5 0 6.29-2.75 6.29-6.1 0-1.29-.41-2.49-1.12-3.48a.9.9 0 0 1 .21-1.26z" clipRule="evenodd" /></svg>;
});
Repeat.displayName = "Repeat";
export { Repeat };
export default Repeat;