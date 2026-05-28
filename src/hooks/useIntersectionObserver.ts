import { useEffect, useState, type RefObject } from 'react';

export const useIntersectionObserver = (ref: RefObject<Element | null>, options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility based on intersection state
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};
