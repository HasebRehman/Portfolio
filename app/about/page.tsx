import Link from "next/link";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Haseeb Rehman",
  description: "Learn more about Haseeb Rehman, freelance web developer and creative technologist.",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backHome}>
          ← BACK HOME
        </Link>
      </header>
      <main className={styles.main}>
        <span className={styles.tag}>CREATIVE TECHNOLOGIST</span>
        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.content}>
          <div className={styles.leftCol}>
            <p className={styles.highlightText}>
              I operate at the intersection of design, code, and technology, developing bespoke digital solutions for clients worldwide.
            </p>
          </div>
          <div className={styles.rightCol}>
            <p className={styles.bodyText}>
              My name is Haseeb Rehman. I am a freelance web developer who crafts highly interactive, responsive, and performance-oriented websites and web applications.
            </p>
            <p className={styles.bodyText}>
              By combining robust frontend and backend architectures (Next.js, React, Laravel, PHP, WordPress) with creative interactions (GSAP, WebGL), I build custom web experiences that stand out and deliver results.
            </p>
            <div className={styles.skills}>
              <h3>CORE SERVICES</h3>
              <ul>
                <li>Custom Web Development</li>
                <li>Frontend Architecture & UI Engineering</li>
                <li>Full-Stack Web Applications</li>
                <li>Interactive Web Design & Motion Design</li>
              </ul>
            </div>
            <Link href="/contact" className={styles.ctaLink}>
              LET'S COLLABORATE →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
