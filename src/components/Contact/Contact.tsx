import { useTranslation } from 'react-i18next';
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>Initializing secure connection...</div>
      <div>[ OK ] GPG Key verified.</div>
      <div>[ OK ] Handshake complete.</div>

      <br />

      <div>
        <span className={styles.label}>Email:</span>{" "}
        <a className={styles.link} href="mailto:meidorislav@gmail.com">
          meidorislav@gmail.com
        </a>
      </div>

      <div>
        <span className={styles.label}>Telegram:</span>{" "}
        <a
          className={styles.link}
          href="https://t.me/meidorislav"
          target="_blank"
          rel="noreferrer"
        >
          @meidorislav
        </a>
      </div>

      <div>
        <span className={styles.label}>GitHub:</span>{" "}
        <a
          className={styles.link}
          href="https://github.com/Meidorislav"
          target="_blank"
          rel="noreferrer"
        >
          github.com/Meidorislav
        </a>
      </div>

      <div>
        <span className={styles.label}>LinkedIn:</span>{" "}
        <a
          className={styles.link}
          href="https://linkedin.com/in/meidorislav"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/meidorislav
        </a>
      </div>

      <div>
        <span className={styles.label}>{t('contacts.location')}</span> Perm, Russia
      </div>
    </>
  );
};

export default Contact;