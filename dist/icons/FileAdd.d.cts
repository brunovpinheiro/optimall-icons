import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const FileAdd: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { FileAdd, type IconProps, FileAdd as default };
