import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '15px' }}>
        <span style={{ color: 'var(--keyword-color)', fontWeight: 'bold' }}># EXPERIENCE</span>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>LLC "Information Service Center"</div>
        <div style={{ color: 'var(--date-color)', fontSize: '0.85rem' }}>SQL Developer | May 2026 - July 2026</div>
        <p style={{ marginTop: '5px', paddingLeft: '15px', borderLeft: '2px solid #444' }}>
          Worked on database optimization, complex SQL queries, and data management. 
          Gained deep experience in PostgreSQL and relational database design.
        </p>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: 'var(--keyword-color)', fontWeight: 'bold' }}># BIO</span>
      </div>
      <p>
        Full-stack developer with a passion for Linux and system-level programming. 
        I enjoy building efficient tools and participating in hackathons. 
        Currently exploring high-performance systems and modern web technologies.
      </p>
    </div>
  );
};

export default About;
