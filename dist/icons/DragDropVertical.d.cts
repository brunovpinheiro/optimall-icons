import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const DragDropVertical: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { DragDropVertical, type IconProps, DragDropVertical as default };
