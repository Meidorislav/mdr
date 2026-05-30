import styles from './About.module.css';

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}># BIO</span>
      </div>

      <p className={styles.bioText}>
        I'm a <span className={styles.accent}>3rd-year student at PNRPU</span>,
        majoring in Informatics and Computer Science.

        Deeply passionate about{' '}
        <span className={styles.path}>Go Backend Development</span>
        {' '}and a dedicated{' '}
        <span className={styles.keyword}>Arch Linux</span>
        {' '}user (main OS).

        Currently actively looking for an{' '}
        <span className={styles.accent}>
          Internship as Go Backend Developer
        </span>.

        I focus on high-performance systems and clean architecture,
        with a goal to build robust infrastructures within the{' '}
        <span className={styles.user}>Fintech</span>
        {' '}industry.

        Active hackathon participant, team leader, and advocate for
        open-source software.
      </p>
    </div>
  );
};

Bio.isTerminalSection = true;

export default Bio;
