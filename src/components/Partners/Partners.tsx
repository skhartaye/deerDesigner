"use client";

import styles from './Partners.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "DEER DESIGNER",
    title: "Managing Partner",
    image: "/deer.jpg"
  },
  {
    name: "AMANDA C. KNIGHT",
    title: "Partner",
    image: "/amanda.jpg"
  },
  {
    name: "AUTUMN D. OSBOURNE",
    title: "Partner",
    image: "/autum.jpg"
  }
];

export default function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={styles.title}>Meet Our Partners</h2>
          <p className={styles.subtitle}>
            Get to know the experienced leaders guiding our firm with strength, strategy, and a commitment to exceptional client service.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={partner.image} 
                  alt={partner.name}
                  fill
                  className={styles.partnerImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{partner.name}</h3>
                <p className={styles.role}>{partner.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className={styles.button}>
            MEET ALL ATTORNEYS &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
