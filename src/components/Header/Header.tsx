"use client";

import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
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
          <div className={styles.phone}>
            <span>CALL</span> 919-626-9148
          </div>
        </div>
      </div>
      <div className={styles.mainNav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="Deer Designer Logo" 
              width={36} 
              height={36} 
              className={styles.logoImage} 
            />
            <span className={styles.logoText}>deer<span>designer</span></span>
          </Link>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <Link href="/#about">ABOUT</Link>
            <Link href="/#family-law">FAMILY LAW</Link>
            <Link href="/#contact">ESTATE PLANNING</Link>
            <Link href="/#testimonials">TESTIMONIALS</Link>
            <Link href="/#schedule">RESOURCES</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
          <div className={styles.cta}>
            <Link href="/#schedule" className={styles.ctaButton}>SCHEDULE A CONSULTATION</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
