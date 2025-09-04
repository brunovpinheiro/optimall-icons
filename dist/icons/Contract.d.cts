import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Contract: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { Contract, type IconProps, Contract as default };
