import React from 'react';
import styles from './page.module.css';
import { Button } from '@/components';
import Image from 'next/image';

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.cat_title}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            voluptatibus fuga. Officia molestias nobis neque, explicabo
            reiciendis exercitationem! Voluptate ea asperiores veniam neque,
            fuga maxime tenetur unde iure dolore repellendus.
          </p>
          <Button url={'#'} text={'See More'} />
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            src="/hero.jpg"
            fill={true}
            alt="category"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            voluptatibus fuga. Officia molestias nobis neque, explicabo
            reiciendis exercitationem! Voluptate ea asperiores veniam neque,
            fuga maxime tenetur unde iure dolore repellendus.
          </p>
          <Button url={'#'} text={'See More'} />
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            src="/bg.jpg"
            fill={true}
            alt="category"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
