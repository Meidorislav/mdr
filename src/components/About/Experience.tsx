const Experience = () => {
  return (
    <div style={{ color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '15px' }}>
        <span style={{ color: 'var(--keyword-color)', fontWeight: 'bold' }}># EXPERIENCE</span>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>LLC "Information Service Center"</div>
        <div style={{ color: 'var(--path-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>SQL Developer</div>
        <div style={{ color: 'var(--date-color)', fontSize: '0.85rem' }}>May 2026 - July 2026</div>
        <p style={{ marginTop: '5px', paddingLeft: '15px', borderLeft: '2px solid var(--keyword-color)' }}>
          Specialized in <span style={{ color: 'var(--accent-color)' }}>database optimization</span>, complex SQL queries, and efficient data management. 
          Mastered <span style={{ color: 'var(--path-color)' }}>PostgreSQL</span> and relational architecture design.
        </p>
      </div>
    </div>
  );
};

Experience.isTerminalSection = true;

export default Experience;
