"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./processtimeline.module.css";

interface Step {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverables: string[];
  accent: string;
  iconSvg: React.ReactNode;
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Research & Requirements",
      desc: "Deep dive into project goals, user personas, technical scope, and competitive analysis to establish a solid foundation.",
      deliverables: ["Technical Scope", "User Journey Maps", "Architecture Goals"],
      accent: "#8b5cf6",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "PLAN",
      subtitle: "Strategy & Architecture",
      desc: "Engineering scalable system architecture, database schemas, API structures, and strategic roadmap milestones.",
      deliverables: ["System Blueprint", "Database Schema", "API Contracts"],
      accent: "#3b82f6",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "DESIGN",
      subtitle: "UI/UX & Interactive Prototype",
      desc: "Crafting responsive, high-fidelity visual interfaces with custom glassmorphic styling, typography, and micro-interactions.",
      deliverables: ["High-Fidelity UI", "Component Library", "Interactive Prototype"],
      accent: "#ec4899",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a7 7 0 1 0 7 7" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "DEVELOP",
      subtitle: "Full-Stack Engineering",
      desc: "Writing clean, modular code with Next.js, React, TypeScript, GSAP animations, and high-performance backend endpoints.",
      deliverables: ["Production Code", "GSAP Animations", "Clean API Integration"],
      accent: "#06b6d4",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "LAUNCH",
      subtitle: "QA, Optimize & Deploy",
      desc: "Comprehensive testing, performance optimization (99+ Lighthouse target), Vercel/AWS deployment, and continuous monitoring.",
      deliverables: ["Performance Audit", "Production Deploy", "99+ Lighthouse Score"],
      accent: "#10b981",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.5 1.63-2.32L4.5 12.5v4z" />
          <path d="M12 15l-3.5-3.5 8.71-8.71c.39-.39 1.02-.39 1.41 0l2.09 2.09c.39.39.39 1.02 0 1.41L12 15z" />
          <path d="M9.5 8.5L4 14" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    let ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) {
        const scrollAmount = track.scrollWidth - window.innerWidth;

        // Pinned horizontal track animation
        gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 0.6,
              start: "top top",
              end: () => `+=${scrollAmount * 1.2}`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const progress = self.progress;
                const currentStep = Math.min(
                  steps.length,
                  Math.max(1, Math.ceil(progress * steps.length))
                );
                setActiveStep(currentStep);
              },
            },
          }
        );
      } else {
        // Mobile vertical scroll active states
        const stepElements = container.querySelectorAll(`.${styles.stepCard}`);
        stepElements.forEach((stepEl, idx) => {
          gsap.fromTo(
            stepEl,
            { opacity: 0.3, y: 30 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: stepEl,
                start: "top 75%",
                end: "bottom 30%",
                toggleActions: "play reverse play reverse",
                onEnter: () => setActiveStep(idx + 1),
                onEnterBack: () => setActiveStep(idx + 1),
              },
            }
          );
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const activeAccent = steps[activeStep - 1]?.accent || "#6366f1";

  return (
    <section ref={containerRef} className={styles.processSection}>
      {/* Background ambient lighting */}
      <div
        className={styles.bgLightOrb}
        style={{
          background: `radial-gradient(circle, ${activeAccent}20 0%, transparent 70%)`,
        }}
      />

      <div className={styles.stickyContainer}>
        {/* Top Header & Tab Navigation */}
        <div className={styles.topHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.subTag}>WORKFLOW METHODOLOGY</span>
            <h2 className={styles.sectionTitle}>
              HOW WE <span className={styles.highlightText}>BUILD</span>
            </h2>
          </div>

          {/* Interactive Phase Tabs */}
          <div className={styles.tabsContainer}>
            {steps.map((s, i) => {
              const stepIdx = i + 1;
              const isTabActive = stepIdx === activeStep;
              return (
                <div
                  key={s.num}
                  className={`${styles.tabBtn} ${
                    isTabActive ? styles.activeTab : ""
                  }`}
                  style={
                    isTabActive
                      ? ({ "--tab-accent": s.accent } as React.CSSProperties)
                      : {}
                  }
                >
                  <span className={styles.tabNum}>{s.num}</span>
                  <span className={styles.tabName}>{s.title}</span>
                </div>
              );
            })}
          </div>

          {/* Counter Indicator */}
          <div className={styles.indicatorSteps}>
            <span className={styles.activeNum} style={{ color: activeAccent }}>
              0{activeStep}
            </span>
            <span className={styles.slash}>/</span>
            <span className={styles.totalNum}>05</span>
          </div>
        </div>

        {/* Horizontal Track container */}
        <div ref={trackRef} className={styles.horizontalTrack}>
          {/* Subtle connecting line across node dots */}
          <div className={styles.timelineLines}>
            <div className={styles.progressLineTrack} />
          </div>

          <div className={styles.stepsWrapper}>
            {steps.map((step, idx) => {
              const stepIndex = idx + 1;
              const isActive = stepIndex === activeStep;
              const isCompleted = stepIndex < activeStep;

              let stateClass = styles.upcoming;
              if (isActive) stateClass = styles.active;
              else if (isCompleted) stateClass = styles.completed;

              return (
                <div
                  key={step.num}
                  className={`${styles.stepCard} ${stateClass}`}
                  style={{ "--step-accent": step.accent } as React.CSSProperties}
                >
                  {/* Glowing Node Dot on Timeline */}
                  <div className={styles.dotContainer}>
                    <div
                      className={styles.dot}
                      style={
                        isActive || isCompleted
                          ? {
                              borderColor: step.accent,
                              boxShadow: `0 0 20px ${step.accent}80`,
                              backgroundColor: step.accent,
                            }
                          : {}
                      }
                    >
                      <div className={styles.dotInner} />
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardTopRow}>
                      <span
                        className={styles.stepNumText}
                        style={{ color: step.accent }}
                      >
                        {step.num}
                      </span>
                      <div
                        className={styles.iconPill}
                        style={{
                          backgroundColor: `${step.accent}15`,
                          borderColor: `${step.accent}35`,
                          color: step.accent,
                        }}
                      >
                        {step.iconSvg}
                      </div>
                    </div>

                    <div className={styles.titleMeta}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <span className={styles.stepSubtitle}>
                        {step.subtitle}
                      </span>
                    </div>

                    <p className={styles.stepDesc}>{step.desc}</p>

                    {/* Deliverables List */}
                    <div className={styles.deliverablesBox}>
                      <span className={styles.deliverablesLabel}>
                        KEY DELIVERABLES:
                      </span>
                      <ul className={styles.deliverablesList}>
                        {step.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className={styles.deliverableItem}>
                            <span
                              className={styles.bulletDot}
                              style={{ backgroundColor: step.accent }}
                            />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

