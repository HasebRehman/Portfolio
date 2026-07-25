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
  link: string;
  accent: string;
  bgPattern: string;
  image?: string;
}

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "veylohr",
      num: "01",
      title: "VEYLOHR",
      category: "Creative Digital Experience",
      link: "/work/veylohr",
      accent: "#8b5cf6",
      bgPattern: "radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
      image: "/images/veylohr.jpg",
    },
    {
      id: "ecommerce",
      num: "02",
      title: "ECOMMERCE",
      category: "Full-Stack Online Store",
      link: "/work/ecommerce",
      accent: "#3b82f6",
      bgPattern: "radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)",
      image: "/images/ecommerce.jpg",
    },
    {
      id: "attendance-system",
      num: "03",
      title: "ATTENDANCE SYSTEM",
      category: "Enterprise Web Application",
      link: "/work/attendance-system",
      accent: "#06b6d4",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
      image: "/images/attendance-system.jpg",
    },
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

    // Stagger fade-in projects
    const cards = projectsRef.current?.querySelectorAll(`.${styles.projectRow}`);
    if (cards) {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            duration: 1,
            ease: "power3.out",
          }
        );
      });
    }
  }, []);

  return (
    <section ref={containerRef} className={styles.selectedWorkSection}>
      <div className={styles.container}>
        <div ref={headingRef} className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.tag}>SELECTED WORK</span>
            <h2 className={styles.title}>PROJECTS</h2>
          </div>
          <p className={styles.description}>
            A selection of digital experiences, websites, and applications I've built.
          </p>
        </div>

        <div ref={projectsRef} className={styles.projectsList}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`${styles.projectRow} ${isEven ? styles.evenRow : styles.oddRow}`}
              >
                <Link
                  href={project.link}
                  className={styles.cardLink}
                  data-cursor-big="true"
                >
                  <div
                    className={styles.visualContainer}
                    style={{ background: project.bgPattern }}
                  >
                    {/* Ambient glow effect on hover */}
                    <div
                      className={styles.glowBackdrop}
                      style={{ background: `radial-gradient(circle, ${project.accent}40 0%, transparent 70%)` }}
                    />
                    
                    {/* Premium Browser Mockup Frame */}
                    <div
                      className={styles.browserFrame}
                      style={{
                        borderColor: `rgba(255, 255, 255, 0.12)`,
                        boxShadow: `0 20px 50px -20px ${project.accent}30`
                      }}
                    >
                      <div className={styles.browserHeader}>
                        <div className={styles.browserDots}>
                          <span className={`${styles.dot} ${styles.dotRed}`} />
                          <span className={`${styles.dot} ${styles.dotYellow}`} />
                          <span className={`${styles.dot} ${styles.dotGreen}`} />
                        </div>
                        <div className={styles.addressBar}>
                          <span>https://</span>{project.id}.app
                        </div>
                      </div>
                      <div className={styles.imageWrapper}>
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 55vw"
                            priority={index === 0}
                            className={styles.projectImage}
                          />
                        )}
                      </div>
                    </div>
                    
                    <span className={styles.cardNum}>{project.num}</span>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.category} style={{ color: project.accent }}>
                      {project.category}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.viewLink}>
                      EXPLORE CASE STUDY <span className={styles.arrow}>→</span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaFooter}>
          <Link
            href="/work"
            className={styles.archiveLink}
            data-cursor-big="true"
          >
            VIEW ALL WORK <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
