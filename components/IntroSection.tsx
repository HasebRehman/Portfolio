"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./intro.module.css";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (leftCol) {
      gsap.fromTo(
        leftCol,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    if (rightCol) {
      const elements = rightCol.children;
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.18,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          duration: 0.9,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.introSection}>
      <div className={styles.container}>
        {/* Left Column: Tag & Arrow Indicator */}
        <div ref={leftColRef} className={styles.leftCol}>
          <span className={styles.tag}>
            <span className={styles.sparkle}>✦</span> About Me
          </span>
          <div className={styles.lineArrowWrapper}>
            <div className={styles.line} />
            <span className={styles.lineArrow}>→</span>
          </div>
        </div>

        {/* Right Column: Content & CTAs */}
        <div ref={rightColRef} className={styles.rightCol}>
          <p className={styles.paragraph}>
            I'm Haseeb Rehman, a full-stack developer combining technology, creativity, and problem-solving to build meaningful digital experiences.
          </p>

          <div className={styles.ctaContainer}>
            <Link href="/contact" className={styles.btnPrimary} data-cursor-big="true">
              <span className={styles.btnText}>Start a Project</span>
              <span className={styles.circleArrow}>
                <span className={styles.btnArrow}>↗</span>
              </span>
            </Link>
            
            <Link href="/work" className={styles.btnSecondary} data-cursor-big="true">
              <span className={styles.btnText}>View My Work</span>
              <span className={styles.btnArrow}>↘</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
