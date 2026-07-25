"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./about.module.css";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Hero Parallax Scroll Effect
      gsap.to(heroRef.current, {
        y: 100,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Approach Visual Card Parallax
    if (approachRef.current) {
      const visualCard = approachRef.current.querySelector(`.${styles.visualCard}`);
      if (visualCard) {
        gsap.to(visualCard, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: approachRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    // Philosophy Quote Parallax
    if (philosophyRef.current) {
      const quote = philosophyRef.current.querySelector(`.${styles.philosophyQuote}`);
      if (quote) {
        gsap.to(quote, {
          y: -35,
          ease: "none",
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    // Scroll reveal sections
    const sections = [
      introRef.current,
      approachRef.current,
      capabilitiesRef.current,
      techRef.current,
      philosophyRef.current,
      connectRef.current,
    ];

    sections.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const capabilities = [
    {
      num: "01",
      title: "Full-Stack Development",
      description: "Scalable, full-stack web applications engineered with Next.js, React, Node.js, and modern databases.",
    },
    {
      num: "02",
      title: "WordPress",
      description: "Custom WordPress theme development, Elementor, WooCommerce stores, speed optimization, and CMS management.",
    },
    {
      num: "03",
      title: "Web Design",
      description: "Modern UI/UX design, visual hierarchy, responsive layout engineering, and user-centric web interface design.",
    },
    {
      num: "04",
      title: "Shopify",
      description: "Conversion-focused Shopify online stores, custom Liquid theme design, app integrations, and product management.",
    },
    {
      num: "05",
      title: "Webflow",
      description: "Bespoke visual web development, CMS architecture, custom animations, and clean responsive Webflow builds.",
    },
    {
      num: "06",
      title: "Wix",
      description: "Professional Wix & Wix Studio website development, custom code integrations, and business web solutions.",
    },
    {
      num: "07",
      title: "Hostinger",
      description: "Domain configuration, fast cloud server deployment, SSL setup, DNS management, and reliable hosting optimization.",
    },
  ];

  const techCategories = [
    {
      title: "AI & INTELLIGENCE",
      skills: ["OpenAI API", "Anthropic Claude", "Gemini AI", "Vercel AI SDK", "LangChain", "Cursor / AGY"],
    },
    {
      title: "FRONTEND",
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5 / CSS3"],
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "JWT / OAuth"],
    },
    {
      title: "DATABASE & STORAGE",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Supabase", "Redis", "Firebase"],
    },
    {
      title: "DEVOPS & INFRASTRUCTURE",
      skills: ["Docker", "Vercel", "GitHub Actions", "Nginx", "Linux / Ubuntu", "AWS"],
    },
    {
      title: "DEVELOPER TOOLS",
      skills: ["Git / GitHub", "Postman", "Figma", "VS Code", "Turborepo", "Vite / Webpack"],
    },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      <main className={styles.main}>
        {/* 1. HERO SECTION */}
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.heroMeta}>
            <span className={styles.tag}>ABOUT</span>
            <span className={styles.subTag}>HASEEB REHMAN — FULL-STACK & FREELANCE DEVELOPER</span>
          </div>
          <h1 className={styles.title}>
            I BUILD DIGITAL EXPERIENCES WHERE TECHNOLOGY MEETS CREATIVITY.
          </h1>
          <div className={styles.heroDivider} />
        </section>

        {/* 2. INTRODUCTION / BACKGROUND SECTION */}
        <section ref={introRef} className={styles.introSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>BACKGROUND</h2>
          </div>
          
          <div className={styles.introContainer}>
            {/* Lead Statement */}
            <div className={styles.leadBox}>
              <p className={styles.leadText}>
                I’m <strong className={styles.nameHighlight}>Haseeb Rehman</strong>, a full-stack developer and freelance web developer focused on building modern websites, web applications, and interactive digital experiences.
              </p>
            </div>

            {/* Core Intersection Highlight Card */}
            <div className={styles.intersectionCard}>
              <div className={styles.intersectionGlow} />
              <h3 className={styles.intersectionTitle}>
                My work sits at the intersection of{" "}
                <span className={styles.violetText}>Technology</span>,{" "}
                <span className={styles.cyanText}>Design</span>, and{" "}
                <span className={styles.pinkText}>Problem-Solving</span>.
              </h3>
              <p className={styles.intersectionDesc}>
                I transform ideas into digital products that are not only visually engaging but also functional, responsive, and built to solve real-world problems.
              </p>
            </div>

            {/* Two-Column Studio Cards */}
            <div className={styles.introCardsGrid}>
              <div className={styles.introCard}>
                <div className={styles.cardTag}>01 / VERSATILITY</div>
                <h4 className={styles.cardTitle}>Digital Product Scope</h4>
                <p className={styles.cardText}>
                  From custom WordPress websites and eCommerce platforms to React and Next.js applications, dashboards, management systems, and immersive interactive experiences, I enjoy working across different areas of the web to bring ideas to life.
                </p>
              </div>

              <div className={styles.introCard}>
                <div className={styles.cardTag}>02 / PHILOSOPHY</div>
                <h4 className={styles.cardTitle}>Core Principle</h4>
                <p className={styles.cardText}>
                  I believe great digital products are created by combining <strong>clear thinking</strong>, <strong>thoughtful design</strong>, and <strong>solid development</strong>. That is why I focus on understanding the problem first, defining the right direction, and building a solution that feels as good as it works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MY APPROACH SECTION */}
        <section ref={approachRef} className={styles.approachSection}>
          <div className={styles.approachContent}>
            <div className={styles.approachTextCol}>
              <span className={styles.sectionNum}>03</span>
              <span className={styles.categoryTag}>PHILOSOPHY & PROCESS</span>
              <h2 className={styles.approachTitle}>I don't just write code.</h2>
              <p className={styles.approachDescription}>
                I explore ideas, solve problems, design experiences, and build products that connect technology with people.
              </p>
              <p className={styles.approachSubDescription}>
                Every project is an opportunity to learn something new, experiment with new technologies, and create something meaningful.
              </p>
            </div>
            <div className={styles.approachVisualCol}>
              <div className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <div className={styles.visualDots}>
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <span className={styles.visualTitle}>approach.config.ts</span>
                </div>
                <div className={styles.visualImageWrapper}>
                  <Image
                    src="/images/about-tech.jpg"
                    alt="Creative Developer Approach Visual"
                    fill
                    className={styles.visualImg}
                  />
                  <div className={styles.visualOverlay}>
                    <div className={styles.codeSnippet}>
                      <code>
                        <span className={styles.codeKeyword}>const</span> project = &#123;<br />
                        &nbsp;&nbsp;vision: <span className={styles.codeString}>"Human-Centered"</span>,<br />
                        &nbsp;&nbsp;code: <span className={styles.codeString}>"Clean & Scalable"</span>,<br />
                        &nbsp;&nbsp;design: <span className={styles.codeString}>"Interactive & Intuitive"</span><br />
                        &#125;;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CAPABILITIES SECTION */}
        <section ref={capabilitiesRef} className={styles.capabilitiesSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>CAPABILITIES</h2>
          </div>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <div key={cap.num} className={styles.capabilityCard} data-cursor-big="true">
                <div className={styles.capTop}>
                  <span className={styles.capNum}>{cap.num}</span>
                  <span className={styles.capIcon}>↗</span>
                </div>
                <h3 className={styles.capTitle}>{cap.title}</h3>
                <p className={styles.capDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TECHNOLOGY SECTION */}
        <section ref={techRef} className={styles.techSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNum}>05</span>
            <h2 className={styles.sectionTitle}>WHAT I WORK WITH</h2>
          </div>
          <div className={styles.techGrid}>
            {techCategories.map((cat, idx) => (
              <div key={idx} className={styles.techCategoryCard}>
                <h3 className={styles.techCatTitle}>{cat.title}</h3>
                <div className={styles.skillsPills}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PERSONAL PHILOSOPHY & CURRENTLY SECTION */}
        <section ref={philosophyRef} className={styles.philosophySection}>
          <div className={styles.philosophyBanner}>
            <span className={styles.quoteIcon}>“</span>
            <h2 className={styles.philosophyQuote}>
              Great digital experiences are created where thoughtful design meets solid development.
            </h2>
          </div>

          <div className={styles.currentlyBox}>
            <span className={styles.currentlyLabel}>CURRENTLY</span>
            <p className={styles.currentlyText}>
              I’m constantly learning, experimenting, and building. My goal is simple: to create digital products that are useful, memorable, and built with purpose.
            </p>
          </div>
        </section>

        {/* 7. CONNECT / CTA SECTION */}
        <section ref={connectRef} className={styles.connectSection}>
          <div className={styles.connectInner}>
            <span className={styles.connectTag}>LET'S WORK TOGETHER</span>
            <h2 className={styles.connectTitle}>Have an idea worth building?</h2>
            <p className={styles.connectDescription}>
              If you have an idea, a problem to solve, or something worth building, let's create something meaningful together.
            </p>
            <div className={styles.ctaWrapper}>
              <Link href="/contact" className={styles.connectBtn} data-cursor-big="true">
                LET'S TALK <span className={styles.btnArrow}>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
