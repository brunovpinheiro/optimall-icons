import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Team: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { type IconProps, Team, Team as default };
