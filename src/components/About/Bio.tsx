import { useTranslation, Trans } from 'react-i18next';
import styles from './About.module.css';

const Bio = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}>{t('bio.title')}</span>
      </div>

      <p className={styles.bioText}>
        <Trans 
          i18nKey="bio.text"
          components={{
            accent: <span className={styles.accent} />,
            path: <span className={styles.path} />,
            keyword: <span className={styles.keyword} />,
            user: <span className={styles.user} />
          }}
        />
      </p>
    </div>
  );
};

Bio.isTerminalSection = true;

export default Bio;
