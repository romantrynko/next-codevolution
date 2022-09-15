import { navs } from 'assets/constants';
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'
import type { Navs } from './types';
import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className={styles.navMenu}>

      {
        navs.map(({ name, href }: Navs) => {
          return (
            <Link href={href} key={name}>
              <a>{name}</a>
            </Link>
          );
        })
      }
      {status === 'authenticated' &&
        <>
          {<Link href='#'>
            <a onClick={e => {
              e.preventDefault()
              signOut()
            }}>Sign Out</a>
          </Link>}
        </>
      }
      {
        status === 'unauthenticated' && <Link href='#'>
          <a onClick={e => {
            e.preventDefault()
            signIn()
          }}>Sign In</a>
        </Link>
      }


    </div>
  )
}

export default NavBar
