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
      id: "curelogics",
      num: "01",
      title: "CURELOGICS",
      category: "Creative Digital Experience",
      link: "/work/curelogics",
      accent: "#6366f1",
      bgPattern: "radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
      image: "/images/project-1.png",
    },
    {
      id: "attendance-management-system",
      num: "02",
      title: "ATTENDANCE SYSTEM",
      category: "Enterprise Web Application",
      link: "/work/attendance-management-system",
      accent: "#06b6d4",
      bgPattern: "radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)",
    },
    {
      id: "maude-natasha",
      num: "03",
      title: "MAUDE NATASHA",
      category: "Creative Personal Website",
      link: "/work/maude-natasha",
      accent: "#ec4899",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 60%)",
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
                    {/* Abstract technical wireframe lines inside card to look premium */}
                    <div className={styles.techLines}>
                      <div className={styles.horizontalLine} />
                      <div className={styles.verticalLine} />
                      <div
                        className={styles.circleGraphic}
                        style={{ borderColor: project.accent }}
                      />
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
