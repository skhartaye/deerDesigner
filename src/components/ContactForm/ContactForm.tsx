"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>GET IN TOUCH</div>
          <h1 className={styles.title}>
            <span className={styles.italic}>Schedule a </span>
            <span className={styles.gold}>Consultation</span>
          </h1>
          <p className={styles.subtitle}>
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.successMessage}>
              Thank you for reaching out! We will be in contact with you shortly.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label_text}>Name *</label>
                <input type="text" id="name" className={styles.input} required placeholder="Jane Doe" />
              </div>
              
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label_text}>Email Address *</label>
                  <input type="email" id="email" className={styles.input} required placeholder="jane@example.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label_text}>Phone Number *</label>
                  <input type="tel" id="phone" className={styles.input} required placeholder="(555) 555-5555" />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label_text}>How can we help you?</label>
                <textarea id="message" className={styles.textarea} rows={5} placeholder="Briefly describe your situation..."></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>SEND MESSAGE</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
