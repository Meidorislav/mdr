import React, { useEffect } from 'react';
import styles from './TerminalSection.module.css';
import { useTypingEffect } from '../../hooks/useTypingEffect';

interface TerminalSectionProps {
  command?: string;
  children?: React.ReactNode;
  user?: string;
  host?: string;
  path?: string;
  isPromptOnly?: boolean;
  animateCommand?: boolean;
  isVisible?: boolean; 
  onFinished?: () => void;
}

const TerminalSection = ({ 
  command = "", 
  children, 
  user = "user", 
  host = "portfolio",
  path = "~",
  isPromptOnly = false,
  animateCommand = true,
  isVisible = true,
  onFinished
}: TerminalSectionProps) => {
  const shouldAnimate = isVisible && animateCommand && !isPromptOnly && command.length > 0;
  const { displayedText, isFinished } = useTypingEffect(command, 50, shouldAnimate);

  useEffect(() => {
    // If we shouldn't animate (prompt only or animation disabled), 
    // trigger onFinished immediately when visible
    if (isVisible && !shouldAnimate && onFinished) {
      onFinished();
    }
  }, [isVisible, shouldAnimate, onFinished]);

  useEffect(() => {
    if (isFinished && onFinished) {
      onFinished();
    }
  }, [isFinished, onFinished]);

  if (!isVisible) return null;

  // For prompt-only, we always show the cursor.
  // For commands, we only show cursor while typing.
  const showCursor = isPromptOnly || (animateCommand && !isFinished);

  return (
    <>
      <section className={styles.commandLine}>
        <span className={styles.prompt}>{user}</span>
        <span className={styles.at}>@</span>
        <span className={styles.host}>{host}</span>
        <span className={styles.colon}>:</span>
        <span className={styles.path}>{path}</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.command}>
          {isPromptOnly ? "" : (animateCommand ? displayedText : command)}
          {showCursor && <span className={styles.cursor}></span>}
        </span>
      </section>
      {!isPromptOnly && (isFinished || !animateCommand) && (
        <section className={styles.output}>
          {children}
        </section>
      )}
    </>
  );
};

TerminalSection.displayName = 'TerminalSection';
TerminalSection.isTerminalSection = true;

export default TerminalSection;
