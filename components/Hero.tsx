"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import styles from "./hero.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRoleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const rotatingContainerRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 1. Text Rotation loop logic
    const rotatingWords = rotatingContainerRef.current?.querySelectorAll(`.${styles.rotatingWord}`);
    if (rotatingWords && rotatingWords.length > 0) {
      // Hide all words initially except the first one
      gsap.set(rotatingWords, { y: 25, opacity: 0, filter: "blur(5px)", display: "none" });
      gsap.set(rotatingWords[0], { y: 0, opacity: 1, filter: "blur(0px)", display: "inline-block" });

      let currentIndex = 0;

      const rotateWords = () => {
        const nextIndex = (currentIndex + 1) % rotatingWords.length;
        const currentWord = rotatingWords[currentIndex];
        const nextWord = rotatingWords[nextIndex];

        const tl = gsap.timeline();

        // Slide current word up and out with blur
        tl.to(currentWord, {
          y: -25,
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(currentWord, { display: "none" });
          },
        });

        // Slide next word in from below
        gsap.set(nextWord, { display: "inline-block", y: 25, opacity: 0, filter: "blur(5px)" });
        tl.to(
          nextWord,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4" // Overlap animations for a smooth transition
        );

        currentIndex = nextIndex;
      };

      // Loop rotation every 3.5 seconds
      const wordInterval = setInterval(rotateWords, 3500);

      // Clean up interval
      return () => clearInterval(wordInterval);
    }
  }, []);

  useEffect(() => {
    // 2. Entrance Animation sequence
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Ensure container is visible
      gsap.set(containerRef.current, { opacity: 1 });

      // Staggered entry
      tl.fromTo(
        `.${styles.name}, .${styles.role}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
      )
        .fromTo(
          `.${styles.headline}`,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          `.${styles.imageContainer}`,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          `.${styles.btn}`,
          { scale: 0.95, opacity: 0, y: 15 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.heroSection} style={{ opacity: 0 }}>
      <div className={styles.gridContainer}>
        {/* Left Side: Content */}
        <div className={styles.contentCol}>
          {/* Name and Role */}
          <div ref={nameRoleRef} className={styles.nameRoleContainer}>
            <span className={styles.name}>HASEEB REHMAN</span>
            <span className={styles.role}>FULL-STACK DEVELOPER</span>
          </div>

          {/* Animated Text Heading */}
          <div className={styles.textContainer}>
            <h1 ref={headlineRef} className={styles.headline}>
              <span className={styles.fixedText}>I BUILD</span>
              <span ref={rotatingContainerRef} className={styles.rotatingContainer}>
                <span className={styles.rotatingWord}>DIGITAL PRODUCTS</span>
                <span className={styles.rotatingWord}>WEB APPLICATIONS</span>
                <span className={styles.rotatingWord}>DIGITAL EXPERIENCES</span>
              </span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className={styles.ctaContainer}>
            <Link
              href="/work"
              className={`${styles.btn} ${styles.btnPrimary}`}
              data-cursor-big="true"
            >
              <span className={styles.btnText}>VIEW MY WORK</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
            <Link
              href="/contact"
              className={`${styles.btn} ${styles.btnSecondary}`}
              data-cursor-big="true"
            >
              <span className={styles.btnText}>LET'S WORK TOGETHER</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Portrait image (unwrapped, direct, attached) */}
      <div ref={imageContainerRef} className={styles.imageContainer}>
        <Image
          ref={imageRef}
          src="/images/haseeb-her-section-img.png"
          alt="Haseeb Rehman Portrait"
          width={580}
          height={700}
          priority
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
