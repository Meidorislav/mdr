import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}>{t('education.title')}</span>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          {t('education.pnrpu-title')}
        </div>
        <div className={styles.position}>
          {t('education.pnrpu-majoring')}
        </div>
        <div className={styles.date}>
          {t('education.pnrpu-period')}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          {t('education.prr-title')}
        </div>
        <div className={styles.position}>
          {t('education.prr-majoring')}
        </div>
        <div className={styles.date}>
          {t('education.prr-period')}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.company}>
          {t('education.xsolla-school-title')}
        </div>
        <div className={styles.position}>
          {t('education.xsolla-school-majoring')}
        </div>
        <div className={styles.date}>
          {t('education.xsolla-school-period')}
        </div>
      </div>
    </div>
  );
};

Education.isTerminalSection = true;

export default Education;
