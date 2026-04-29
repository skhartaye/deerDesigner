import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Close Attention To What You Need</h2>
        </div>
        
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.circle}>01</div>
            <div className={styles.stepTitle}>CONSULT</div>
          </div>
          <div className={styles.arrow}>&rarr;</div>
          <div className={styles.step}>
            <div className={styles.circle}>02</div>
            <div className={styles.stepTitle}>MATCH</div>
          </div>
          <div className={styles.arrow}>&rarr;</div>
          <div className={styles.step}>
            <div className={styles.circle}>03</div>
            <div className={styles.stepTitle}>ADVOCATE</div>
          </div>
        </div>
        
        <div className={styles.content}>
          <p>
            When you have your first consultation with our firm, you will personally speak with Deer Designer or another senior-level attorney to tell your story. From there, you will work with one lawyer for the duration of your case. You will not get passed to a junior associate or be lost in the shuffle.
          </p>
          <p>
            We take care to match you with the attorney at our firm who can be of the most help in your unique situation. We respect that this is your life, and what happens now can have cascading effects in the future. We aim to ensure that you can face the future from a position of strength and hope.
          </p>
          
          <a href="#" className={styles.button}>
            LEARN MORE ABOUT US &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
