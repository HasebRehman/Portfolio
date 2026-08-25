"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./servicespreview.module.css";

interface ServiceItem {
  num: string;
  name: string;
  description: string;
  tags: string[];
}

export default function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      num: "01",
      name: "Web Design",
      description: "Psychology-driven layouts that capture attention and guide the user's journey",
      tags: ["Discovery", "Wireframing", "UI Design", "Prototyping"],
    },
    {
      num: "02",
      name: "Web Development",
      description: "Clean, scalable code optimized for lightning-fast speeds and search engine dominance.",
      tags: ["Plan", "Build", "Test", "Launch", "Support"],
    },
    {
      num: "03",
      name: "Landing Page",
      description: "High-stakes conversion funnels built to maximize your ad spend and lead generation",
      tags: ["Conversion Focus", "Strong CTA", "Mobile Optimised"],
    },
    {
      num: "04",
      name: "Ecommerce Store",
      description: "High-converting WooCommerce stores engineered for secure transactions and seamless business scaling",
      tags: ["Optimized Checkout", "Secure Payments", "Mobile-First UX"],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger fade-in service rows and headers cleanly
    if (listRef.current) {
      const elements = listRef.current.querySelectorAll(
        `.${styles.row}`
      );
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Header containing Title & Description */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tagRow}>
              <span className={styles.sparkle}>✦</span>
              <span className={styles.tagText}>My Services</span>
            </div>
            <h2 className={styles.title}>How I Help You Grow</h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.headerDescription}>
              Everything you need to build a high-performing website.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              <span className={styles.btnText}>Start a Project</span>
              <div className={styles.circleArrow}>
                <span className={styles.arrowIconInner}>↗</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Services Rows List */}
        <div ref={listRef} className={styles.list}>
          {services.map((service) => (
            <div key={service.num} className={styles.row}>
              {/* Left Column: Number & pointer line */}
              <div className={styles.leftCol}>
                <span className={styles.num}>{service.num}</span>
                <div className={styles.pointerLine}>
                  <svg
                    width="100%"
                    height="12"
                    viewBox="0 0 100 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6H92M92 6L86 1M92 6L86 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Column: Title, Description, Tags, and Arrow */}
              <div className={styles.rightCol}>
                <div className={styles.rowTitleArea}>
                  <h3 className={styles.name}>{service.name}</h3>
                  <div className={styles.rowArrowBtn}>
                    <span>↗</span>
                  </div>
                </div>

                <p className={styles.rowDescription}>{service.description}</p>

                <div className={styles.rowTags}>
                  {service.tags.map((tag) => (
                    <span key={tag} className={styles.serviceTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
