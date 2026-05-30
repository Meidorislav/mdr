import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation();
  
  return (
    <section className="output">
      <div className={styles.asciiArt}>
{`    __  ___     _     __           _ 
   /  |/  /__  (_)___/ /___  _____(_)
  / /|_/ / _ \\/ / __  / __ \\/ ___/ / 
 / /  / /  __/ / /_/ / /_/ / /  / /  
/_/  /_/\\___/_/\\__,_/\\____/_/  /_/   `}
      </div>
      <div>{t('welcome.title')}</div>
      <div>{t('welcome.user')}</div>
      <div>* {t('welcome.support')}: https://github.com/meidorislav/mdr</div>
      <div>* {t('welcome.documentation')}: man meidori</div>
      <div>
        {t('welcome.last_login')}: {new Date().toDateString()}
      </div> 
    </section>
  );
};

export default Welcome;
