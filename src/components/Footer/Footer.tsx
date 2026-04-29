import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo.png" 
                alt="Deer Designer Logo" 
                width={80} 
                height={80} 
                className={styles.logoImage} 
              />
            </Link>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">
                <div className={styles.iconPlaceholder}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
              </a>
              <a href="#" aria-label="LinkedIn">
                <div className={styles.iconPlaceholder}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
              </a>
              <a href="#" aria-label="YouTube">
                <div className={styles.iconPlaceholder}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>QUICK LINKS</h4>
              <nav className={styles.navLinks}>
                <Link href="/#about">ABOUT US</Link>
                <Link href="/#blog">BLOG</Link>
                <Link href="/#testimonials">TESTIMONIALS</Link>
                <Link href="/#schedule">RESOURCES</Link>
                <Link href="/contact">CONTACT</Link>
                <Link href="/#schedule">SCHEDULE A CONSULTATION</Link>
              </nav>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>FAMILY LAW</h4>
              <nav className={styles.navLinks}>
                <Link href="/#family-law">DIVORCE</Link>
                <Link href="/#family-law">HIGH ASSET DIVORCE</Link>
                <Link href="/#family-law">CHILD CUSTODY</Link>
                <Link href="/#family-law">CHILD SUPPORT</Link>
                <Link href="/#family-law">PROPERTY DIVISION</Link>
                <Link href="/#family-law">SPOUSAL SUPPORT</Link>
                <Link href="/#family-law">PRENUPTIAL AGREEMENTS</Link>
                <Link href="/#family-law">DOMESTIC VIOLENCE</Link>
              </nav>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>ESTATE PLANNING</h4>
              <nav className={styles.navLinks}>
                <Link href="/#family-law">WILL AND TRUST</Link>
                <Link href="/#family-law">POWER OF ATTORNEY</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <div className={styles.bottomLinks}>
            <Link href="/#privacy">PRIVACY POLICY</Link>
            <Link href="/#disclaimer">DISCLAIMER</Link>
          </div>
          <div className={styles.copyright}>
            &copy; DEER DESIGNER FAMILY LAW P.L.L.C.
          </div>
          <div className={styles.credit}>
            DESIGNED BY SECOND CLICK MEDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
