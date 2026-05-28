import React from 'react';
import styles from './Neofetch.module.css';

const art = `
                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`\`
`;

const Neofetch: React.FC = () => {
  return (
    <div className={styles.neofetchContainer}>
      <div className={styles.asciiArt} style={{ color: 'var(--path-color)' }}>
        {art}
      </div>
      <div>
        <div className={styles.infoTitle}>meidorislav@portfolio</div>
        <div className={styles.divider}>--------------</div>
        <div><span className={styles.infoLabel}>OS</span>: Arch Linux x86_64</div>
        <div><span className={styles.infoLabel}>Host</span>: Custom Portfolio PC</div>
        <div><span className={styles.infoLabel}>Kernel</span>: 6.8.9-arch1-1</div>
        <div><span className={styles.infoLabel}>Uptime</span>: 1 year, 2 months</div>
        <div><span className={styles.infoLabel}>Shell</span>: zsh 5.9</div>
        <div><span className={styles.infoLabel}>Resolution</span>: 1920x1080</div>
        <div><span className={styles.infoLabel}>WM</span>: Hyprland / CSS</div>
        <div><span className={styles.infoLabel}>Terminal</span>: Alacritty (React)</div>
        <div><span className={styles.infoLabel}>CPU</span>: AMD Ryzen 9 5950X</div>
        <div><span className={styles.infoLabel}>GPU</span>: NVIDIA RTX 4090</div>
        <div><span className={styles.infoLabel}>Memory</span>: 32GiB / 64GiB</div>
      </div>
    </div>
  );
};

export default Neofetch;
