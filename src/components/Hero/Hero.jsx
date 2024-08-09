import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h6 className={styles.title}><b>Hi, I'm Syed Faizan Javed</b></h6>
        <p className={styles.description}>
          I'm a Full-Stack developer with 2 years of experience using Javascript,React and Nodejs. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:faizanjaved5565@gmail.com?subject=SweetWords&body=Please share the details with me!" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
