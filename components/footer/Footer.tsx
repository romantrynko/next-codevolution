import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <h2 className={styles.title}>Next.js CRUD App</h2>
      </div>
      <div className={styles.filler}></div>
    </>
  );
};

export default Footer;
