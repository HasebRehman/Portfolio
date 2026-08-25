"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context | null = null;

    const playHeroSequence = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Ensure container is visible
        if (containerRef.current) {
          gsap.set(containerRef.current, { opacity: 1 });
        }

        // Staggered entrance animation
        tl.fromTo(
          `.${styles.name}, .${styles.role}`,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1 }
        )
          .fromTo(
            `.${styles.headline}`,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.6"
          )
          .fromTo(
            `.${styles.imageContainer}`,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
            "-=0.8"
          )
          .fromTo(
            `.${styles.btn}`,
            { scale: 0.95, opacity: 0, y: 15 },
            { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
            "-=0.6"
          );
      }, containerRef);
    };

    // Play animation on load
    playHeroSequence();

    // Replay animation when preloader finishes
    window.addEventListener("preloaderComplete", playHeroSequence);

    return () => {
      window.removeEventListener("preloaderComplete", playHeroSequence);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.heroSection}>
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
                <span className={styles.rotatingWord}>Full-Stack Apps</span>
                <span className={styles.rotatingWord}>SaaS Products</span>
                <span className={styles.rotatingWord}>Digital Products</span>
                <span className={styles.rotatingWord}>Business Solutions</span>
                <span className={styles.rotatingWord}>Modern Websites</span>
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
              <span className={styles.circleArrow}>
                <span className={styles.btnArrow}>↗</span>
              </span>
            </Link>
            <a
              href="/CV/Haseeb_Rehman_Resume.pdf"
              download="Haseeb_Rehman_Resume.pdf"
              className={`${styles.btn} ${styles.btnSecondary}`}
              data-cursor-big="true"
            >
              <span className={styles.btnText}>DOWNLOAD CV</span>
              <span className={styles.btnArrow}>↘</span>
            </a>
          </div>

          {/* Social Icons Bar under CTA Buttons */}
          <div className={styles.socialLinksRow}>
            <a
              href="https://github.com/HasebRehman"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              title="GitHub Profile"
              aria-label="GitHub Profile"
              data-cursor-big="true"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/haseebrehmanweb/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              data-cursor-big="true"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href="https://wa.me/923268795099"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              title="WhatsApp Contact (+92 3268795099)"
              aria-label="WhatsApp Contact"
              data-cursor-big="true"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.33c-.24.68-1.2 1.25-1.96 1.41-.52.11-1.2.2-3.49-.75-2.93-1.21-4.82-4.2-4.96-4.39-.15-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.17 1.03-2.46.27-.29.6-.36.8-.36.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.58.83 2.03.9 2.18.07.15.12.33.02.53-.1.19-.15.31-.3.48-.15.17-.31.38-.45.51-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.38-.24.64-.14.26.1 1.66.78 1.95.92.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
              </svg>
            </a>

            <a
              href="mailto:haseebrehman3460@gmail.com"
              className={styles.socialIconBtn}
              title="Gmail (haseebrehman3460@gmail.com)"
              aria-label="Send Email"
              data-cursor-big="true"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Portrait image container */}
      <div ref={imageContainerRef} className={styles.imageContainer}>
        <Image
          ref={imageRef}
          src="/images/haseeb-hero-portrait-v2.png"
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
