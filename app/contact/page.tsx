import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Haseeb Rehman",
  description: "Get in touch with Haseeb Rehman for web development and creative technology projects.",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backHome}>
          ← BACK HOME
        </Link>
      </header>
      <main className={styles.main}>
        <span className={styles.tag}>GET IN TOUCH</span>
        <h1 className={styles.title}>CONTACT</h1>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <p className={styles.highlightText}>
              Have an idea? Let's build something exceptional together.
            </p>
            <div className={styles.infoBlock}>
              <span className={styles.label}>EMAIL</span>
              <a href="mailto:haseeb@example.com" className={styles.valueLink}>
                haseeb@example.com
              </a>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.label}>LOCATION</span>
              <p className={styles.value}>Lahore, Pakistan / Available Worldwide</p>
            </div>
          </div>
          <div className={styles.rightCol}>
            <form className={styles.form} onSubmit={undefined}>
              <div className={styles.formGroup}>
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" placeholder="Your Email Address" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
