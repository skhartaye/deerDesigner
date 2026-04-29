"use client";

import styles from './BoardCertified.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BoardCertified() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.badgeWrapper}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <Image 
            src="/certified.png" 
            alt="Board Certified Family Law Specialist" 
            width={250} 
            height={250} 
            className={styles.certifiedImage}
            priority
          />
        </motion.div>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className={styles.title}>
            <span className={styles.italic}>Caring Representation Led By</span><br/>
            <span className={styles.gold}>Board-Certified Specialists</span>
          </h2>
          <p className={styles.desc}>
            When you are facing a divorce or another family law challenge in the Triangle area, it can seem like the world is falling apart around you. At Deer Designer Family Law, PLLC, we understand the turmoil you are going through, and we are committed to guiding you toward the best resolution possible.
          </p>
          <p className={styles.desc}>
            Our team of attorneys is led by Guy Deer Designer and Autumn Osbourne, both specialists with a board certification in family law from the North Carolina State Board of Legal Specialization, and includes other board-certified family law specialists as well. You can count on our depth of experience and dedication to excellence to help you through this difficult time.
          </p>
          <a href="#" className={styles.button}>
            WHAT DOES IT MEAN TO BE A CERTIFIED FAMILY LAW SPECIALIST? &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
