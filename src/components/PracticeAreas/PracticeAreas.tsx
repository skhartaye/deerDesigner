"use client";

import { useState } from 'react';
import styles from './PracticeAreas.module.css';
import { motion } from 'framer-motion';
import { Users, Landmark, Baby, HeartHandshake, Home, Ban, FileText, Key, Hand } from 'lucide-react';

const areas = [
  {
    title: "DIVORCE & SEPARATION",
    desc: "Steady, strategic guidance through divorce, with a focus on protecting your future at every stage.",
    fullDesc: "Our experienced attorneys will work closely with you to navigate the complexities of divorce, from filing the initial paperwork to finalizing the settlement.",
    icon: <Users size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "HIGH-ASSET DIVORCE",
    desc: "Sophisticated representation for divorces involving substantial assets, complex finances, and long-term financial interests.",
    fullDesc: "We have extensive experience valuing businesses, uncovering hidden assets, and negotiating complex property settlements to protect your wealth.",
    icon: <Landmark size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "CHILD CUSTODY",
    desc: "Thoughtful advocacy for parenting arrangements that protect your children and preserve what matters most.",
    fullDesc: "We prioritize the well-being of your children, crafting comprehensive parenting plans that foster strong relationships and provide stability.",
    icon: <Baby size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "CHILD SUPPORT",
    desc: "Clear, informed guidance on establishing, modifying, and enforcing child support with care and precision.",
    fullDesc: "We ensure child support calculations accurately reflect income and expenses, advocating for fair arrangements that meet your child's needs.",
    icon: <HeartHandshake size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "PROPERTY DIVISION",
    desc: "Strategic counsel for dividing assets and debts in a way that safeguards your financial future.",
    fullDesc: "North Carolina is an equitable distribution state. We meticulously catalog assets and debts to secure your rightful share of the marital estate.",
    icon: <Home size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "SPOUSAL SUPPORT",
    desc: "Experienced representation in alimony matters involving lifestyle, earning capacity, and long-term stability.",
    fullDesc: "Whether you are seeking support or defending against a claim, we provide aggressive representation to achieve a fair alimony arrangement.",
    icon: <Ban size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "PRENUPTIAL AGREEMENTS",
    desc: "Carefully crafted agreements designed to protect assets, set clear expectations, and support peace of mind.",
    fullDesc: "We draft and review premarital agreements to provide financial certainty and protect your premarital assets in the event of a divorce.",
    icon: <FileText size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "ESTATE PLANNING",
    desc: "Personalized estate planning services to help you protect your wishes, your assets, and the people you love.",
    fullDesc: "From wills and trusts to powers of attorney, we create comprehensive estate plans tailored to your unique family dynamics and financial goals.",
    icon: <Key size={24} color="var(--accent-gold)" strokeWidth={1} />
  },
  {
    title: "DOMESTIC VIOLENCE",
    desc: "Compassionate, decisive legal support when your safety, stability, and next steps cannot wait.",
    fullDesc: "We move swiftly to secure domestic violence protective orders (50B), ensuring immediate protection for you and your children.",
    icon: <Hand size={24} color="var(--accent-gold)" strokeWidth={1} />
  }
];

export default function PracticeAreas() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    setExpandedIds(prev => 
      prev.includes(idx) ? prev.filter(id => id !== idx) : [...prev, idx]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="family-law" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.subtitle}>DEER DESIGNER FAMILY PRACTICE AREAS</span>
          <h2 className={styles.title}>Legal Guidance For Every Step Forward</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {areas.map((area, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.iconPlaceholder}>
                {area.icon}
              </div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <div className={styles.cardDesc}>
                <p>{area.desc}</p>
                {expandedIds.includes(idx) && (
                  <p className={styles.fullDesc}>{area.fullDesc}</p>
                )}
              </div>
              <button 
                className={styles.learnMore} 
                onClick={(e) => toggleExpand(e, idx)}
              >
                {expandedIds.includes(idx) ? 'SHOW LESS' : 'LEARN MORE'} <span>&rarr;</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
