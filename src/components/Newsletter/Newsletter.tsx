"use client";

import { useState } from 'react';
import styles from './Newsletter.module.css';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section id="resources" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.label}>NEWSLETTER SIGNUP</div>
          <h2 className={styles.title}>
            <span className={styles.italic}>Ex Files featuring </span>
            <span className={styles.gold}>Pour Decisions</span>
          </h2>
          <ul className={styles.list}>
            <li>Stay up to date on changes in North Carolina law</li>
            <li>Get specialist legal insights to your most pressing family law questions</li>
            <li>Access exclusive guides and resources you won't find anywhere else</li>
          </ul>
          <p className={styles.funTwist}>
            And for a fun twist: don't miss our "Pour Decisions" section, featuring wine tips from our lawyer-wine specialist Deer Designer!
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {subscribed ? (
            <div className={styles.successMessage}>
              Thank you for subscribing!
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your Name" className={styles.input} required />
              <input type="email" placeholder="Enter your Email" className={styles.input} required />
              <button type="submit" className={styles.submitBtn}>SUBSCRIBE NOW</button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
