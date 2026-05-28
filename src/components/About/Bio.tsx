const Bio = () => {
  return (
    <div style={{ color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: 'var(--keyword-color)', fontWeight: 'bold' }}># BIO</span>
      </div>
      <p style={{ lineHeight: '1.6' }}>
        I'm a <span style={{ color: 'var(--accent-color)' }}>3rd-year student at PNRPU</span>, majoring in Informatics and Computer Science. 
        Deeply passionate about <span style={{ color: 'var(--path-color)' }}>Go Backend Development</span> and a dedicated <span style={{ color: 'var(--keyword-color)' }}>Arch Linux</span> user (main OS). 
        I focus on high-performance systems and clean architecture, with a goal to build robust infrastructures within the <span style={{ color: 'var(--user-color)' }}>Fintech</span> industry. 
        Active hackathon participant, team leader, and advocate for open-source software.
      </p>
    </div>
  );
};

Bio.isTerminalSection = true;

export default Bio;
