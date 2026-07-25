"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./processtimeline.module.css";

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand the idea.",
    },
    {
      num: "02",
      title: "PLAN",
      desc: "Define the direction.",
    },
    {
      num: "03",
      title: "DESIGN",
      desc: "Shape the experience.",
    },
    {
      num: "04",
      title: "DEVELOP",
      desc: "Build the solution.",
    },
    {
      num: "05",
      title: "LAUNCH",
      desc: "Bring it to life.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    let ctx = gsap.context(() => {
      // Check if mobile (screen width < 768px)
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!isMobile) {
        // Desktop/Tablet horizontal scrolling configuration
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
              scrub: 0.5,
              start: "top top",
              end: () => `+=${scrollAmount * 1.5}`, // Pinned duration scales with horizontal size
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                // Dynamically update active step count [1 to 5] based on scroll percentage
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

        // Fill horizontal progress line matching scroll percent
        gsap.fromTo(
          `.${styles.progressLineFill}`,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: container,
              scrub: 0.5,
              start: "top top",
              end: () => `+=${scrollAmount * 1.5}`,
            },
          }
        );
      } else {
        // Mobile vertical scroll active states
        const stepElements = container.querySelectorAll(`.${styles.step}`);
        stepElements.forEach((stepEl, idx) => {
          gsap.fromTo(
            stepEl,
            { opacity: 0.25 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: stepEl,
                start: "top 60%",
                end: "bottom 40%",
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

  return (
    <section ref={containerRef} className={styles.processSection}>
      {/* Sticky container that locks in place during desktop horizontal scrolling */}
      <div className={styles.stickyContainer}>
        {/* Technical Floating Progress counter in the corner */}
        <div className={styles.indicatorContainer}>
          <span className={styles.indicatorLabel}>PROCESS</span>
          <div className={styles.indicatorSteps}>
            <span className={styles.activeNum}>0{activeStep}</span>
            <span className={styles.slash}>/</span>
            <span className={styles.totalNum}>05</span>
          </div>
        </div>

        {/* Horizontal Track container */}
        <div ref={trackRef} className={styles.horizontalTrack}>
          {/* Continuous connecting timeline lines */}
          <div className={styles.timelineLines}>
            <div className={styles.progressLineTrack} />
            <div className={styles.progressLineFill} />
          </div>

          <div className={styles.stepsWrapper}>
            {steps.map((step, idx) => {
              const stepIndex = idx + 1;
              const isActive = stepIndex === activeStep;
              const isCompleted = stepIndex < activeStep;

              // Assign visual state classes
              let stateClass = styles.upcoming;
              if (isActive) stateClass = styles.active;
              else if (isCompleted) stateClass = styles.completed;

              return (
                <div key={step.num} className={`${styles.step} ${stateClass}`}>
                  {/* Step Number Above Dot */}
                  <span className={styles.stepNum}>{step.num}</span>

                  {/* Node Dot Sitting Directly on Timeline */}
                  <div className={styles.dot}>
                    <div className={styles.dotInner} />
                  </div>

                  {/* Title and Description Below Dot */}
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
