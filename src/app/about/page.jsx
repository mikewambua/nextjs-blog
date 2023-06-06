import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { Button } from '@/components';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src="/bg.jpg"
          fill={true}
          alt="about-banner"
          className={styles.img}
        />
        <div className={styles.img_text}>
          <h1 className={styles.img_title}>Digital Storytellers</h1>
          <h2 className={styles.img_desc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            cumque accusantium dicta, commodi alias laudantium consequuntur, et
            doloremque sit minima dignissimos modi quod, distinctio numquam
            molestiae itaque saepe libero veniam ipsum rem eius fuga autem.
            Porro consequatur natus ipsa nihil dolor officiis unde, labore minus
            ullam aliquam minima. Tempore, consequatur.
            <br />
            <br />
            Incidunt id illum a, placeat voluptatem temporibus earum ex.
            Temporibus optio libero earum quo exercitationem? Suscipit aliquid
            eveniet illo laborum similique officiis itaque facilis ipsum
            molestias necessitatibus! In, deserunt quod at nihil omnis, eveniet
            debitis facere, explicabo vitae ab obcaecati eaque ipsam repudiandae
            dolores itaque.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            pariatur optio eligendi voluptate soluta, excepturi esse labore
            repellat quas mollitia possimus qui animi. Tempore, vel dolores?
            Facilis maxime libero neque fugiat! Asperiores, quae reprehenderit
            itaque consequuntur eos neque dolorem iure et cum modi esse,
            voluptates fugiat rem, beatae vero impedit ipsum sapiente? Quisquam,
            tempore deserunt. Creative illustrations:
            <br />
            <br />
            - Dynamic websites
            <br />
            <br />
            - Data analytics
            <br />
            <br />- Software development
          </p>
          <Button url={'/contact'} text={'Contact'} />
        </div>
      </div>
    </div>
  );
};

export default About;
