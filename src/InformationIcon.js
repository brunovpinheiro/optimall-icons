import React, { forwardRef } from 'react';
export const InformationIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "information"} ref={ref} {...props}><path fill="currentColor" d="M12.14 17.8c-.5 0-.9-.4-.9-.9v-5.1h-.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9c.58 0 1.08 0 1.49.41.41.42.41.92.41 1.49v5c0 .5-.4.9-.9.9M11 7.9c0 .5.4.9.9.9s.9-.4.9-.9-.4-.9-.9-.9-.9.4-.9.9" /><path fill="currentColor" fillRule="evenodd" d="M11.9 22.8C5.89 22.8 1 17.91 1 11.9S5.89 1 11.9 1s10.9 4.89 10.9 10.9-4.89 10.9-10.9 10.9m0-20c-5.02 0-9.1 4.08-9.1 9.1S6.88 21 11.9 21s9.1-4.08 9.1-9.1-4.08-9.1-9.1-9.1" clipRule="evenodd" /></svg>);
export default InformationIcon;