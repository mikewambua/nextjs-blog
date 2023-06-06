import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.select_title}>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link href={'/portfolio/websites'} className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href={'/portfolio/analytics'} className={styles.item}>
          <span className={styles.title}>Digital Analytics</span>
        </Link>
        <Link href={'/portfolio/applications'} className={styles.item}>
          <span className={styles.title}>Software</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
