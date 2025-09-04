import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Chat = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M5.22 22.8c-.44 0-.89-.04-1.33-.12a.92.92 0 0 1-.68-.57c-.11-.3-.05-.63.15-.88.45-.56.76-1.23.9-1.95.03-.18-.07-.41-.28-.62C2.06 16.71 1 14.16 1 11.47 1 5.7 5.89 1 11.9 1s10.9 4.7 10.9 10.47-4.89 10.47-10.9 10.47c-.68.04-1.41-.07-2.1-.2-.25-.05-.51-.1-.58-.1 0 .01-.26.15-.51.29-1.08.58-2.28.87-3.49.87m6.68-20c-5.02 0-9.1 3.89-9.1 8.67 0 2.21.87 4.31 2.46 5.92.63.64.91 1.45.76 2.22-.09.48-.24.94-.43 1.38.78-.05 1.56-.27 2.26-.65.55-.29.82-.43 1.13-.48s.59 0 1.15.11c.58.11 1.17.16 1.75.16h.01c5.02 0 9.1-3.89 9.1-8.67S16.92 2.8 11.9 2.8" /><path fill="currentColor" d="M15.9 13.15a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-4 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-3.99 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" /></svg>;
});
Chat.displayName = "Chat";
export { Chat };
export default Chat;