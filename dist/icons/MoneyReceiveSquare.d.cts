import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const MoneyReceiveSquare: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { type IconProps, MoneyReceiveSquare, MoneyReceiveSquare as default };
