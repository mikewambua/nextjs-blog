'use client';

import { Links } from '@/data/links';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { DarkMode } from '..';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        micaiah
      </Link>
      <div className={styles.links}>
        <DarkMode />
        {Links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log('Logged out');
          }}
        >
          {' '}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
