import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const AddInvoice: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { AddInvoice, type IconProps, AddInvoice as default };
