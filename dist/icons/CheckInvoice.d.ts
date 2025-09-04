import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const CheckInvoice: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { CheckInvoice, type IconProps, CheckInvoice as default };
