"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./servicespreview.module.css";

interface ServiceItem {
  num: string;
  name: string;
  accent: string;
}

export default function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    { num: "01", name: "WEB DEVELOPMENT", accent: "var(--accent)" },
    { num: "02", name: "FRONTEND DEVELOPMENT", accent: "var(--accent-secondary)" },
    { num: "03", name: "FULL-STACK APPLICATIONS", accent: "var(--accent)" },
    { num: "04", name: "INTERACTIVE DIGITAL EXPERIENCES", accent: "var(--accent-secondary)" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Stagger fade-in service rows
    const rows = listRef.current?.querySelectorAll(`.${styles.row}`);
    if (rows) {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <div ref={headingRef} className={styles.header}>
          <span className={styles.tag}>WHAT I DO</span>
          <h2 className={styles.title}>SERVICES</h2>
        </div>

        <div ref={listRef} className={styles.list}>
          {services.map((service) => (
            <div
              key={service.num}
              className={styles.row}
              style={{ "--row-accent": service.accent } as React.CSSProperties}
            >
              <div className={styles.rowInner}>
                <span className={styles.num}>{service.num}</span>
                <h3 className={styles.name}>{service.name}</h3>
                <span className={styles.dash}>—</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <Link
            href="/services"
            className={styles.ctaLink}
            data-cursor-big="true"
          >
            EXPLORE SERVICES <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
