import * as React from 'react';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
}
const MailSend = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
  className,
  ...props
}, ref) => {
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.076 2.637c1.955-.05 3.892-.05 5.847 0l.069.002c1.516.038 2.752.069 3.747.242 1.05.183 1.918.537 2.653 1.274.732.735 1.084 1.591 1.264 2.625.17.975.195 2.182.226 3.657l.002.068c.01.503.016 1.502.016 1.995a.9.9 0 1 1-1.8 0c0-.49-.006-1.474-.016-1.956-.026-1.241-.048-2.172-.128-2.917l-5.425 3.08C14.241 11.44 13.157 11.9 12 11.9s-2.241-.46-3.531-1.193l-5.426-3.08c-.08.745-.101 1.675-.128 2.917-.02.973-.02 1.94 0 2.912.033 1.56.059 2.63.202 3.456.136.783.366 1.261.765 1.662.396.398.88.631 1.687.772.848.148 1.95.177 3.552.218q1.195.03 2.383.035a.9.9 0 0 1-.008 1.8q-1.208-.005-2.42-.036l-.069-.002c-1.516-.038-2.752-.069-3.746-.242-1.05-.183-1.919-.537-2.654-1.274-.732-.735-1.084-1.591-1.263-2.625-.17-.975-.196-2.182-.227-3.656l-.001-.07a70 70 0 0 1 0-2.989l.001-.069c.031-1.474.057-2.68.227-3.656.18-1.034.531-1.89 1.263-2.625.735-.737 1.604-1.091 2.654-1.274.994-.173 2.23-.204 3.746-.242zm11.041 2.789q.192.192.335.418l-5.81 3.298c-1.235.701-1.975.958-2.642.958s-1.407-.257-2.643-.958l-5.81-3.298q.143-.228.335-.418c.396-.398.88-.631 1.687-.772.848-.148 1.95-.177 3.552-.218 1.925-.048 3.832-.048 5.757 0 1.601.04 2.704.07 3.552.218.807.14 1.291.374 1.687.772" clipRule="evenodd" /><path fill="currentColor" d="M20.127 14.355a.9.9 0 0 0-1.255 1.29c.169.164.434.372.676.562l.056.045q.217.169.44.348H14a.9.9 0 0 0 0 1.8h6.044q-.223.18-.44.348l-.056.045c-.242.19-.507.398-.676.562a.9.9 0 0 0 1.255 1.29c.084-.081.258-.221.533-.437l.06-.047c.241-.19.528-.414.801-.646.293-.248.602-.53.844-.814.122-.143.245-.308.341-.488.093-.173.194-.42.194-.713 0-.292-.101-.54-.194-.713a2.8 2.8 0 0 0-.34-.488 7.5 7.5 0 0 0-.845-.814 28 28 0 0 0-.801-.646l-.06-.047a9 9 0 0 1-.533-.437" /></svg>;
});
MailSend.displayName = "MailSend";
export { MailSend };
export default MailSend;