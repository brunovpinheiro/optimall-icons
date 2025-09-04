import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const CodeSSlash = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.365 7.362a.9.9 0 0 1 1.273.003l1.84 1.85.037.038c.354.356.681.685.912.989.254.335.473.742.473 1.258s-.22.923-.473 1.258c-.23.304-.558.633-.912.989l-.037.037-1.84 1.85a.9.9 0 1 1-1.277-1.269l1.84-1.85c.405-.407.643-.649.792-.844a.8.8 0 0 0 .103-.163l.003-.008-.003-.008a.8.8 0 0 0-.103-.163c-.149-.195-.387-.437-.792-.844l-1.84-1.85a.9.9 0 0 1 .004-1.273m-8.731 0a.9.9 0 0 1 .004 1.273l-1.84 1.85c-.405.407-.643.649-.791.845a.8.8 0 0 0-.106.17l.002.008a1 1 0 0 0 .104.163c.148.195.386.437.791.844l1.84 1.85a.9.9 0 1 1-1.277 1.27l-1.84-1.85-.037-.038c-.354-.357-.681-.685-.911-.989-.255-.335-.473-.742-.473-1.258s.218-.923.473-1.258c.23-.304.557-.632.911-.989l.038-.038 1.84-1.85a.9.9 0 0 1 1.272-.003m7.134-4.221a.9.9 0 0 1 .59 1.127l-5 16a.9.9 0 1 1-1.717-.536l5-16a.9.9 0 0 1 1.127-.591" clipRule="evenodd" /></svg>;
});
CodeSSlash.displayName = "CodeSSlash";
export { CodeSSlash };
export default CodeSSlash;