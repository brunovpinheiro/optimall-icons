import React, { forwardRef } from 'react';
export const CreditCardAcceptIcon = forwardRef(({
  className,
  style,
  ariaLabel,
  ...props
}, ref) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className={className} style={style} aria-label={ariaLabel || "credit, card, accept"} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.9 20.8h-.5c-3.96 0-5.95 0-7.45-1.19-.24-.19-.46-.4-.67-.63C1 17.54 1 15.65 1 11.89s0-5.64 1.28-7.08c.2-.23.43-.44.67-.63C4.45 3 6.44 3 10.4 3h3c3.96 0 5.95 0 7.45 1.19.24.19.46.4.67.63 1.2 1.35 1.27 3.19 1.28 6.08 0 .5-.4.9-.9.9s-.9-.4-.9-.9q0-.59-.007-1.1H2.82c-.011.617-.011 1.316-.011 2.11 0 3.31 0 4.96.82 5.89.13.15.28.29.44.41 1.01.8 2.79.8 6.34.8h.5c.5 0 .9.4.9.9s-.4.9-.9.9zM2.92 8h17.977c-.106-.92-.314-1.537-.717-1.99-.13-.15-.28-.29-.44-.41-1.01-.8-2.79-.8-6.34-.8h-3c-3.55 0-5.33 0-6.33.8-.16.13-.31.27-.44.42-.4.449-.605 1.074-.71 1.98" clipRule="evenodd" /><path fill="currentColor" d="M15.85 20.8h.05l-.01-.01c.31 0 .59-.16.76-.42.84-1.31 3.47-4.9 5.54-5.63.47-.17.72-.68.55-1.15a.9.9 0 0 0-1.15-.55c-2.23.79-4.5 3.58-5.67 5.21-.94-1.18-1.83-1.26-2.03-1.26-.5 0-.94.4-.94.9s.36.9.86.9c.01 0 .6.14 1.28 1.51.15.29.44.48.76.5" /></svg>);
export default CreditCardAcceptIcon;