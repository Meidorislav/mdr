import React, { useRef } from 'react';
import styles from './TerminalWindow.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface TerminalWindowProps {
  children: React.ReactNode; // Standard ReactNode to allow passing clones with props
  title?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title = "user@portfolio:~" }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(windowRef, { 
    threshold: 0.3,
  });

  // Inject isVisible prop to children if they are TerminalSection components
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      // @ts-ignore - we want to inject isVisible even if not explicitly in props
      return React.cloneElement(child, { isVisible });
    }
    return child;
  });

  return (
    <div 
      ref={windowRef}
      className={`${styles.terminalWindow} ${isVisible ? styles.visible : ''}`}
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
