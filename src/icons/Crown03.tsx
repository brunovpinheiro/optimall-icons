import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const Crown03 = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M19.092 19.605a.9.9 0 0 1 0 1.79L19 21.4H5a.9.9 0 0 1 0-1.8h14z" /><path fill="currentColor" fillRule="evenodd" d="M12.117 2.604c.546.035 1.05.32 1.358.778l.062.1 2.215 3.822.488.827a6 6 0 0 0 .362.538c.202.26.293.282.327.29l.038.006c.053.002.161-.013.385-.12.32-.152.727-.417 1.37-.84l1.232-.81.144-.086a1.91 1.91 0 0 1 2.242.32l.092.097c.44.5.586 1.2.37 1.84l-.004.008-2.245 6.415c-.163.466-.31.886-.47 1.22-.17.354-.395.69-.759.948s-.756.358-1.146.402c-.368.042-.813.041-1.306.041H7.128c-.493 0-.938 0-1.306-.04-.342-.04-.684-.12-1.009-.313l-.137-.09c-.364-.258-.588-.594-.759-.948a7 7 0 0 1-.234-.56l-.236-.66-2.245-6.415-.004-.009A1.87 1.87 0 0 1 1.66 7.43l.124-.113a1.91 1.91 0 0 1 2.262-.122l1.231.81.808.521c.222.138.403.243.563.32.298.141.39.12.423.113l.037-.012c.05-.022.139-.083.29-.278.219-.28.464-.699.85-1.365l2.215-3.822.062-.1c.33-.49.884-.782 1.475-.782zM9.806 8.206c-.36.621-.676 1.169-.988 1.57-.287.368-.636.7-1.118.872l-.215.063c-.595.14-1.13-.01-1.611-.24a8 8 0 0 1-.74-.415L4.29 9.51 3.057 8.7a.11.11 0 0 0-.104-.009l-.03.02a.08.08 0 0 0-.02.076l2.243 6.406.222.623c.063.168.117.3.17.41.096.2.153.245.179.263l.08.038c.047.015.117.032.227.044.244.028.57.029 1.104.029h9.744c.534 0 .86-.001 1.104-.029.22-.025.281-.063.307-.082.026-.018.083-.063.179-.262.106-.221.215-.53.392-1.034l2.243-6.406a.1.1 0 0 0 0-.038l-.02-.038a.11.11 0 0 0-.1-.026l-.034.014-1.232.81c-.6.395-1.127.743-1.585.962-.422.2-.883.341-1.39.279l-.221-.04c-.595-.14-1.005-.514-1.333-.935a8 8 0 0 1-.476-.702l-.512-.867L12 4.419z" clipRule="evenodd" /></svg>;
});
Crown03.displayName = "Crown03";
export { Crown03 };
export default Crown03;