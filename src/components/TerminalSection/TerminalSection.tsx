import React from 'react';
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
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ 
  command = "", 
  children, 
  user = "user", 
  host = "portfolio",
  path = "~",
  isPromptOnly = false,
  animateCommand = true,
  isVisible = true
}) => {
  const { displayedText, isFinished } = useTypingEffect(command, 50, isVisible && animateCommand);

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

export default TerminalSection;
