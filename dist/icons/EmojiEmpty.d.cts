import * as React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
}
declare const EmojiEmpty: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export { EmojiEmpty, type IconProps, EmojiEmpty as default };
