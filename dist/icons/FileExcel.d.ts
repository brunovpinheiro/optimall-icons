import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const FileExcel: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { FileExcel, type IconProps, FileExcel as default };
