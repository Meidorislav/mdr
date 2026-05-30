import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './TerminalSection.module.css';
import { useTypingEffect } from '../../hooks/useTypingEffect';

interface TerminalSectionProps {
  command?: string;
  children?: ReactNode;
  user?: string;
  host?: string;
  path?: string;
  isPromptOnly?: boolean;
  animateCommand?: boolean;
  isVisible?: boolean; 
  onFinished?: () => void;
}

interface AnimatedCommandProps {
  command: string;
  onFinished?: () => void;
}

const AnimatedCommand = ({ command, onFinished }: AnimatedCommandProps) => {
  const { displayedText, isFinished } = useTypingEffect(command, 50);
  const hasNotifiedFinished = useRef(false);

  useEffect(() => {
    if (!isFinished || hasNotifiedFinished.current || !onFinished) {
      return;
    }

    hasNotifiedFinished.current = true;
    onFinished();
  }, [isFinished, onFinished]);

  return displayedText;
};

const TerminalSection = ({
  command = '',
  children, 
  user = "user", 
  host = "portfolio",
  path = "~",
  isPromptOnly = false,
  animateCommand = true,
  isVisible = true,
  onFinished
}: TerminalSectionProps) => {
  const hasNotifiedCompletion = useRef(false);
  const [isCommandComplete, setIsCommandComplete] = useState(
    () => !animateCommand || command.length === 0,
  );
  const shouldAnimateCommand =
    isVisible && animateCommand && !isPromptOnly && command.length > 0 && !isCommandComplete;

  useEffect(() => {
    if (!isVisible || hasNotifiedCompletion.current || !onFinished) {
      return;
    }

    if (isPromptOnly || !animateCommand || command.length === 0) {
      hasNotifiedCompletion.current = true;
      onFinished();
    }
  }, [animateCommand, command, isPromptOnly, isVisible, onFinished]);

  if (!isVisible) return null;

  const handleCommandFinished = () => {
    if (hasNotifiedCompletion.current) {
      return;
    }

    hasNotifiedCompletion.current = true;
    setIsCommandComplete(true);
    onFinished?.();
  };

  const showCursor = isPromptOnly || shouldAnimateCommand;

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
          {isPromptOnly ? '' : (
            animateCommand ? (
              shouldAnimateCommand ? (
                <AnimatedCommand command={command} onFinished={handleCommandFinished} />
              ) : command
            ) : command
          )}
          {showCursor && <span className={styles.cursor}></span>}
        </span>
      </section>
      {!isPromptOnly && isCommandComplete && (
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
