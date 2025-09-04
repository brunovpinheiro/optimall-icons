import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const FullScreen = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M2.1 15.5a.9.9 0 0 1 1.8 0c0 1.46.01 1.992.133 2.4l.063.183A3.1 3.1 0 0 0 6.1 19.967c.306.093.68.121 1.465.13l.934.003.092.005a.9.9 0 0 1 0 1.79L8.5 21.9l-.915-.002c-.838-.007-1.461-.043-2.007-.209a4.9 4.9 0 0 1-3.169-2.977l-.098-.29C2.09 17.694 2.1 16.83 2.1 15.5m18 0a.9.9 0 0 1 1.8 0c0 1.164.008 1.971-.138 2.643l-.073.279a4.9 4.9 0 0 1-2.977 3.169l-.29.098c-.728.221-1.592.211-2.922.211a.9.9 0 0 1 0-1.8c1.46 0 1.992-.01 2.4-.133l.183-.063a3.1 3.1 0 0 0 1.884-2.005l.04-.16c.085-.395.093-.96.093-2.239m-18-7c0-1.33-.01-2.195.21-2.923l.1-.289a4.9 4.9 0 0 1 3.167-2.977l.28-.073C6.53 2.092 7.337 2.1 8.5 2.1a.9.9 0 0 1 0 1.8c-1.278 0-1.844.008-2.24.092l-.16.041a3.1 3.1 0 0 0-2.004 1.884l-.063.184C3.91 6.508 3.9 7.04 3.9 8.5a.9.9 0 0 1-1.8 0m18 0c0-1.46-.01-1.992-.133-2.4l-.063-.183a3.1 3.1 0 0 0-1.82-1.821l-.184-.063c-.306-.092-.682-.121-1.466-.13L15.5 3.9l-.092-.004A.9.9 0 0 1 15.5 2.1l.915.002c.838.007 1.461.043 2.007.209l.29.098a4.9 4.9 0 0 1 2.879 2.88l.098.288.073.28c.146.672.139 1.48.139 2.643a.9.9 0 0 1-1.801 0" /></svg>;
});
FullScreen.displayName = "FullScreen";
export { FullScreen };
export default FullScreen;