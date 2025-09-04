import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Apps2: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { Apps2, type IconProps, Apps2 as default };
