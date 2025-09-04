import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const FileText: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { FileText, type IconProps, FileText as default };
