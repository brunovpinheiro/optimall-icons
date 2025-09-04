import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const DocumentValidation: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { DocumentValidation, type IconProps, DocumentValidation as default };
