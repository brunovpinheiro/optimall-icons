import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const GiftCheck: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { GiftCheck, type IconProps, GiftCheck as default };
