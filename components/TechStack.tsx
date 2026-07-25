"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./techstack.module.css";

interface TechItem {
  name: string;
  isCore?: boolean;
  iconSvg: React.ReactNode;
}

interface TechCategory {
  id: string;
  title: string;
  color: string;
  glowColor: string;
  items: TechItem[];
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in category headers
      gsap.from(`.${styles.categoryGroup}`, {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories: TechCategory[] = [
    {
      id: "ai",
      title: "AI & INTELLIGENCE",
      color: "#ec4899",
      glowColor: "rgba(236, 72, 153, 0.25)",
      items: [
        {
          name: "OpenAI API",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ec4899" }}>
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <circle cx="12" cy="12" r="3" fill="#ec4899" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          ),
        },
        {
          name: "Anthropic Claude",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#d97706" }}>
              <path d="M14.5 3.5 19 20.5h-3.2l-1.1-4.5H9.3l-1.1 4.5H5L9.5 3.5h5zm-2 4.6L10.2 13.5h3.6l-1.3-5.4z" />
            </svg>
          ),
        },
        {
          name: "Gemini AI",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#3b82f6" }}>
              <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
            </svg>
          ),
        },
        {
          name: "Vercel AI SDK",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ffffff" }}>
              <path d="M12 1L24 22H0L12 1z" />
            </svg>
          ),
        },
        {
          name: "LangChain",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#10b981" }}>
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          ),
        },
        {
          name: "Cursor / AGY",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "frontend",
      title: "FRONTEND",
      color: "#6366f1",
      glowColor: "rgba(99, 102, 241, 0.25)",
      items: [
        {
          name: "Next.js",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ffffff" }}>
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.48 18.28l-6.85-9.83v9.83H9.15V5.72h1.74l6.8 9.77V5.72h1.48v12.56h-1.69z" />
            </svg>
          ),
        },
        {
          name: "React",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#00d8ff" }}>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="2" fill="#00d8ff" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#3178c6" }}>
              <rect width="24" height="24" rx="4" fill="#3178c6" />
              <path d="M1.5 1.5h21v21h-21z" fill="none" />
              <path d="M13.4 12.3v1.8h2.3v7.9h2.2v-7.9h2.3v-1.8h-6.8zm-7.3 3.6c.5.4 1.2.7 2 .7.8 0 1.2-.3 1.2-.8 0-.5-.4-.8-1.5-1.2-1.7-.5-2.6-1.3-2.6-2.6 0-1.6 1.4-2.7 3.4-2.7 1.3 0 2.3.3 3.1.9l-.9 1.6c-.6-.4-1.3-.7-2.1-.7-.7 0-1.1.3-1.1.7 0 .5.4.7 1.6 1.1 1.8.6 2.5 1.4 2.5 2.7 0 1.8-1.4 2.8-3.6 2.8-1.5 0-2.6-.4-3.5-1.1l.9-1.4z" fill="#fff" />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#f7df1e" }}>
              <rect width="24" height="24" rx="4" fill="#f7df1e" />
              <path d="M6.5 18.5c.8.6 1.8.9 2.9.9 1.7 0 2.6-.8 2.6-2.1 0-1.3-.8-1.9-2.6-2.6l-.7-.3c-1.3-.5-1.8-1-1.8-1.9 0-1 .9-1.7 2.2-1.7 1 0 1.9.3 2.5.8l.6-1.3c-.7-.5-1.7-.8-3-.8-2 0-3.5 1.2-3.5 3 0 1.4.8 2.2 2.3 2.8l.7.3c1.4.5 2.1 1 2.1 2 0 1.1-.9 1.8-2.4 1.8-1.2 0-2.3-.4-3.1-1.1l-.8 1.4zm10.7.2c.6.4 1.4.6 2.3.6 1.7 0 2.7-.8 2.7-2.5V9.5h-1.8v7.2c0 .9-.4 1.2-1.1 1.2-.5 0-1.1-.2-1.5-.5l-.6 1.3z" fill="#000" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#38bdf8" }}>
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: "Redux Toolkit",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#764abc" }}>
              <path d="M16.5 6a4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0 .1 1A4.5 4.5 0 0 0 7.5 6 4.5 4.5 0 0 0 3 10.5 4.5 4.5 0 0 0 7.5 15a4.5 4.5 0 0 0 4.4-3.5 4.5 4.5 0 0 0 4.6 3.5 4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 16.5 6z" />
            </svg>
          ),
        },
        {
          name: "Framer Motion",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#0055ff" }}>
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
          ),
        },
        {
          name: "HTML5 / CSS3",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#e34f26" }}>
              <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.4H6.8l.3 3.3h9.8l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.1H4.6l.5 5.8L12 21.3l6.9-1.9 1-13H7.2" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "backend",
      title: "BACKEND",
      color: "#06b6d4",
      glowColor: "rgba(6, 182, 212, 0.25)",
      items: [
        {
          name: "Node.js",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#5fa04e" }}>
              <path d="M12 1.8a1.2 1.2 0 0 0-.6.2L2.5 7.4a1.2 1.2 0 0 0-.6 1v10.8a1.2 1.2 0 0 0 .6 1l8.9 5.4a1.2 1.2 0 0 0 1.2 0l8.9-5.4a1.2 1.2 0 0 0 .6-1V8.4a1.2 1.2 0 0 0-.6-1L12.6 2a1.2 1.2 0 0 0-.6-.2z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ffffff" }}>
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2v-2h2z" />
            </svg>
          ),
        },
        {
          name: "NestJS",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ea2845" }}>
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.2 3.6v7.2L12 19.2l-7.2-3.6V8.4L12 4.8z" />
            </svg>
          ),
        },
        {
          name: "GraphQL",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#e10098" }}>
              <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5.3 8v8L12 19.7 18.7 16V8L12 4.3z" />
            </svg>
          ),
        },
        {
          name: "REST APIs",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#06b6d4" }}>
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 12h4m4 0h4" />
            </svg>
          ),
        },
        {
          name: "JWT / OAuth",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#a855f7" }}>
              <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "database",
      title: "DATABASE & STORAGE",
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.25)",
      items: [
        {
          name: "PostgreSQL",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#336791" }}>
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 16h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
          ),
        },
        {
          name: "MongoDB",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#47a248" }}>
              <path d="M12 0s-6 7.5-6 12a6 6 0 0 0 12 0c0-4.5-6-12-6-12zm0 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          ),
        },
        {
          name: "Prisma",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#16a34a" }}>
              <path d="M12 1L2 20h20L12 1zm0 4.5l6.5 12.5H5.5L12 5.5z" />
            </svg>
          ),
        },
        {
          name: "Supabase",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#3ecf8e" }}>
              <path d="M13.4 2.1c-.6-.4-1.4.1-1.4.8v8.6H3.6c-.7 0-1.1.8-.7 1.3l8.6 11c.6.7 1.7.2 1.7-.6v-8.6h8.4c.7 0 1.1-.8.7-1.3l-8.9-11.2z" />
            </svg>
          ),
        },
        {
          name: "Redis",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#dc382d" }}>
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.3L18 8v8l-6 3-6-3V8l6-2.7z" />
            </svg>
          ),
        },
        {
          name: "Firebase",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ffca28" }}>
              <path d="M3.9 16.9L7.4 2.2c.1-.4.6-.5.9-.2l3.4 6.3-11.8 8.6zm16.2.1L16.2 3.7c-.1-.4-.6-.5-.9-.2l-2.4 4.5 7.2 9zm-7.6-6.1L9.7 5.7c-.1-.4-.6-.5-.9-.2L1.8 19.3l10.7 4.1c.4.2.8.2 1 0l10.7-4.1-11.7-8.4z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "devops",
      title: "DEVOPS & INFRASTRUCTURE",
      color: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.25)",
      items: [
        {
          name: "Docker",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#2496ed" }}>
              <path d="M13 8h3v3h-3zm-4 0h3v3H9zm-4 0h3v3H5zm8-4h3v3h-3zm-4 0h3v3H9zm8 4h3v3h-3zM2 13.5C2 17 5 19 9.5 19c6 0 10.5-3 12-7-1 .5-2.5.5-3.5 0C17 11.5 15 11 13 11H2v2.5z" />
            </svg>
          ),
        },
        {
          name: "Vercel",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ffffff" }}>
              <path d="M12 1L24 22H0L12 1z" />
            </svg>
          ),
        },
        {
          name: "GitHub Actions",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#2088ff" }}>
              <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 14h-2v-4H9V10h4v6z" />
            </svg>
          ),
        },
        {
          name: "Nginx",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#009639" }}>
              <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm5.2 16.3h-2.5l-5.4-7.2v7.2H6.8V7.7h2.5l5.4 7.2V7.7h2.5v8.6z" />
            </svg>
          ),
        },
        {
          name: "Linux / Ubuntu",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#e95420" }}>
              <circle cx="12" cy="12" r="10" />
            </svg>
          ),
        },
        {
          name: "AWS",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ff9900" }}>
              <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "tools",
      title: "DEVELOPER TOOLS",
      color: "#eab308",
      glowColor: "rgba(234, 179, 8, 0.25)",
      items: [
        {
          name: "Git / GitHub",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#f05032" }}>
              <path d="M23.5 10.9L13.1.5c-.7-.7-1.7-.7-2.3 0L8.4 2.9l3.1 3.1c.7-.2 1.6 0 2.1.6.6.6.7 1.5.3 2.2l3 3c.7-.4 1.6-.3 2.2.3.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.2l-2.8-2.8v7.2c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1.1.8-1.3V8.8c-.5-.2-.8-.7-.8-1.3 0-.6.3-1.1.8-1.3L8.1 3.2.5 10.9c-.7.7-.7 1.7 0 2.3l10.4 10.4c.7.7 1.7.7 2.3 0l10.3-10.4c.6-.6.6-1.7 0-2.3z" />
            </svg>
          ),
        },
        {
          name: "Postman",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ff6c37" }}>
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.8 11.2l-3.6 3.6c-.4.4-1 .4-1.4 0l-1.8-1.8c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.1 1.1 2.9-2.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4z" />
            </svg>
          ),
        },
        {
          name: "Figma",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#f24e1e" }}>
              <path d="M8 24a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4zm0-16a4 4 0 0 1 0-8h4v8H8zm8 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            </svg>
          ),
        },
        {
          name: "VS Code",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#007acc" }}>
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.13-3.12a.999.999 0 0 0-1.276.075L.328 7.371a1 1 0 0 0-.041 1.455l3.52 3.518-3.52 3.518a1 1 0 0 0 .041 1.455l1.311 1.286a.999.999 0 0 0 1.276.075l4.13-3.12 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.765V3.235a1.5 1.5 0 0 0-.85-1.348z" />
            </svg>
          ),
        },
        {
          name: "Turborepo",
          isCore: false,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#ef4444" }}>
              <circle cx="12" cy="12" r="10" />
            </svg>
          ),
        },
        {
          name: "Vite / Webpack",
          isCore: true,
          iconSvg: (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ color: "#bd34fe" }}>
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className={styles.techSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.subTag}>
            <span className={styles.subTagDash} />
            <span>TECH TOOLBOX</span>
          </div>

          <h2 className={styles.title}>
            The <span className={styles.highlightStack}>stack</span> &{" "}
            <span className={styles.highlightAI}>AI systems</span> I build with
          </h2>

          <div className={styles.description}>
            <span>
              Real production tools & cutting-edge AI models integrated into modern, scalable web applications.
            </span>
            <div className={styles.legendItem}>
              <span className={styles.legendDot} />
              <span>Core production tool</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryGroup}>
            {/* Category Header */}
            <div className={styles.categoryHeader}>
              <span
                className={styles.categoryDot}
                style={{
                  backgroundColor: category.color,
                  boxShadow: `0 0 10px ${category.color}`,
                }}
              />
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <span className={styles.categoryCount}>({category.items.length})</span>
            </div>

            {/* Grid of tech cards */}
            <div className={styles.grid}>
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className={`${styles.techCard} ${category.id === "ai" ? styles.aiCard : ""}`}
                  style={
                    {
                      "--card-accent": category.color,
                      "--card-accent-glow": category.glowColor,
                    } as React.CSSProperties
                  }
                  data-cursor-big="true"
                >
                  <div className={styles.techLeft}>
                    <div className={styles.iconWrapper}>{item.iconSvg}</div>
                    <span className={styles.techName}>{item.name}</span>
                  </div>

                  {item.isCore && (
                    <span
                      className={styles.coreDot}
                      style={{
                        backgroundColor: category.color,
                        boxShadow: `0 0 6px ${category.color}`,
                      }}
                      title="Core Daily Production Tool"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
