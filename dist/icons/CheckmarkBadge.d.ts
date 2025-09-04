import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const CheckmarkBadge: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { CheckmarkBadge, type IconProps, CheckmarkBadge as default };
