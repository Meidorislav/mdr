import styles from './About.module.css';

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}># EXPERIENCE</span>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          LLC "Information Service Center"
        </div>

        <div className={styles.position}>
          SQL Developer
        </div>

        <div className={styles.date}>
          May 2026 - July 2026
        </div>

        <p className={styles.description}>
          Specialized in{' '}
          <span className={styles.accent}>database optimization</span>,
          complex SQL queries, and efficient data management.
          Mastered{' '}
          <span className={styles.path}>PostgreSQL</span>
          {' '}and relational architecture design.
        </p>
      </div>
    </div>
  );
};

Experience.isTerminalSection = true;

export default Experience;
