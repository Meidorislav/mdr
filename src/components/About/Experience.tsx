import { useTranslation, Trans } from 'react-i18next';
import styles from './About.module.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}>{t('experience.title')}</span>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          {t('experience.company')}
        </div>

        <div className={styles.position}>
          {t('experience.position')}
        </div>

        <div className={styles.date}>
          {t('experience.date')}
        </div>

        <p className={styles.description}>
          <Trans 
            i18nKey="experience.description"
            components={{
              accent: <span className={styles.accent} />,
              path: <span className={styles.path} />
            }}
          />
        </p>
      </div>
    </div>
  );
};

Experience.isTerminalSection = true;

export default Experience;
