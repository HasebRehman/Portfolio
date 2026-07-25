"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is a touchscreen or has no hover support
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set initial position out of screen
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        overwrite: "auto",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        overwrite: "auto",
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Hover states logic
    const handleHoverStart = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const isBigHover = target.getAttribute("data-cursor-big") === "true";
      
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      
      if (isBigHover) {
        gsap.to(follower, {
          scale: 3.5,
          backgroundColor: "rgba(99, 102, 241, 0.15)",
          borderColor: "var(--accent)",
          borderWidth: "1.5px",
          duration: 0.25,
        });
      } else {
        gsap.to(follower, {
          scale: 2.0,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "var(--accent)",
          borderWidth: "1px",
          duration: 0.25,
        });
      }
    };

    const handleHoverEnd = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: "1px",
        duration: 0.25,
      });
    };

    const updateHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, [data-hover-cursor]");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateHoverListeners();

    // Observe changes to the DOM to attach listener to new dynamic elements
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
      
      const elements = document.querySelectorAll("a, button, [data-hover-cursor]");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-element"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          backgroundColor: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor-element"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0,
          boxSizing: "border-box",
        }}
      />
    </>
  );
}

