import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const AddMoneyCircle: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { AddMoneyCircle, type IconProps, AddMoneyCircle as default };
