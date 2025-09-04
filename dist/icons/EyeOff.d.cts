import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const EyeOff: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { EyeOff, type IconProps, EyeOff as default };
