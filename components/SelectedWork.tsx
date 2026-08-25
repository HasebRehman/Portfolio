"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./selectedwork.module.css";

interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  link: string;
  accent: string;
  bgPattern: string;
  image?: string;
  year: string;
  badge: string;
  tags: string[];
  showUrl?: boolean;
  showBadgePill?: boolean;
  showMetaTop?: boolean;
  alignImage?: "left" | "right";
  showDots?: boolean;
}

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "veylohr",
      num: "01",
      title: "Veylohr HR Management Platform",
      category: "Creative Digital Experience",
      description:
        "A multi-company HR platform designed to isolate data and manage operations at scale with role-based access controls and shift trackers.",
      link: "/work/veylohr",
      accent: "#8b5cf6",
      bgPattern:
        "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.25) 0%, transparent 60%)",
      image: "/images/veylohr.jpg",
      year: "2025",
      badge: "Web Development",
      tags: [],
    },
    {
      id: "lizzt",
      num: "02",
      title: "Lizzt Event Planning Application",
      category: "Event Planning & Organization",
      description:
        "A collaborative event coordination platform with shared checklists, chat channels, and automated cost splitting tools.",
      link: "https://lizzt.app/",
      accent: "#4f46e5",
      bgPattern:
        "radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)",
      image: "/images/lizzt.jpg",
      year: "2026",
      badge: "Web Application",
      tags: [],
    },
    {
      id: "ecommerce",
      num: "03",
      title: "Full-Stack E-Commerce Marketplace",
      category: "Full-Stack Online Store",
      description:
        "A high-performance online store featuring multi-portal administration dashboards, real-time catalogs, and secure checkout portals.",
      link: "https://github.com/HasebRehman/Ecommerce",
      accent: "#3b82f6",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)",
      image: "/images/ecommerce.jpg",
      year: "2024",
      badge: "Full-Stack Dev",
      tags: [],
    },
    {
      id: "attendance-system",
      num: "04",
      title: "Attendance Analytics System",
      category: "Enterprise Web Application",
      description:
        "A secure, real-time enterprise management system engineered for high employee volumes featuring analytics dashboards.",
      link: "/work/attendance-system",
      accent: "#06b6d4",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 60%)",
      image: "/images/attendance-system.jpg",
      year: "2024",
      badge: "Enterprise App",
      tags: [],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger fade-in projects and headers cleanly
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(
        `.${styles.projectCard}, .${styles.desktopHeader}, .${styles.editorialBlock}`
      );
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.selectedWorkSection}>
      {/* Background glowing gradients */}
      <div className={styles.bgGlowSphereLeft} />
      <div className={styles.bgGlowSphereRight} />

      <div className={styles.container}>
        {/* Mobile Header (Hidden on Desktop) */}
        <div className={styles.mobileHeader}>
          <div className={styles.tagRow}>
            <span className={styles.sparkle}>✦</span>
            <span className={styles.tagText}>Some Recent Projects</span>
          </div>
          <h2 className={styles.sectionHeading}>Selected Work That Delivers Results</h2>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div ref={projectsRef} className={styles.gridContainer}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            {/* Card 1: Veylohr */}
            <div
              className={styles.projectCard}
              style={{ "--card-accent": projects[0].accent } as React.CSSProperties}
            >
              <Link href={projects[0].link} className={styles.imageLink}>
                <div className={styles.visualWrapper}>
                  <div
                    className={styles.ambientGlow}
                    style={{ background: projects[0].bgPattern }}
                  />
                  <div className={styles.imageContainer}>
                    {projects[0].image && (
                      <Image
                        src={projects[0].image}
                        alt={projects[0].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className={styles.projectImage}
                      />
                    )}
                  </div>
                </div>
              </Link>
              <div className={styles.contentWrapper}>
                <div className={styles.titleRow}>
                  <Link href={projects[0].link}>
                    <h3 className={styles.projectTitle}>{projects[0].title}</h3>
                  </Link>
                </div>
                <p className={styles.projectDescription}>{projects[0].description}</p>
                <div className={styles.badgeContainer}>
                  <span className={styles.badgePill}>{projects[0].badge}</span>
                </div>
              </div>
            </div>

            {/* Card 3: E-Commerce */}
            <div
              className={styles.projectCard}
              style={{ "--card-accent": projects[2].accent } as React.CSSProperties}
            >
              <Link href={projects[2].link} className={styles.imageLink}>
                <div className={styles.visualWrapper}>
                  <div
                    className={styles.ambientGlow}
                    style={{ background: projects[2].bgPattern }}
                  />
                  <div className={styles.imageContainer}>
                    {projects[2].image && (
                      <Image
                        src={projects[2].image}
                        alt={projects[2].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.projectImage}
                      />
                    )}
                  </div>
                </div>
              </Link>
              <div className={styles.contentWrapper}>
                <div className={styles.titleRow}>
                  <Link href={projects[2].link}>
                    <h3 className={styles.projectTitle}>{projects[2].title}</h3>
                  </Link>
                </div>
                <p className={styles.projectDescription}>{projects[2].description}</p>
                <div className={styles.badgeContainer}>
                  <span className={styles.badgePill}>{projects[2].badge}</span>
                </div>
              </div>
            </div>

            {/* Editorial Text Block */}
            <div className={styles.editorialBlock}>
              <p className={styles.editorialText}>
                I strive for pay attention<br />to the smallest details
              </p>
              <div className={styles.editorialCta}>
                <Link href="/work" className={styles.btnPrimary}>
                  <span className={styles.btnText}>See All Works</span>
                  <div className={styles.circleArrow}>
                    <span className={styles.arrowIconInner}>↗</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            {/* Desktop Header (Hidden on Mobile) */}
            <div className={styles.desktopHeader}>
              <div className={styles.tagRow}>
                <span className={styles.sparkle}>✦</span>
                <span className={styles.tagText}>Some Recent Projects</span>
              </div>
              <h2 className={styles.sectionHeading}>Selected Work That Delivers Results</h2>
            </div>

            {/* Card 2: Lizzt */}
            <div
              className={styles.projectCard}
              style={{ "--card-accent": projects[1].accent } as React.CSSProperties}
            >
              <Link href={projects[1].link} className={styles.imageLink}>
                <div className={styles.visualWrapper}>
                  <div
                    className={styles.ambientGlow}
                    style={{ background: projects[1].bgPattern }}
                  />
                  <div className={styles.imageContainer}>
                    {projects[1].image && (
                      <Image
                        src={projects[1].image}
                        alt={projects[1].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.projectImage}
                      />
                    )}
                  </div>
                </div>
              </Link>
              <div className={styles.contentWrapper}>
                <div className={styles.titleRow}>
                  <Link href={projects[1].link}>
                    <h3 className={styles.projectTitle}>{projects[1].title}</h3>
                  </Link>
                </div>
                <p className={styles.projectDescription}>{projects[1].description}</p>
                <div className={styles.badgeContainer}>
                  <span className={styles.badgePill}>{projects[1].badge}</span>
                </div>
              </div>
            </div>

            {/* Card 4: Attendance System */}
            <div
              className={styles.projectCard}
              style={{ "--card-accent": projects[3].accent } as React.CSSProperties}
            >
              <Link href={projects[3].link} className={styles.imageLink}>
                <div className={styles.visualWrapper}>
                  <div
                    className={styles.ambientGlow}
                    style={{ background: projects[3].bgPattern }}
                  />
                  <div className={styles.imageContainer}>
                    {projects[3].image && (
                      <Image
                        src={projects[3].image}
                        alt={projects[3].title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.projectImage}
                      />
                    )}
                  </div>
                </div>
              </Link>
              <div className={styles.contentWrapper}>
                <div className={styles.titleRow}>
                  <Link href={projects[3].link}>
                    <h3 className={styles.projectTitle}>{projects[3].title}</h3>
                  </Link>
                </div>
                <p className={styles.projectDescription}>{projects[3].description}</p>
                <div className={styles.badgeContainer}>
                  <span className={styles.badgePill}>{projects[3].badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


