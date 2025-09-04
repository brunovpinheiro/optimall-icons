import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const AddPi: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { AddPi, type IconProps, AddPi as default };
