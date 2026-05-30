import { useTranslation } from 'react-i18next';
import styles from './Projects.module.css';

const Projects = () => {
  const { t } = useTranslation();

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
          {t('projects.purr-case')}
        </div>

        <div className={styles.role}>
          <span className={styles.label}>Role:</span>{' '}
          <span className={styles.roleValue}>
            Team Lead, Backend, QA
          </span>
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:
            </span> Go, TypeScript, React, Vite, PostgreSQL, Redux Toolkit, Docker, Nginx
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"Storefront&Sales"</span>
          <span className={styles.achievement}>
            ⚡ Second Xsolla Hackathon
          </span>
        </div>

        <div className={styles.description}>
          {t('projects.storefront-sales')}
        </div>

        <div className={styles.role}>
          <span className={styles.label}>Role:</span>{' '}
          <span className={styles.roleValue}>
            Team Lead, Backend, QA
          </span>
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:
            </span> Go, TypeScript, React, Vite, PostgreSQL, TypeSense, Redis, ML (Python Rec Sys), Docker, Nginx
        </div>
      </div>

      <div className={styles.project}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"WhoAmongYou"</span>
        </div>

        <div className={styles.description}>
          {t('projects.who-among-you')}
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:
            </span> Go, TypeScript, React, Vite, i18next, PostgreSQL, Docker, Caddy
        </div>
      </div>

      <div className={`${styles.project} ${styles.projectPortfolio}`}>
        <div>
          <span className={styles.command}>$ project </span>
          <span className={styles.label}>--name=</span>
          <span className={styles.projectName}>"mdr-portfolio"</span>
        </div>

        <div className={styles.description}>
          {t('projects.mdr-portfolio')}
        </div>

        <div className={styles.stackBox}>
          <span className={styles.label}>Stack:
            </span> TypeScript, React, Vite, CSS Modules, i18next
        </div>
      </div>
    </>
  );
};

export default Projects;
