import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const Emoji: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { Emoji, type IconProps, Emoji as default };
