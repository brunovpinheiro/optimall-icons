import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const ArrowRight: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { ArrowRight, type IconProps, ArrowRight as default };
