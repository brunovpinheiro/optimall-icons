import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const ExternalLinkFill: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { ExternalLinkFill, type IconProps, ExternalLinkFill as default };
