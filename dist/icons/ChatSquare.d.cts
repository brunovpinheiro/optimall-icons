import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const ChatSquare: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { ChatSquare, type IconProps, ChatSquare as default };
