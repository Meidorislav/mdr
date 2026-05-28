const Education = () => {
  return (
    <div style={{ color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '15px' }}>
        <span style={{ color: 'var(--keyword-color)', fontWeight: 'bold' }}># ACADEMIC_PATH</span>
      </div>
      
      {/* PNRPU */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Perm National Research Polytechnic University (PNRPU)</div>
        <div style={{ color: 'var(--path-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>B.S. in Informatics and Computer Science</div>
        <div style={{ color: 'var(--date-color)', fontSize: '0.85rem' }}>September 2023 - June 2027 (Expected)</div>
      </div>

      {/* ML / Data Analysis */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Additional Education: ML & Data Analysis</div>
        <div style={{ color: 'var(--path-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>Specialized Training</div>
        <div style={{ color: 'var(--date-color)', fontSize: '0.85rem' }}>October 2024 - June 2025</div>
      </div>

      {/* Xsolla School */}
      <div style={{ marginBottom: '10px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>Xsolla School</div>
        <div style={{ color: 'var(--path-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>Professional Development Program</div>
        <div style={{ color: 'var(--date-color)', fontSize: '0.85rem' }}>February 2026 - May 2026</div>
      </div>
    </div>
  );
};

Education.isTerminalSection = true;

export default Education;
