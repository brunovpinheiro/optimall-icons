import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const QrCode: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { type IconProps, QrCode, QrCode as default };
