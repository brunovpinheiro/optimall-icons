import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const FullScreen: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { FullScreen, type IconProps, FullScreen as default };
