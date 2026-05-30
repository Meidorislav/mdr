import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t('header.home'), href: '#home' },
    { label: t('header.bio'), href: '#bio' },
    { label: t('header.experience'), href: '#experience' },
    { label: t('header.projects'), href: '#projects' },
    { label: t('header.education'), href: '#education' },
    { label: t('header.skills'), href: '#skills' },
    { label: t('header.contact'), href: '#contact' },
    { label: t('header.cv'), href: '#cv' },
  ];

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.prompt}>mdr$</span>
        <span className={styles.cursor}>_</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.langSwitcher}>
        <button 
          onClick={() => toggleLanguage('en')} 
          className={`${styles.langBtn} ${(i18n.resolvedLanguage || i18n.language)?.startsWith('en') ? styles.active : ''}`}
        >
          EN
        </button>
        <span className={styles.separator}>|</span>
        <button 
          onClick={() => toggleLanguage('ru')} 
          className={`${styles.langBtn} ${(i18n.resolvedLanguage || i18n.language)?.startsWith('ru') ? styles.active : ''}`}
        >
          RU
        </button>
      </div>
    </header>
  );
};

export default Header;
