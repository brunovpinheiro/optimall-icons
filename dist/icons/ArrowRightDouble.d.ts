import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const ArrowRightDouble: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { ArrowRightDouble, type IconProps, ArrowRightDouble as default };
