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

const Neofetch = () => {
  return (
    <div className={styles.neofetchContainer}>
      <div className={styles.asciiArt} style={{ color: 'var(--path-color)' }}>
        {art}
      </div>
      <div>
        <div className={styles.infoTitle} style={{ color: 'var(--user-color)' }}>meidorislav<span style={{ color: 'var(--text-color)' }}>@</span>portfolio</div>
        <div className={styles.divider} style={{ color: 'var(--date-color)' }}>--------------</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>OS</span>: Arch Linux x86_64</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Host</span>: Custom Portfolio PC</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Kernel</span>: 6.8.9-arch1-1</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Uptime</span>: 1 year, 2 months</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Shell</span>: zsh 5.9</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Resolution</span>: 1920x1080</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>WM</span>: Niri / CSS</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Terminal</span>: Alacritty (React)</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>CPU</span>: AMD Ryzen 5 3600</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>GPU</span>: NVIDIA GTX 1660 Ti 6GB</div>
        <div><span className={styles.infoLabel} style={{ color: 'var(--keyword-color)' }}>Memory</span>: 32GiB</div>
        <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#000' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#ff5555' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#50fa7b' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#f1fa8c' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#bd93f9' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#ff79c6' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#8be9fd' }}></div>
          <div style={{ width: '15px', height: '15px', backgroundColor: '#f8f8f2' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Neofetch;
