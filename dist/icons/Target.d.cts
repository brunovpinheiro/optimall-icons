import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Target: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { type IconProps, Target, Target as default };
