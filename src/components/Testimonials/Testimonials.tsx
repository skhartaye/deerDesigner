"use client";

import { useState } from 'react';
import styles from './Testimonials.module.css';
import { Quote, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('FAMILY');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.label}>TESTIMONIALS</div>
          <h2 className={styles.title}>Hear What Our Clients Have to Say</h2>
          
          <div className={styles.tabs}>
            {['FAMILY', 'DIVORCE', 'CHILD CUSTODY', 'DOMESTIC VIOLENCE'].map(tab => (
              <button 
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.cards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className={styles.card}>
            <div className={styles.quoteIcon}>
              <Quote size={40} strokeWidth={1.5} />
            </div>
            <p className={styles.text}>
              Autumn Osbourne offered top-notch counsel and legal support during a difficult, high-conflict divorce. My family wouldn't be where we are today without her. The entire Deer Designer Family Law team — from Autumn to paralegals to office staff — consistently goes above and beyond for their clients. I can't recommend Autumn and Deer Designer Family Law enough. Thank you!
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <ImageIcon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className={styles.name}>MARY</div>
                <div className={styles.subtext}>Placeholder</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className={styles.card}>
            <div className={styles.quoteIcon}>
              <Quote size={40} strokeWidth={1.5} />
            </div>
            <p className={styles.text}>
              We highly recommend the legal services of attorney Buckley. Attorney Buckley has represented us in a very difficult family issue and we have been more than satisfied. The firm is extremely knowledgeable about family law and has consistently conducted themselves with the utmost professionalism. We would not think of going into a courtroom without them.
            </p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <ImageIcon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className={styles.name}>DAVID AND PAM</div>
                <div className={styles.subtext}>Placeholder</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.pagination}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className={`${styles.dot} ${styles.active}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </motion.div>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6 }}
        >
          <a href="#" className={styles.button}>READ MORE TESTIMONIALS &rarr;</a>
        </motion.div>
      </div>
    </section>
  );
}
