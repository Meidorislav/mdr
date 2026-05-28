import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (text: string, speed: number = 30, startTrigger: boolean = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset state when trigger becomes false
    if (!startTrigger) {
      setDisplayedText('');
      setIsFinished(false);
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    
    // If already finished for this text, don't restart
    if (isFinished && displayedText === text) return;

    let i = 0;
    setDisplayedText('');
    setIsFinished(false);

    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        setIsFinished(true);
      }
    }, speed);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [text, speed, startTrigger]);

  return { displayedText, isFinished };
};
