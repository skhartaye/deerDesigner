"use client";

import styles from './OfficeLocations.module.css';
import { Image as ImageIcon, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const offices = [
  {
    name: "DURHAM OFFICE",
    address: "3511 Shannon Road Suite 150\nDurham, NC, 27707"
  },
  {
    name: "CARY OFFICE",
    address: "201 Shannon Oaks Circle Suite 100\nCary, NC, 27511"
  },
  {
    name: "WAKE FOREST OFFICE",
    address: "1740 Heritage Center Drive Suite 202\nWake Forest, NC, 27587"
  },
  {
    name: "PITTSBORO OFFICE",
    address: "17 Hillsboro Street Pittsboro,\nNC, 27312"
  }
];

export default function OfficeLocations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {offices.map((office, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.icon}>
                <div className={styles.iconCircle}>
                  <MapPin size={18} color="var(--accent-gold)" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className={styles.name}>{office.name}</h3>
              <p className={styles.address}>{office.address}</p>
              <div className={styles.mapPlaceholder}>
                <ImageIcon size={64} color="#667484" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
