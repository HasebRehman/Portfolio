"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";

interface ServiceCardData {
  id: string;
  num: string;
  title: string;
  description: string;
  detailedText: string;
  technologies: string[];
  accent: string;
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const servicesData: ServiceCardData[] = [
    {
      id: "full-stack",
      num: "01",
      title: "Full-Stack Development",
      description: "Scalable web applications built with modern technologies.",
      detailedText:
        "I build complete digital products using React, Next.js, Node.js, APIs, authentication, and modern databases — from frontend interfaces to powerful backend systems.",
      technologies: ["React", "Next.js", "Node.js", "APIs", "Databases"],
      accent: "#8b5cf6",
    },
    {
      id: "wordpress",
      num: "02",
      title: "WordPress",
      description: "Custom websites built for performance and growth.",
      detailedText:
        "Custom WordPress websites, Elementor development, WooCommerce stores, theme customization, plugin integrations, speed optimization, SEO, and CMS management.",
      technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "CMS"],
      accent: "#3b82f6",
    },
    {
      id: "web-design",
      num: "03",
      title: "Web Design",
      description: "Digital interfaces designed to be clear, engaging, and memorable.",
      detailedText:
        "Modern UI/UX design, visual hierarchy, responsive layouts, user-focused interfaces, and thoughtful digital experiences that combine usability with strong visual direction.",
      technologies: ["UI/UX", "Responsive Design", "Prototyping", "Visual Design"],
      accent: "#ec4899",
    },
    {
      id: "shopify",
      num: "04",
      title: "Shopify",
      description: "E-commerce experiences designed to turn visitors into customers.",
      detailedText:
        "Conversion-focused Shopify stores, custom Liquid theme development, app integrations, product management, and optimized shopping experiences.",
      technologies: ["Shopify", "Liquid", "E-commerce", "App Integrations"],
      accent: "#10b981",
    },
    {
      id: "webflow",
      num: "05",
      title: "Webflow",
      description: "Visually expressive websites built with precision.",
      detailedText:
        "Custom Webflow websites, CMS architecture, responsive development, advanced animations, interactions, and creative web experiences built around your brand.",
      technologies: ["Webflow", "CMS", "Interactions", "Animations"],
      accent: "#06b6d4",
    },
    {
      id: "wix",
      num: "06",
      title: "Wix",
      description: "Professional websites built around your business.",
      detailedText:
        "Wix and Wix Studio website development, custom code integrations, responsive layouts, CMS solutions, and business-focused digital experiences.",
      technologies: ["Wix", "Wix Studio", "Velo", "CMS"],
      accent: "#f59e0b",
    },
    {
      id: "hosting",
      num: "07",
      title: "Hosting & Deployment",
      description: "From local development to a reliable live website.",
      detailedText:
        "Domain configuration, hosting setup, deployment, DNS management, SSL configuration, performance optimization, and website migration.",
      technologies: ["Vercel", "Hostinger", "DNS", "SSL", "Deployment"],
      accent: "#a855f7",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "I start by understanding your goals, your audience, and the problem that needs to be solved.",
    },
    {
      num: "02",
      title: "SHAPE",
      desc: "I define the right structure, technology, and visual direction for the project.",
    },
    {
      num: "03",
      title: "BUILD",
      desc: "I turn the idea into a responsive, functional, and refined digital experience.",
    },
    {
      num: "04",
      title: "REFINE",
      desc: "I test, optimize, and polish every detail to make the final product perform at its best.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
        }
      );
    }

    // Stagger Service Cards
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(`.${styles.serviceCard}`);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Process section animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(`.${styles.processStepCard}`);
      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CTA Reveal
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <main className={styles.main}>
        {/* ================= HERO SECTION ================= */}
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.heroMeta}>
            <span className={styles.tag}>SERVICES / 01</span>
            <span className={styles.subTag}>HASEEB REHMAN — DIGITAL SYSTEMS & DEVELOPMENT</span>
          </div>
          <h1 className={styles.title}>
            I BUILD THE DIGITAL SYSTEMS BEHIND GREAT IDEAS.
          </h1>
          <p className={styles.heroLead}>
            From custom websites to full-scale web applications, I help businesses and individuals turn ideas into functional, scalable, and memorable digital experiences.
          </p>
          <p className={styles.heroSubText}>
            Whether you need a powerful web application, a high-converting e-commerce store, or a visually engaging website, I bring together strategy, design, development, and technology to build solutions that work.
          </p>
          <div className={styles.heroDivider} />
        </section>

        {/* ================= SERVICES GRID ================= */}
        <section className={styles.servicesGridSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>SERVICES & CAPABILITIES</h2>
          </div>

          <div ref={gridRef} className={styles.cardsGrid}>
            {servicesData.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${isExpanded ? styles.expandedCard : ""}`}
                  style={{ "--card-accent": service.accent } as React.CSSProperties}
                  onClick={() => toggleExpand(service.id)}
                  data-cursor-big="true"
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNum}>{service.num}</span>
                    <span className={styles.cardArrow}>↗</span>
                  </div>

                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>

                  <div className={styles.cardDetailBox}>
                    <p className={styles.cardDetailedText}>{service.detailedText}</p>
                    <div className={styles.techList}>
                      {service.technologies.map((tech) => (
                        <span key={tech} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardFooterHint}>
                    <span>{isExpanded ? "CLICK TO COLLAPSE" : "EXPLORE DETAILS"}</span>
                    <span className={styles.expandIcon}>{isExpanded ? "−" : "+"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= HOW I WORK SECTION ================= */}
        <section ref={processRef} className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>FROM IDEA TO IMPACT</h2>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processStepCard}>
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepIndicator} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section ref={ctaRef} className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <span className={styles.ctaTag}>LET'S WORK TOGETHER</span>
            <h2 className={styles.ctaTitle}>HAVE AN IDEA WORTH BUILDING?</h2>
            <p className={styles.ctaDescription}>
              Let's turn your next idea into something useful, memorable, and built to last.
            </p>
            <div className={styles.btnWrapper}>
              <Link href="/contact" className={styles.ctaBtn} data-cursor-big="true">
                LET'S TALK <span className={styles.btnArrow}>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
