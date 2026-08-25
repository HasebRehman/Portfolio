"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./preloader.module.css";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll after loader slides out
        document.body.style.overflow = "";
        setIsComplete(true);
      },
    });

    // 1. Entrance of outlined text
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    // 2. Fill outlined text with solid white glow after a delay
    tl.to(
      textRef.current,
      {
        color: "#ffffff",
        textShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
        duration: 0.6,
        ease: "power2.out",
      },
      "+=1.0"
    );

    // 3. Slide curtain up out of viewport
    tl.to(
      overlayRef.current,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        onStart: () => {
          window.dispatchEvent(new CustomEvent("preloaderComplete"));
        },
      },
      "+=0.2"
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (isComplete) return null;

  return (
    <div ref={overlayRef} className={styles.preloaderOverlay}>
      <div className={styles.centerContainer}>
        {/* Outlined Name Typography matching the shared font image */}
        <h1 ref={textRef} className={styles.outlineTitle}>
          HASEEB REHMAN.
        </h1>
      </div>
    </div>
  );
}
