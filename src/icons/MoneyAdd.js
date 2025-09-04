import * as React from 'react';
const MoneyAdd = React.forwardRef(function MoneyAdd(props, ref) {
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
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.317 4.68c1.218-.57 2.857-.93 4.683-.93 1.417 0 2.597.236 3.419.471.344.098.624.196.831.275V11.5h1.5V3.536l-.416-.207-.003-.002-.008-.004-.024-.011-.082-.038a8 8 0 0 0-.298-.127 11 11 0 0 0-1.088-.368A14 14 0 0 0 17 2.25c-2.008 0-3.87.395-5.317 1.07-1.218.57-2.857.93-4.683.93h-.018c-1.009 0-2.337 0-4.703-.946L1.25 2.892v16.616l.471.188C4.341 20.744 5.88 20.75 7 20.75c2.008 0 3.87-.395 5.317-1.07l-.634-1.36c-1.218.57-2.857.93-4.683.93h-.018c-.94 0-2.157 0-4.232-.765V5.075c2.01.67 3.284.675 4.25.675 2.008 0 3.87-.395 5.317-1.07M22 4c.335-.67.335-.671.334-.671zm-2.75 17v-2.75H22v-1.5h-2.75V14h-1.5v2.75H15v1.5h2.75V21zM12 9.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 11.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M6.5 13.509V11.5h-2v2.009z" clipRule="evenodd" /></svg>;
});
MoneyAdd.displayName = "MoneyAdd";
export { MoneyAdd };
export default MoneyAdd;