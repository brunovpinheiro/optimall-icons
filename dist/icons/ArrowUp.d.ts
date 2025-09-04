import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const ArrowUp: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { ArrowUp, type IconProps, ArrowUp as default };
