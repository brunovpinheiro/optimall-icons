import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const CheckList: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { CheckList, type IconProps, CheckList as default };
