import * as React from 'react';
const AddMoneyCircle = React.forwardRef(function AddMoneyCircle(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M10.9 18.8c-.5 0-.9-.4-.9-.9v-.6h-.6c-1.32 0-2.4-1.08-2.4-2.4 0-.5.4-.9.9-.9s.9.4.9.9c0 .33.27.6.6.6h3c.33 0 .6-.27.6-.6v-.5c0-.33-.27-.6-.6-.6h-3c-1.32 0-2.4-1.08-2.4-2.4v-.5c0-1.32 1.08-2.4 2.4-2.4h.6v-.6c0-.5.4-.9.9-.9s.9.4.9.9v.6h.6c1.32 0 2.4 1.08 2.4 2.4 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.33-.27-.6-.6-.6h-3c-.33 0-.6.27-.6.6v.5c0 .33.27.6.6.6h3c1.32 0 2.4 1.08 2.4 2.4v.5c0 1.32-1.08 2.4-2.4 2.4h-.6v.6c0 .5-.4.9-.9.9" /><path fill="currentColor" d="M10.9 22.8c-5.46 0-9.9-4.44-9.9-9.9S5.44 3 10.9 3a10 10 0 0 1 1.1.06c.49.06.85.5.79.99s-.49.85-.99.79c-.3-.03-.6-.05-.9-.05-4.47.01-8.1 3.64-8.1 8.11S6.43 21 10.9 21a8.104 8.104 0 0 0 8.05-9c-.05-.49.3-.94.8-.99.48-.06.94.3.99.8.04.36.06.73.06 1.1 0 5.46-4.44 9.9-9.9 9.9z" /><path fill="currentColor" d="M18.4 9.8c-.5 0-.9-.4-.9-.9V6.3h-2.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.6V1.9c0-.5.4-.9.9-.9s.9.4.9.9v2.6h2.6c.5 0 .9.4.9.9s-.4.9-.9.9h-2.6v2.6c0 .5-.4.9-.9.9" /></svg>;
});
AddMoneyCircle.displayName = "AddMoneyCircle";
export { AddMoneyCircle };
export default AddMoneyCircle;