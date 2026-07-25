import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Services | Haseeb Rehman",
  description: "Bespoke digital solutions, web development and creative technology services.",
};

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backHome}>
          ← BACK HOME
        </Link>
      </header>
      <main className={styles.main}>
        <span className={styles.tag}>CAPABILITIES</span>
        <h1 className={styles.title}>SERVICES</h1>
        <div className={styles.grid}>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNum}>01</span>
            <h2>WEB DEVELOPMENT</h2>
            <p>
              Building fast, modern, and SEO-optimized websites from scratch. I build fully responsive and production-ready sites utilizing modern architectures.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNum}>02</span>
            <h2>FRONTEND DEVELOPMENT</h2>
            <p>
              Writing modular, clean, and interactive frontend interfaces using React, Next.js, and TypeScript. Focus on state management, fast page speeds, and flawless animations.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNum}>03</span>
            <h2>FULL-STACK APPLICATIONS</h2>
            <p>
              Custom application engineering using robust backend systems. From custom WordPress/PHP configurations to Laravel, Node.js, database designs, and API integrations.
            </p>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.serviceNum}>04</span>
            <h2>INTERACTIVE DIGITAL EXPERIENCES</h2>
            <p>
              Crafting bespoke interactive experiences utilizing GSAP animations, canvas drawings, and customized smooth scrolling to deliver captivating web products.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
