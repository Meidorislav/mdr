import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';

interface Category {
  title: string;
  skills: string[];
}

const categories: Category[] = [
  {
    title: 'LANGUAGES',
    skills: ['Go', 'Python', 'C++', 'TypeScript', 'SQL']
  },
  {
    title: 'WEB',
    skills: ['React', 'Vanilla CSS', 'Vite']
  },
  {
    title: 'DESKTOP / GUI',
    skills: ['Qt6 + QML']
  },
  {
    title: 'INFRA / OPS',
    skills: ['Linux', 'Docker', 'Caddy', 'Git']
  },
  {
    title: 'DATABASES',
    skills: ['PostgreSQL', 'Relational Design']
  },
  {
    title: 'SPECIAL / DOCS',
    skills: ['Typst', 'Markdown', 'LaTeX']
  },
  {
    title: 'LANGUAGES (BIO)',
    skills: ['English (B2)', 'Russian (Native)']
  }
];

const Skills = () => {
  const { t } = useTranslation();

  const [activeIdx, setActiveIdx] = useState(0);

  const nextCategory = () => setActiveIdx((prev) => (prev + 1) % categories.length);
  const prevCategory = () => setActiveIdx((prev) => (prev - 1 + categories.length) % categories.length);

  const currentCategory = categories[activeIdx];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.navigation}>
        <span className={styles.navButton} onClick={prevCategory}>[ &lt; ]</span>
        <span className={styles.categoryTitle}>{currentCategory.title}</span>
        <span className={styles.navButton} onClick={nextCategory}>[ &gt; ]</span>
      </div>

      <div className={styles.skillList}>
        {currentCategory.skills.map((skill) => (
          <div key={`${currentCategory.title}-${skill}`} className={styles.skillItem}>
            <span className={styles.bullet} style={{ color: 'var(--path-color)' }}>➜</span>
            <span className={styles.skillName} style={{ color: 'var(--accent-color)' }}>{skill}</span>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.6 }}>
        {t('skills.tip')}
      </div>
    </div>
  );
};

export default Skills;
