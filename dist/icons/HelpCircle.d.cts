import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const HelpCircle: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { HelpCircle, type IconProps, HelpCircle as default };
