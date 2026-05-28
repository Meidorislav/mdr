import React from 'react';
import TerminalWindow from './components/TerminalWindow/TerminalWindow';
import TerminalSection from './components/TerminalSection/TerminalSection';
import Neofetch from './components/Neofetch/Neofetch';
import Welcome from './components/Welcome/Welcome';
import Experience from './components/About/Experience';
import Bio from './components/About/Bio';
import Education from './components/About/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  const user = "meidorislav";
  const host = "portfolio";

  const sectionWrapperStyle: React.CSSProperties = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    padding: '20px',
    boxSizing: 'border-box',
    flexShrink: 0
  };

  return (
    <div style={{ 
      height: '100vh',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      scrollBehavior: 'smooth',
      backgroundColor: 'var(--bg-color)'
    }}>
      {/* Welcome Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~`}>
          <Welcome />
          <TerminalSection command="neofetch" path="~" user={user} host={host}>
            <Neofetch />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Bio Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/bio`}>
          <TerminalSection command="cat bio.txt" path="~/bio" user={user} host={host}>
            <Bio />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/bio" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Experience Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/experience`}>
          <TerminalSection command="bat experience.md" path="~/experience" user={user} host={host}>
            <Experience />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/experience" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Projects Log Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/projects`}>
          <TerminalSection command="bat projects/portfolio.md" path="~/projects" user={user} host={host}>
            <Projects />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/projects" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Education Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/education`}>
          <TerminalSection command="cat education.txt" path="~/education" user={user} host={host}>
            <Education />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/education" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Contact Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/skills`}>
          <TerminalSection command="ls -F skills/" path="~/skills" user={user} host={host}>
            <Skills />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/skills" user={user} host={host} />
        </TerminalWindow>
      </div>

      {/* Contact Window */}
      <div style={sectionWrapperStyle}>
        <TerminalWindow title={`${user}@${host}: ~/contact`}>
          <TerminalSection command="./contact.sh" path="~/contact" user={user} host={host}>
            <Contact />
          </TerminalSection>
          <TerminalSection isPromptOnly path="~/contact" user={user} host={host} />
        </TerminalWindow>
      </div>
    </div>
  );
};

export default App;
