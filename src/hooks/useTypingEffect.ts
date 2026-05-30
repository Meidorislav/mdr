import { useEffect, useRef, useState } from 'react';

export const useTypingEffect = (
  text: string,
  speed = 30
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const type = () => {
      if (cancelled) {
        return;
      }

      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i < text.length) {
        timeoutRef.current = setTimeout(type, speed);
      } else {
        setIsFinished(true);
      }
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => {
      cancelled = true;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed]);

  return { displayedText, isFinished };
};
