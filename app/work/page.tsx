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
            <h3>CURELOGICS</h3>
            <p>Creative Digital Experience</p>
            <Link href="/work/curelogics" className={styles.projectLink}>
              EXPLORE ARCHIVE →
            </Link>
          </div>
          <div className={styles.projectCard}>
            <span className={styles.number}>02</span>
            <h3>ATTENDANCE MANAGEMENT SYSTEM</h3>
            <p>Enterprise Web Application</p>
            <Link href="/work/attendance-management-system" className={styles.projectLink}>
              EXPLORE ARCHIVE →
            </Link>
          </div>
          <div className={styles.projectCard}>
            <span className={styles.number}>03</span>
            <h3>MAUDE NATASHA</h3>
            <p>Creative Personal Website</p>
            <Link href="/work/maude-natasha" className={styles.projectLink}>
              EXPLORE ARCHIVE →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
