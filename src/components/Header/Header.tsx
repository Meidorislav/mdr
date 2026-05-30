import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Bio', href: '#bio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.prompt}>$</span>
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
    </header>
  );
};

export default Header;
