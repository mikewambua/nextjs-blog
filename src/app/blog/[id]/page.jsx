import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            non molestias quaerat autem animi, quo deserunt veniam magnam
            voluptatibus! Et optio magnam perspiciatis corrupti labore,
            voluptatibus laborum iure ducimus, architecto aliquam vitae. Laborum
            eum provident excepturi, voluptate sit eligendi. Exercitationem at
            fugit sequi voluptatem quos iusto porro, nesciunt officia!
            Obcaecati?
          </p>
          <div className={styles.author}>
            <Image
              src="/blog.jpg"
              alt="post image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Micaiah Wambua</span>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image
            src="/blog.jpg"
            alt="post image"
            width={500}
            height={250}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          obcaecati ad, ab aperiam blanditiis molestias ipsum ratione quia
          distinctio dolore expedita in sed cum ullam dolorem perferendis
          tempora quam veritatis ex repudiandae? Veniam molestias asperiores
          officia blanditiis officiis quis voluptatibus, quidem nihil non
          dolorum, ratione illum eos minima consequuntur quaerat?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fugit
          aspernatur nam similique quo perferendis voluptatum amet quaerat aut
          asperiores non placeat vel modi iusto libero est excepturi, delectus
          optio omnis repudiandae. Consectetur, veritatis totam officiis esse
          sint minima dicta illum assumenda dignissimos. Modi iusto recusandae
          vel officiis animi sed aspernatur expedita dolor dolorem, distinctio
          placeat porro! Quas incidunt odio explicabo ea eveniet eum veniam,
          maiores fugiat nemo sunt asperiores?
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quae
          vitae? Debitis voluptas rem, voluptate error esse expedita fugiat
          eaque quis quae? Officiis commodi assumenda minus, quibusdam sit
          adipisci voluptate impedit explicabo exercitationem cumque neque
          magni, doloribus aliquam modi placeat?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          exercitationem dolorum sint cupiditate modi perspiciatis nulla,
          corrupti itaque eveniet a sapiente nostrum natus sit fuga. Ipsum a
          aperiam qui iusto. Optio, tenetur sapiente qui ad, neque laborum
          ratione porro dicta provident consequuntur illo dignissimos numquam
          alias possimus quod eius incidunt! Porro odit ea quibusdam, mollitia
          cupiditate cum consectetur animi, excepturi quo quod corporis velit
          dolore impedit vel! Sequi, vero nam?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
