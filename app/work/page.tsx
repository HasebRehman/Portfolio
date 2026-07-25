import Link from "next/link";
import styles from "./work.module.css";

export const metadata = {
  title: "Work | Haseeb Rehman",
  description: "A showcase of web development and creative technology projects by Haseeb Rehman.",
};

export default function WorkPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backHome}>
          ← BACK HOME
        </Link>
      </header>
      <main className={styles.main}>
        <span className={styles.tag}>SELECTED PROJECTS</span>
        <h1 className={styles.title}>WORK</h1>
        <p className={styles.text}>
          A curated collection of websites, web applications, and digital experiences is currently being compiled.
        </p>
        <div className={styles.projectsPlaceholder}>
          <div className={styles.projectCard}>
            <span className={styles.number}>01</span>
            <h3>VEYLOHR</h3>
            <p>Creative Digital Experience</p>
            <Link href="/work/veylohr" className={styles.projectLink}>
              EXPLORE CASE STUDY →
            </Link>
          </div>
          <div className={styles.projectCard}>
            <span className={styles.number}>02</span>
            <h3>ECOMMERCE</h3>
            <p>Full-Stack Online Store</p>
            <Link href="/work/ecommerce" className={styles.projectLink}>
              EXPLORE CASE STUDY →
            </Link>
          </div>
          <div className={styles.projectCard}>
            <span className={styles.number}>03</span>
            <h3>ATTENDANCE SYSTEM</h3>
            <p>Enterprise Web Application</p>
            <Link href="/work/attendance-system" className={styles.projectLink}>
              EXPLORE CASE STUDY →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
