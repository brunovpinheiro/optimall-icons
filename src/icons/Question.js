import * as React from 'react';
const Question = React.forwardRef(function Question(props, ref) {
  const {
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    className,
    ...rest
  } = props;
  const strokeWidthPx = Number(strokeWidth);
  const computedStrokeWidth = absoluteStrokeWidth ? Number(strokeWidthPx) * 24 / Number(size) : strokeWidthPx;
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" role="img" stroke={color} strokeWidth={computedStrokeWidth} className={className} ref={ref} {...props}><path fill="currentColor" d="M15.4 7c-.5 0-.9.4-.9.9s.41.9.9.9.9-.4.9-.9-.4-.9-.9-.9m2.1.9c0-.5.4-.9.9-.9s.9.4.9.9-.41.9-.9.9-.9-.4-.9-.9" /><path fill="currentColor" fillRule="evenodd" d="M16.9 2C13.65 2 11 4.55 11 7.68c0 1.45.57 2.83 1.62 3.91-.06.25-.18.49-.34.68a.93.93 0 0 0-.15.88c.1.3.37.52.68.57.25.05.5.07.75.07.68 0 1.35-.17 1.96-.49q.053-.03.1-.05l.04-.02q.036.001.09.014l.03.006c.37.07.75.11 1.14.11 3.25 0 5.9-2.55 5.9-5.68S20.15 2 16.9 2m0 9.57c-.27 0-.54-.02-.8-.07-.3-.06-.5-.09-.72-.06-.238.03-.417.129-.704.287l-.005.003c-.08.05-.17.09-.26.12.1-.54-.08-1.09-.5-1.51-.71-.72-1.1-1.66-1.1-2.65 0-2.14 1.84-3.88 4.1-3.88s4.1 1.74 4.1 3.88-1.84 3.88-4.1 3.88zM7.4 16.5c-1.99 0-4.81 1.03-6.11 2.74-.37.49-.4 1.17-.06 1.67.32.47.93 1.14 2.08 1.63.38.16.82.25 1.3.25h5.57c.48 0 .92-.08 1.3-.25 1.15-.49 1.76-1.16 2.08-1.64.34-.51.31-1.18-.06-1.67-1.29-1.72-4.12-2.75-6.1-2.75zm3.38 4.4c-.16.07-.35.1-.59.1H4.62c-.24 0-.43-.03-.59-.1-.57-.25-.92-.54-1.13-.77.99-1.09 3.1-1.83 4.5-1.83s3.51.74 4.5 1.83c-.2.23-.55.52-1.13.77zm.3-8.71a3.681 3.681 0 0 1-7.36 0 3.681 3.681 0 0 1 7.36 0m-1.8 0c0-1.03-.84-1.87-1.88-1.87s-1.88.84-1.88 1.87.84 1.87 1.88 1.87 1.88-.84 1.88-1.87" clipRule="evenodd" /></svg>;
});
Question.displayName = "Question";
export { Question };
export default Question;