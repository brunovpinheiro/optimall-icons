import * as React from 'react';
const Female1 = React.forwardRef(function Female1(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M20.156 8.906C20.156 4.41 16.497.75 12 .75S3.844 4.41 3.844 8.906c0 4.148 3.112 7.583 7.125 8.091v1.472H9.28a1.031 1.031 0 1 0 0 2.062h1.688v1.688a1.031 1.031 0 1 0 2.062 0V20.53h1.688a1.031 1.031 0 1 0 0-2.062H13.03v-1.472c4.013-.508 7.125-3.943 7.125-8.09m-14.25 0A6.1 6.1 0 0 1 12 2.812a6.1 6.1 0 0 1 6.094 6.094A6.1 6.1 0 0 1 12 15a6.1 6.1 0 0 1-6.094-6.094" /></svg>;
});
Female1.displayName = "Female1";
export { Female1 };
export default Female1;