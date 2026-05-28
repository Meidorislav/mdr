import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <div>Initializing secure connection...</div>
      <div>[ OK ] GPG Key verified.</div>
      <div>[ OK ] Handshake complete.</div>
      <br />
      <div><span style={{ color: 'var(--accent-color)' }}>Email:</span> meidori@example.com</div>
      <div><span style={{ color: 'var(--accent-color)' }}>GitHub:</span> https://github.com/meidori</div>
      <div><span style={{ color: 'var(--accent-color)' }}>LinkedIn:</span> https://linkedin.com/in/meidori</div>
    </>
  );
};

export default Contact;
