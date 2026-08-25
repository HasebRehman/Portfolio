"use client";

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Heading and CTA */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Not just a website,<br />real business results
            </h2>
            <div className={styles.ctaWrapper}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span className={styles.btnText}>Start a Project</span>
                <div className={styles.circleArrow}>
                  <span className={styles.arrowIconInner}>↗</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className={styles.middleCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className={styles.footerLink}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact System */}
          <div className={styles.rightCol}>
            <h3 className={styles.colTitle}>Contact System</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.21 2.03 5.92L2.5 22l4.2-1.46A9.92 9.92 0 0012 22c5.48 0 10-4.48 10-10S17.48 2 12 2zm5.72 13.92c-.22.62-1.29 1.21-1.78 1.27-.47.06-.94.08-3.04-.8A13.43 13.43 0 018.9 12.9a8.91 8.91 0 01-1.78-3.52 2.76 2.76 0 01.81-2.02c.24-.24.53-.3.7-.3.17 0 .34.01.49.02.16.01.37-.06.58.46.22.53.75 1.83.81 1.96.07.13.11.28.02.46-.09.18-.17.29-.34.48-.17.19-.36.42-.51.57-.17.17-.35.35-.15.69.2.34.89 1.46 1.9 2.36 1.3 1.16 2.39 1.52 2.73 1.69.34.17.54.14.74-.09.2-.23.86-1 .99-1.34.13-.34.27-.29.47-.21.2.08 1.27.6 1.49.71.22.11.37.17.42.27.06.09.06.55-.16 1.17z" />
                  </svg>
                </div>
                <a
                  href="https://wa.me/923268795099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactValue}
                >
                  +92 3268795099
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className={styles.contactValue}>
                  Lahore, Punjab, Pakistan
                </span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>
                  </svg>
                </div>
                <a
                  href="mailto:haseebrehman3460@gmail.com"
                  className={styles.contactValue}
                >
                  haseebrehman3460@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Display Background Text */}
        <div className={styles.bgTextContainer}>
          <h1 className={styles.bgText}>HASEEB REHMAN</h1>
        </div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className={styles.bottomBar}>
          <div className={styles.socialsList}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCapsule}
              title="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCapsule}
              title="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://wa.me/923268795099"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCapsule}
              title="WhatsApp Contact"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.33c-.24.68-1.2 1.25-1.96 1.41-.52.11-1.2.2-3.49-.75-2.93-1.21-4.82-4.2-4.96-4.39-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.17 1.03-2.46.27-.29.6-.36.8-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.58.83 2.03.9 2.18.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.38-.24.64-.14.26.1 1.66.78 1.95.92.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
              </svg>
            </a>
            <a
              href="mailto:haseebrehman3460@gmail.com"
              className={styles.socialCapsule}
              title="Send Email"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          <p className={styles.copyright}>
            ©2026. HASEEB REHMAN - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
