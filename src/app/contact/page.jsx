import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Button } from '@/components';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{"Let's Keep in Touch"}</h1>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image
            src="/contact.jpg"
            fill={true}
            alt="contact"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className={styles.input}
          />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className={styles.textarea}
          ></textarea>

          <Button url={'#'} text={'Send'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
