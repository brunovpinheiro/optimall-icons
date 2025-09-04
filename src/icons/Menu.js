import * as React from 'react';
const Menu = React.forwardRef(function Menu(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M20 4.1a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8zm0 7a.9.9 0 0 1 0 1.8H4a.9.9 0 0 1 0-1.8z" /></svg>;
});
Menu.displayName = "Menu";
export { Menu };
export default Menu;