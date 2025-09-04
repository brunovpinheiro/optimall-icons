import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const CheckboxFill: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { CheckboxFill, type IconProps, CheckboxFill as default };
