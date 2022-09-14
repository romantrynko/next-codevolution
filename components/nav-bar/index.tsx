import { navs } from 'assets/constants';
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'
import type { Navs } from './types';

const NavBar
  = () => {
    return (
      <div className={styles.navMenu}>
        {navs.map(({ name, href }: Navs) => {
          return (
            <Link href={href} key={name}>
              <a>{name}</a>
            </Link>
          );
        })}
      </div>
    )
  }

export default NavBar
