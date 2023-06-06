import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.main_container}>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.img_container}>
          <Image
            src="/banner.jpg"
            width={400}
            height={250}
            alt="blog image"
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Responsive website designs</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae cum ab error non? Voluptate optio eligendi, neque eius
            harum est, assumenda voluptates quos, cupiditate qui minima. Odit,
            accusantium quis? Responsive and scalable templates.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.img_container}>
          <Image
            src="/contact.jpg"
            width={400}
            height={250}
            alt="blog image"
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Programming Lessons</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae cum ab error non? Voluptate optio eligendi, neque eius
            harum est, assumenda voluptates quos, cupiditate qui minima. Odit,
            accusantium quis? Responsive and scalable templates.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.img_container}>
          <Image
            src="/hero.jpg"
            width={400}
            height={250}
            alt="blog image"
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Reliable Data Analytics Solutions</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae cum ab error non? Voluptate optio eligendi, neque eius
            harum est, assumenda voluptates quos, cupiditate qui minima. Odit,
            accusantium quis? Responsive and scalable templates.
          </p>
        </div>
      </Link>
      <Link className={styles.container} href="/blog/testId">
        <div className={styles.img_container}>
          <Image
            src="/bg.jpg"
            width={400}
            height={250}
            alt="blog image"
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Scalable applications</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            repudiandae cum ab error non? Voluptate optio eligendi, neque eius
            harum est, assumenda voluptates quos, cupiditate qui minima. Odit,
            accusantium quis? Responsive and scalable templates.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
