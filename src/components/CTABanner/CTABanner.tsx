"use client";

import styles from './CTABanner.module.css';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="schedule" className={styles.section}>
      {/* Abstract shapes */}
      <motion.div 
        className={styles.shapeLeft}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className={styles.shapeRight}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className={styles.container}>
        <motion.div 
          className={styles.glassCard}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className={styles.title}>
            <span className={styles.italic}>Your Future </span>
            <span className={styles.gold}>Starts Here</span>
          </motion.h2>
          <motion.p variants={itemVariants} className={styles.subtitle}>
            Divorce & Family Law Attorneys Serving Durham, Raleigh, Cary, the Triangle, and Throughout North Carolina.
          </motion.p>
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.star}>★</span>
            LED BY BOARD CERTIFIED SPECIALISTS IN FAMILY LAW
            <span className={styles.star}>★</span>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.buttons}>
            <a href="#" className={styles.btnPrimary}>CALL NOW &rarr;</a>
            <a href="#" className={styles.btnSecondary}>SCHEDULE A CONSULTATION</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
