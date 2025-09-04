import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const HandCredit: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { HandCredit, type IconProps, HandCredit as default };
