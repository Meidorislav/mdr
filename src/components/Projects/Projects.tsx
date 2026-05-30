import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
      <div className={styles.title}>[ PROJECT_LOG ]</div>

      <div className={styles.project}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"PurrCase"</span>
          <span className={styles.achievement}>
            🏆 2nd Place @ First Xsolla Hackathon
          </span>
        </div>

        <div className={styles.description}>
          Cat-themed loot case marketplace. Xsolla payments integration.
        </div>

        <div className={styles.role}>
          <span className={styles.label}>Role:</span>{' '}
          <span className={styles.roleValue}>
            Team Lead, Backend, QA
          </span>
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:</span> Go (Chi), PostgreSQL,
          migrations, React, Redux Toolkit, Docker, Nginx
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"Storefront_Sales"</span>
          <span className={styles.achievement}>
            ⚡ Second Xsolla Hackathon
          </span>
        </div>

        <div className={styles.description}>
          E-commerce solution with dynamic pricing and product recommendations.
        </div>

        <div className={styles.role}>
          <span className={styles.label}>Role:</span>{' '}
          <span className={styles.roleValue}>
            Team Lead, Backend, QA
          </span>
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:</span> Go, TS, React,
          PostgreSQL, Redis, ML (Python Rec Sys)
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"WhoAmongYou"</span>
        </div>

        <div className={styles.description}>
          Real-time multiplayer party game with WebSockets. Cozy vibes &
          interactive rounds.
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:</span> Go (Chi, WebSockets), TS,
          React 19, i18next, PostgreSQL, Docker, Caddy
        </div>
      </div>

      <div className={`${styles.project} ${styles.projectPortfolio}`}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"mdr-portfolio"</span>
        </div>

        <div className={styles.description}>
          Linux-inspired terminal portfolio with sequenced animations.
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:</span> React, TypeScript, Vite,
          CSS Modules
        </div>
      </div>
    </>
  );
};

export default Projects;
