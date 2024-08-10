import React from "react";

import styles from "./Summary.module.css";
import { getImageUrl } from "../../utils";

export const Summary = () => {
  return (
    <section className={styles.container} id="summary">
      <h2 className={styles.title}>Summary</h2>

      <div className={styles.experience}>
        <div className={styles.experienceItem}>
          <img src={getImageUrl("summary/summary.png")} alt="Summary logo" />
          <div className={styles.experienceText}>
            <ul>
              <li>
                Syed Faizan Javed is an innovative web developer with over 2
                years of experience in creating user-centered digital and print
                marketing materials, from concept to polished deliverables.
                Currently pursuing a<b> Bachelor's degree in Computer Science
                (2021-2025) </b>in Lahore, Pakistan, he has developed a strong
                foundation in programming, algorithms, and software development
                through rigorous coursework and hands-on projects. His academic
                background, including a foundation in <b>FSc Pre-Engineering
                (2019-2021)</b>, has equipped him with analytical and
                problem-solving skills, preparing him for a successful career in
                the tech industry.
              </li>
            
            <br/>
            <li>
              Web Development Specialist, Stackup Solutions, Lahore (2024 -
              Present): Lead the design, development, and implementation of
              graphic layouts and communication materials. Managed and guided a
              7-member design team, providing oversight on all project aspects.
              <b>Web Development Specialist</b>, Digitech, Lahore (2022): Developed
              various marketing materials, including logos, brochures,
              infographics, and advertisements. Managed up to 5 concurrent
              projects, delivering under pressure while consulting clients on
              optimal design solutions.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
