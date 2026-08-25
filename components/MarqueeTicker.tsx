"use client";

import styles from "./marquee.module.css";

export default function MarqueeTicker() {
  const items = [
    "3+ Years Experience",
    "20+ Projects",
    "Full-Stack Development",
    "10+ Technologies",
    "Production-Ready Apps"
  ];

  // Repeat the array to ensure the marquee fills wide monitors and loops seamlessly
  const doubleItems = [...items, ...items];

  return (
    <section className={styles.tickerContainer} aria-label="Statistics Marquee">
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {/* First loop group */}
          <div className={styles.tickerGroup}>
            {doubleItems.map((item, idx) => (
              <span key={`group1-${idx}`} className={styles.tickerItem}>
                <span className={styles.text}>{item}</span>
                <span className={styles.separator}>✦</span>
              </span>
            ))}
          </div>
          {/* Second loop group for infinite offset alignment */}
          <div className={styles.tickerGroup} aria-hidden="true">
            {doubleItems.map((item, idx) => (
              <span key={`group2-${idx}`} className={styles.tickerItem}>
                <span className={styles.text}>{item}</span>
                <span className={styles.separator}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
