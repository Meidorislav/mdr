import styles from './Contact.module.css';

const Contact = () => {
  return (
    <>
      <div>Initializing secure connection...</div>
      <div>[ OK ] GPG Key verified.</div>
      <div>[ OK ] Handshake complete.</div>

      <br />

      <div>
        <span className={styles.label}>Email:</span> meidorislav@gmail.com
      </div>

      <div>
        <span className={styles.label}>Telegram:</span> @meidorislav
      </div>

      <div>
        <span className={styles.label}>GitHub:</span> https://github.com/Meidorislav
      </div>

      <div>
        <span className={styles.label}>LinkedIn:</span> https://linkedin.com/in/meidorislav
      </div>

      <div>
        <span className={styles.label}>Location:</span> Perm, Russia
      </div>
    </>
  );
};

export default Contact;
