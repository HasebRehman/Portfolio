"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./intro.module.css";

export default function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textEl = textRef.current;
    if (!textEl) return;

    // Split text into words for premium scroll-scrub reveal
    const words = textEl.textContent?.split(" ") || [];
    textEl.innerHTML = words
      .map((word) => `<span class="${styles.word}">${word}</span>`)
      .join(" ");

    const wordSpans = textEl.querySelectorAll(`.${styles.word}`);

    // Create scrub timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 65%",
        scrub: 0.5,
      },
    });

    tl.fromTo(
      wordSpans,
      { opacity: 0.15 },
      { opacity: 1, stagger: 0.02 }
    );

    // Stagger reveal the link
    gsap.fromTo(
      linkRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className={styles.introSection}>
      <div className={styles.container}>
        <span className={styles.tag}>INTRODUCTION</span>
        
        <p ref={textRef} className={styles.paragraph}>
          I'm Haseeb Rehman, a full-stack developer combining technology, creativity, and problem-solving to build meaningful digital experiences.
        </p>

        <div ref={linkRef} className={styles.linkContainer}>
          <Link href="/about" className={styles.link} data-cursor-big="true">
            MORE ABOUT ME <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
