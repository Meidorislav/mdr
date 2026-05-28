const Projects = () => {
  const projectStyle = { marginBottom: '20px', borderLeft: '2px solid var(--date-color)', paddingLeft: '15px' };
  const labelStyle = { color: 'var(--keyword-color)', fontWeight: 'bold' };
  const stackBoxStyle = { 
    marginTop: '5px', 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    padding: '5px 10px', 
    borderRadius: '4px',
    fontSize: '0.85rem'
  };

  return (
    <>
      <div style={{ color: 'var(--keyword-color)', fontWeight: 'bold', marginBottom: '15px' }}>[ PROJECT_LOG ]</div>
      
      {/* PurrCase */}
      <div style={projectStyle}>
        <div>
          <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
          <span style={labelStyle}>--name=</span><span style={{ color: 'var(--string-color)' }}>"PurrCase"</span>
          <span style={{ marginLeft: '10px', color: 'var(--path-color)' }}>🏆 2nd Place @ First Xsolla Hackathon</span>
        </div>
        <div style={{ margin: '5px 0' }}>Cat-themed loot case marketplace. Xsolla payments integration.</div>
        <div style={{ fontSize: '0.9rem' }}>
          <span style={labelStyle}>Role:</span> <span style={{ color: 'var(--accent-color)' }}>Team Lead, Backend, QA</span>
        </div>
        <div style={stackBoxStyle}>
          <span style={labelStyle}>Stack:</span> Go (Chi), PostgreSQL, migrations, React, Redux Toolkit, Docker, Nginx
        </div>
      </div>

      {/* Storefront & Sales */}
      <div style={projectStyle}>
        <div>
          <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
          <span style={labelStyle}>--name=</span><span style={{ color: 'var(--string-color)' }}>"Storefront_Sales"</span>
          <span style={{ marginLeft: '10px', color: 'var(--path-color)' }}>⚡ Second Xsolla Hackathon</span>
        </div>
        <div style={{ margin: '5px 0' }}>E-commerce solution with dynamic pricing and product recommendations.</div>
        <div style={{ fontSize: '0.9rem' }}>
          <span style={labelStyle}>Role:</span> <span style={{ color: 'var(--accent-color)' }}>Team Lead, Backend, QA</span>
        </div>
        <div style={stackBoxStyle}>
          <span style={labelStyle}>Stack:</span> Go, TS, React, PostgreSQL, Redis, ML (Python Rec Sys)
        </div>
      </div>

      {/* Who Among You? */}
      <div style={projectStyle}>
        <div>
          <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
          <span style={labelStyle}>--name=</span><span style={{ color: 'var(--string-color)' }}>"WhoAmongYou"</span>
        </div>
        <div style={{ margin: '5px 0' }}>Real-time multiplayer party game with WebSockets. Cozy vibes & interactive rounds.</div>
        <div style={stackBoxStyle}>
          <span style={labelStyle}>Stack:</span> Go (Chi, WebSockets), TS, React 19, i18next, PostgreSQL, Docker, Caddy
        </div>
      </div>

      {/* Portfolio */}
      <div style={{ ...projectStyle, borderLeftColor: 'var(--user-color)' }}>
        <div>
          <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
          <span style={labelStyle}>--name=</span><span style={{ color: 'var(--string-color)' }}>"mdr-portfolio"</span>
        </div>
        <div style={{ margin: '5px 0' }}>Linux-inspired terminal portfolio with sequenced animations.</div>
        <div style={stackBoxStyle}>
          <span style={labelStyle}>Stack:</span> React, TypeScript, Vite, CSS Modules
        </div>
      </div>
    </>
  );
};

export default Projects;
