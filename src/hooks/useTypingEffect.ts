import { useEffect, useRef, useState } from 'react';

export const useTypingEffect = (
  text: string,
  speed = 30,
  startTrigger = true
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!startTrigger) {
      setDisplayedText('');
      setIsFinished(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      return;
    }

    let i = 0;

    setDisplayedText('');
    setIsFinished(false);

    const type = () => {
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, startTrigger]);

  return { displayedText, isFinished };
};
