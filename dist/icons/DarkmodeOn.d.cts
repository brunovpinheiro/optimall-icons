import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const DarkmodeOn: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { DarkmodeOn, type IconProps, DarkmodeOn as default };
