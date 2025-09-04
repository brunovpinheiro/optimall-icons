import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const CloverFill: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { CloverFill, type IconProps, CloverFill as default };
