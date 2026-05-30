import { Fragment } from 'react';
import TerminalWindow from './components/TerminalWindow/TerminalWindow';
import TerminalSection from './components/TerminalSection/TerminalSection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import { portfolioWindows } from './data/portfolioWindows';

const App = () => {
  const user = "meidorislav";
  const host = "portfolio";

  const getSectionId = (titleSuffix: string) => {
    if (titleSuffix === '~') return 'home';
    return titleSuffix.replace('~/', '');
  };

  return (
    <div className={styles.page}>
      <Header />
      {portfolioWindows.map((windowConfig) => (
        <div 
          key={windowConfig.titleSuffix} 
          id={getSectionId(windowConfig.titleSuffix)}
          className={styles.sectionWrapper}
        >
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
      <Footer />
    </div>
  );
};

export default App;
