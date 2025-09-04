import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const FileAttachment: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { FileAttachment, type IconProps, FileAttachment as default };
