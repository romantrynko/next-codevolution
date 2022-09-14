import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Image from 'next/image';


const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const pageName = pathname.split('/')[1].toUpperCase();
  const { data: session, status } = useSession();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.button_page}>
          {pathname !== '/' && (
            <button className={styles.button} onClick={() => router.push('/')}>
              &larr;
            </button>
          )}
          <h2 className={styles.title} onClick={() => router.push('/events')}>
            {pageName.length ? pageName : 'Next.js CRUD App'}
          </h2>

        </div>
        {
          status === "authenticated" ? <div className={styles.user}>
            <span>
              {session?.user?.email}
            </span>
            <div className={styles.avatar}>
              <Image src={session?.user?.image || ''} width={45}
                height={45} alt='avatar' objectFit="cover" />
            </div>
          </div> :
            <div>
              <h4>
                Guest
              </h4>
            </div>
        }
      </div>
      <div className={styles.filler}></div>
    </>
  );
};

export default Header;
