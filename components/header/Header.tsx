import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';


const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const pageName = pathname.split('/')[1].toUpperCase();
  
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title} onClick={() => router.push('/events')}>
          {pageName.length ? pageName : 'Next.js CRUD App'}
        </h2>
        {pathname !== '/' && (
          <button className={styles.button} onClick={() => router.push('/')}>
            &larr;
          </button>
        )}
      </div>
      <div className={styles.filler}></div>
    </>
  );
};

export default Header;
