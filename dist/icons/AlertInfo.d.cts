import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const AlertInfo: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { AlertInfo, type IconProps, AlertInfo as default };
