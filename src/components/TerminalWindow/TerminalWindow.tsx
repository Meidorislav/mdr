import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import styles from './TerminalWindow.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
}

interface SequencedChildProps {
  isVisible?: boolean;
  onFinished?: () => void;
}

interface TerminalSectionMarker {
  isTerminalSection?: boolean;
}

const VISIBILITY_OPTIONS = { threshold: 0.3 } as const;

const isTerminalSectionElement = (child: ReactNode): boolean => {
  if (!isValidElement(child)) {
    return false;
  }

  return (child.type as TerminalSectionMarker).isTerminalSection === true;
};

const TerminalWindow = ({ children, title = 'user@portfolio:~' }: TerminalWindowProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [maxReachedStep, setMaxReachedStep] = useState(-1);
  const windowRef = useRef<HTMLDivElement>(null);
  const advanceFrameRef = useRef<number | null>(null);
  const revealFrameRef = useRef<number | null>(null);
  const isWindowVisible = useIntersectionObserver(windowRef, VISIBILITY_OPTIONS);

  const childrenArray = useMemo(() => Children.toArray(children), [children]);

  useEffect(() => {
    if (!isWindowVisible || activeStep >= childrenArray.length) {
      return;
    }

    if (isTerminalSectionElement(childrenArray[activeStep])) {
      return;
    }

    if (advanceFrameRef.current !== null) {
      return;
    }

    advanceFrameRef.current = window.requestAnimationFrame(() => {
      advanceFrameRef.current = null;
      setActiveStep((previousStep) => previousStep + 1);
    });

    return () => {
      if (advanceFrameRef.current !== null) {
        window.cancelAnimationFrame(advanceFrameRef.current);
        advanceFrameRef.current = null;
      }
    };
  }, [activeStep, childrenArray, isWindowVisible]);

  useEffect(() => {
    if (!isWindowVisible) {
      return;
    }

    if (revealFrameRef.current !== null) {
      return;
    }

    revealFrameRef.current = window.requestAnimationFrame(() => {
      revealFrameRef.current = null;
      setMaxReachedStep((previousStep) => Math.max(previousStep, activeStep));
    });

    return () => {
      if (revealFrameRef.current !== null) {
        window.cancelAnimationFrame(revealFrameRef.current);
        revealFrameRef.current = null;
      }
    };
  }, [activeStep, isWindowVisible]);

  const childrenWithProps = useMemo(
    () =>
      childrenArray.map((child, index) => {
        if (!isValidElement(child)) {
          return index <= maxReachedStep ? child : null;
        }

        if (!isTerminalSectionElement(child)) {
          return index <= maxReachedStep ? child : null;
        }

        const sequencedChild = child as ReactElement<SequencedChildProps>;

        return cloneElement(sequencedChild, {
          isVisible: index <= maxReachedStep,
          onFinished: () => {
            if (index === activeStep) {
              setActiveStep((previousStep) => previousStep + 1);
            }
          },
        });
      }),
    [activeStep, childrenArray, maxReachedStep],
  );

  return (
    <div
      ref={windowRef}
      className={`${styles.terminalWindow} ${isWindowVisible ? styles.visible : ''}`}
    >
      <div className={styles.terminalHeader}>
        <div className={styles.terminalInfo}>
          <div className={styles.terminalIcon}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </div>
          <div className={styles.terminalTitle}>{title}</div>
        </div>
        <div className={styles.terminalControls}>
          <div className={styles.control}>
            <span>−</span>
          </div>
          <div className={styles.control}>
            <span>□</span>
          </div>
          <div className={`${styles.control} ${styles.close}`}>
            <span>×</span>
          </div>
        </div>
      </div>
      <div className={styles.terminalBody}>{childrenWithProps}</div>
    </div>
  );
};

export default TerminalWindow;
