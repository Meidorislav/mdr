import React from 'react';
import styles from './Welcome.module.css';

const Welcome: React.FC = () => {
  return (
    <section className="output">
      <div className={styles.asciiArt}>
{`    __  ___     _     __           _ 
   /  |/  /__  (_)___/ /___  _____(_)
  / /|_/ / _ \\/ / __  / __ \\/ ___/ / 
 / /  / /  __/ / /_/ / /_/ / /  / /  
/_/  /_/\\___/_/\\__,_/\\____/_/  /_/   `}
      </div>
      <div>Welcome to Meidori Portfolio v1.0.0 (LTS 2026)</div>
      <div>* Support: https://github.com/meidori/portfolio</div>
      <div>* Documentation: man meidori</div>
      <div>Last login: Thu May 28 2026 from 127.0.0.1</div>
    </section>
  );
};

export default Welcome;
