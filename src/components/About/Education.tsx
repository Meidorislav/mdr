import styles from './About.module.css';

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}># ACADEMIC_PATH</span>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          Perm National Research Polytechnic University (PNRPU)
        </div>
        <div className={styles.position}>
          B.S. in Informatics and Computer Science
        </div>
        <div className={styles.date}>
          September 2023 - June 2027 (Expected)
        </div>
      </div>
    </div>
  );
};

Education.isTerminalSection = true;

export default Education;
