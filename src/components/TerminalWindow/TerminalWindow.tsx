import React, { useRef, useState, useEffect } from 'react';
import styles from './TerminalWindow.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
}

const TerminalWindow = ({ children, title = "user@portfolio:~" }: TerminalWindowProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [maxReachedStep, setMaxReachedStep] = useState(-1);
  const windowRef = useRef<HTMLDivElement>(null);
  const isWindowVisible = useIntersectionObserver(windowRef, { 
    threshold: 0.3,
  });

  const childrenArray = React.Children.toArray(children);

  // Update maxReachedStep only when window is visible
  useEffect(() => {
    if (isWindowVisible) {
      setMaxReachedStep(prev => Math.max(prev, activeStep));
    }
  }, [isWindowVisible, activeStep]);

  useEffect(() => {
    // Only advance the sequence if the window is visible
    if (isWindowVisible && activeStep < childrenArray.length) {
      const currentChild = childrenArray[activeStep];
      if (React.isValidElement(currentChild)) {
        const componentType = currentChild.type as any;
        if (componentType.isTerminalSection !== true) {
          // If not a TerminalSection, move to next step immediately
          setActiveStep(prev => prev + 1);
        }
      } else {
        // Not a valid element, skip
        setActiveStep(prev => prev + 1);
      }
    }
  }, [activeStep, childrenArray.length, isWindowVisible]);

  // Inject props to children for sequencing
  const childrenWithProps = childrenArray.map((child, index) => {
    if (React.isValidElement(child)) {
      // Child is visible if it was already reached, and it stays visible
      const isVisible = index <= maxReachedStep;
      
      return React.cloneElement(child, { 
        // @ts-ignore
        isVisible,
        onFinished: () => {
          // Advance activeStep even if not visible, 
          // but maxReachedStep will only follow when window becomes visible
          if (index === activeStep) {
            setActiveStep(prev => prev + 1);
          }
        }
      });
    }
    return child;
  });

  return (
    <div 
      ref={windowRef}
      className={`${styles.terminalWindow} ${isWindowVisible ? styles.visible : ''}`}
    >
      <div className={styles.terminalHeader}>
        <div className={styles.terminalInfo}>
          <div className={styles.terminalIcon}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
          </div>
          <div className={styles.terminalTitle}>{title}</div>
        </div>
        <div className={styles.terminalControls}>
          <div className={styles.control}><span>−</span></div>
          <div className={styles.control}><span>□</span></div>
          <div className={`${styles.control} ${styles.close}`}><span>×</span></div>
        </div>
      </div>
      <div className={styles.terminalBody}>
        {childrenWithProps}
      </div>
    </div>
  );
};

export default TerminalWindow;
