import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import githubIcon from '../../assets/github.svg';
import gmailIcon from '../../assets/gmail.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import telegramIcon from '../../assets/telegram.svg';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer id="cv" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a 
            href="https://github.com/Meidorislav" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.link}
            title="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
          </a>
          <a 
            href="https://t.me/meidorislav" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.link}
            title="Telegram"
          >
            <img src={telegramIcon} alt="Telegram" className={styles.icon} />
          </a>
          <a 
            href="https://linkedin.com/in/meidorislav" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.link}
            title="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
          <a 
            href="mailto:meidorislav@gmail.com" 
            className={styles.link}
            title="Email"
          >
            <img src={gmailIcon} alt="Gmail" className={styles.icon} />
          </a>
        </div>
        <div className={styles.cvButtons}>
          <a 
            href="/cv_en.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.cvBtn}
          >
            {t('footer.cv_en')}
          </a>
          <a 
            href="/cv_ru.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className={styles.cvBtn}
          >
            {t('footer.cv_ru')}
          </a>
        </div>
        <div className={styles.copyright}>
          &copy; {year} Vladislav Bakin. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
