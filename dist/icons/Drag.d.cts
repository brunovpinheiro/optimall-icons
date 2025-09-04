import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Drag: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { Drag, type IconProps, Drag as default };
