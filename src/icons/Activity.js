import * as React from 'react';
const Activity = React.forwardRef(function Activity(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M13.35 16.8h.05c.34 0 .65-.19.8-.5l1.75-3.5h1.94c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-2.5c-.34 0-.65.2-.8.5l-1.08 2.15-2.28-6.07a.92.92 0 0 0-.8-.58.9.9 0 0 0-.85.5L7.83 11H5.89c-.5 0-.9.4-.9.9s.4.9.9.9h2.5c.34 0 .65-.2.8-.5l1.08-2.15 2.28 6.07c.13.33.44.56.8.58" /><path fill="currentColor" fillRule="evenodd" d="M3.58 20.22c1.58 1.58 3.83 1.58 8.32 1.58s6.74 0 8.32-1.58 1.58-3.83 1.58-8.32 0-6.74-1.58-8.32S16.38 2 11.9 2 5.16 2 3.58 3.58 2 7.41 2 11.9s0 6.74 1.58 8.32M4.86 4.85C5.91 3.8 7.91 3.8 11.9 3.8v-.01h.11c3.907 0 5.89 0 6.93 1.05 1.05 1.06 1.05 3.06 1.05 7.05s0 5.99-1.05 7.05c-1.05 1.05-3.06 1.05-7.04 1.05s-5.99 0-7.04-1.05-1.05-3.05-1.05-7.04 0-6 1.05-7.05" clipRule="evenodd" /></svg>;
});
Activity.displayName = "Activity";
export { Activity };
export default Activity;