import * as React from 'react';
const ArrowLeftDown = React.forwardRef(function ArrowLeftDown(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.636 6.636a.9.9 0 1 0-1.273-1.272L6.96 15.767a20 20 0 0 1-.06-1.836 41 41 0 0 1 .123-2.797l.004-.045v-.01l.001-.004a.9.9 0 1 0-1.794-.15v.005l-.001.013-.004.05a30 30 0 0 0-.057.849c-.032.55-.065 1.297-.071 2.075-.006.771.014 1.599.096 2.301.041.35.1.695.188.998.081.277.219.638.49.909.27.27.632.409.908.49.303.088.648.147.998.187.703.082 1.53.103 2.302.097a43 43 0 0 0 2.924-.128l.05-.004.013-.001h.005L13 17.867l.075.897a.9.9 0 1 0-.151-1.793h-.014l-.045.004a30 30 0 0 1-.81.055 41 41 0 0 1-1.986.068 20 20 0 0 1-1.836-.06M6.13 11l-.897-.075z" clipRule="evenodd" /></svg>;
});
ArrowLeftDown.displayName = "ArrowLeftDown";
export { ArrowLeftDown };
export default ArrowLeftDown;