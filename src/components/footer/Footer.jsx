import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Micaiah. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="social icon"
          className={styles.icon}
        />
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="social icon"
          className={styles.icon}
        />
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="social icon"
          className={styles.icon}
        />
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="social icon"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
