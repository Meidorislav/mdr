import { Fragment } from 'react';
import TerminalWindow from './components/TerminalWindow/TerminalWindow';
import TerminalSection from './components/TerminalSection/TerminalSection';
import styles from './App.module.css';
import { portfolioWindows } from './data/portfolioWindows';

const App = () => {
  const user = "meidorislav";
  const host = "portfolio";

  return (
    <div className={styles.page}>
      {portfolioWindows.map((windowConfig) => (
        <div key={windowConfig.titleSuffix} className={styles.sectionWrapper}>
          <TerminalWindow title={`${user}@${host}: ${windowConfig.titleSuffix}`}>
            {windowConfig.blocks.map((block, index) => {
              if (block.kind === 'content') {
                return (
                  <Fragment key={`${windowConfig.titleSuffix}-content-${index}`}>
                    {block.element}
                  </Fragment>
                );
              }

              return (
                <TerminalSection
                  key={`${windowConfig.titleSuffix}-terminal-${index}`}
                  animateCommand={block.animateCommand}
                  command={block.command}
                  host={host}
                  isPromptOnly={block.promptOnly}
                  path={block.path}
                  user={user}
                >
                  {block.element}
                </TerminalSection>
              );
            })}
          </TerminalWindow>
        </div>
      ))}
    </div>
  );
};

export default App;
