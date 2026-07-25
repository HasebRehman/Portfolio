"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./finalcta.module.css";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = textRef.current;
    if (!text) return;

    // Scroll trigger entrance for CTA elements
    gsap.fromTo(
      text.querySelectorAll("h2, a"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.ctaSection}>
      {/* Decorative Grid Lines */}
      <div className={styles.gridBg}>
        <div className={styles.leftLine} />
        <div className={styles.rightLine} />
      </div>

      <div ref={textRef} className={styles.content}>
        <span className={styles.tag}>COLLABORATION</span>
        
        <h2 className={styles.title}>
          HAVE AN IDEA?
          <span className={styles.subTitle}>LET'S BUILD SOMETHING.</span>
        </h2>

        <Link
          href="/contact"
          className={styles.ctaBtn}
          data-cursor-big="true"
        >
          START A PROJECT <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
