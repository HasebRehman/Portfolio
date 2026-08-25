"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./techstack.module.css";

interface TechItem {
  id: string;
  name: string;
  category: "all" | "ai" | "frontend" | "backend" | "database" | "devops";
  categoryTitle: string;
  color: string;
  glowColor: string;
  iconSvg: React.ReactNode;
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "ai" | "frontend" | "backend" | "database" | "devops"
  >("all");

  const techList: TechItem[] = [
    // AI & Intelligence
    {
      id: "openai",
      name: "OpenAI API",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#ec4899",
      glowColor: "rgba(236, 72, 153, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ec4899" }}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <circle cx="12" cy="12" r="3" fill="#ec4899" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        </svg>
      ),
    },
    {
      id: "claude",
      name: "Anthropic Claude",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#d97706",
      glowColor: "rgba(217, 119, 6, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#d97706" }}>
          <path d="M14.5 3.5 19 20.5h-3.2l-1.1-4.5H9.3l-1.1 4.5H5L9.5 3.5h5zm-2 4.6L10.2 13.5h3.6l-1.3-5.4z" />
        </svg>
      ),
    },
    {
      id: "gemini",
      name: "Gemini AI",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#3b82f6",
      glowColor: "rgba(59, 130, 246, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#3b82f6" }}>
          <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
        </svg>
      ),
    },
    {
      id: "vercel-ai",
      name: "Vercel AI SDK",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#ffffff" }}>
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      ),
    },
    {
      id: "langchain",
      name: "LangChain",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#10b981" }}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      id: "cursor-agy",
      name: "Cursor / AGY",
      category: "ai",
      categoryTitle: "AI & INTELLIGENCE",
      color: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a855f7" }}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },

    // Frontend
    {
      id: "nextjs",
      name: "Next.js",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#ffffff" }}>
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.48 18.28l-6.85-9.83v9.83H9.15V5.72h1.74l6.8 9.77V5.72h1.48v12.56h-1.69z" />
        </svg>
      ),
    },
    {
      id: "react",
      name: "React",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#00d8ff",
      glowColor: "rgba(0, 216, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#00d8ff" }}>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#00d8ff" />
        </svg>
      ),
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#3178c6",
      glowColor: "rgba(49, 120, 198, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#3178c6" }}>
          <rect width="24" height="24" rx="4" fill="#3178c6" />
          <path d="M1.5 1.5h21v21h-21z" fill="none" />
          <path d="M13.4 12.3v1.8h2.3v7.9h2.2v-7.9h2.3v-1.8h-6.8zm-7.3 3.6c.5.4 1.2.7 2 .7.8 0 1.2-.3 1.2-.8 0-.5-.4-.8-1.5-1.2-1.7-.5-2.6-1.3-2.6-2.6 0-1.6 1.4-2.7 3.4-2.7 1.3 0 2.3.3 3.1.9l-.9 1.6c-.6-.4-1.3-.7-2.1-.7-.7 0-1.1.3-1.1.7 0 .5.4.7 1.6 1.1 1.8.6 2.5 1.4 2.5 2.7 0 1.8-1.4 2.8-3.6 2.8-1.5 0-2.6-.4-3.5-1.1l.9-1.4z" fill="#fff" />
        </svg>
      ),
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#f7df1e",
      glowColor: "rgba(247, 223, 30, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#f7df1e" }}>
          <rect width="24" height="24" rx="4" fill="#f7df1e" />
          <path d="M6.5 18.5c.8.6 1.8.9 2.9.9 1.7 0 2.6-.8 2.6-2.1 0-1.3-.8-1.9-2.6-2.6l-.7-.3c-1.3-.5-1.8-1-1.8-1.9 0-1 .9-1.7 2.2-1.7 1 0 1.9.3 2.5.8l.6-1.3c-.7-.5-1.7-.8-3-.8-2 0-3.5 1.2-3.5 3 0 1.4.8 2.2 2.3 2.8l.7.3c1.4.5 2.1 1 2.1 2 0 1.1-.9 1.8-2.4 1.8-1.2 0-2.3-.4-3.1-1.1l-.8 1.4zm10.7.2c.6.4 1.4.6 2.3.6 1.7 0 2.7-.8 2.7-2.5V9.5h-1.8v7.2c0 .9-.4 1.2-1.1 1.2-.5 0-1.1-.2-1.5-.5l-.6 1.3z" fill="#000" />
        </svg>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#38bdf8" }}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#764abc",
      glowColor: "rgba(118, 74, 188, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#764abc" }}>
          <path d="M16.5 6a4.5 4.5 0 0 0-4.5 4.5 4.5 4.5 0 0 0 .1 1A4.5 4.5 0 0 0 7.5 6 4.5 4.5 0 0 0 3 10.5 4.5 4.5 0 0 0 7.5 15a4.5 4.5 0 0 0 4.4-3.5 4.5 4.5 0 0 0 4.6 3.5 4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 16.5 6z" />
        </svg>
      ),
    },
    {
      id: "zustand",
      name: "Zustand",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#a855f7" }}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="9" cy="10" r="1.5" />
          <circle cx="15" cy="10" r="1.5" />
        </svg>
      ),
    },
    {
      id: "mui",
      name: "Material UI",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#0081cb",
      glowColor: "rgba(0, 129, 203, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#0081cb" }}>
          <path d="M0 2.472v19.056l6 3.472V16.63L12 20.1l6-3.47v8.37l6-3.472V2.472L18 5.944l-6-3.472-6 3.472z" />
        </svg>
      ),
    },
    {
      id: "framer",
      name: "Framer / Motion",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#0055ff",
      glowColor: "rgba(0, 85, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#0055ff" }}>
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      ),
    },
    {
      id: "html5",
      name: "HTML5",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#e34f26",
      glowColor: "rgba(227, 79, 38, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#e34f26" }}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.4H6.8l.3 3.3h9.8l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.1H4.6l.5 5.8L12 21.3l6.9-1.9 1-13H7.2" />
        </svg>
      ),
    },
    {
      id: "css3",
      name: "CSS3",
      category: "frontend",
      categoryTitle: "FRONTEND",
      color: "#1572b6",
      glowColor: "rgba(21, 114, 182, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#1572b6" }}>
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.4H6.8l.3 3.3h9.8l-.6 6.3-4.3 1.2-4.3-1.2-.3-3.1H4.6l.5 5.8L12 21.3l6.9-1.9 1-13H7.2" />
        </svg>
      ),
    },

    // Backend
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      categoryTitle: "BACKEND",
      color: "#5fa04e",
      glowColor: "rgba(95, 160, 78, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#5fa04e" }}>
          <path d="M12 1.8a1.2 1.2 0 0 0-.6.2L2.5 7.4a1.2 1.2 0 0 0-.6 1v10.8a1.2 1.2 0 0 0 .6 1l8.9 5.4a1.2 1.2 0 0 0 1.2 0l8.9-5.4a1.2 1.2 0 0 0 .6-1V8.4a1.2 1.2 0 0 0-.6-1L12.6 2a1.2 1.2 0 0 0-.6-.2z" />
        </svg>
      ),
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      categoryTitle: "BACKEND",
      color: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#ffffff" }}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2v-2h2z" />
        </svg>
      ),
    },
    {
      id: "rest-graphql",
      name: "REST & GraphQL",
      category: "backend",
      categoryTitle: "BACKEND",
      color: "#06b6d4",
      glowColor: "rgba(6, 182, 212, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#06b6d4" }}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 12h4m4 0h4" />
        </svg>
      ),
    },
    {
      id: "auth-security",
      name: "JWT & OAuth 2.0",
      category: "backend",
      categoryTitle: "BACKEND",
      color: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#a855f7" }}>
          <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5z" />
        </svg>
      ),
    },

    // Database & Storage
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "database",
      categoryTitle: "DATABASE & STORAGE",
      color: "#336791",
      glowColor: "rgba(51, 103, 145, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#336791" }}>
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 16h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
      ),
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      categoryTitle: "DATABASE & STORAGE",
      color: "#47a248",
      glowColor: "rgba(71, 162, 72, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#47a248" }}>
          <path d="M12 0s-6 7.5-6 12a6 6 0 0 0 12 0c0-4.5-6-12-6-12zm0 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      ),
    },
    {
      id: "prisma",
      name: "Prisma ORM",
      category: "database",
      categoryTitle: "DATABASE & STORAGE",
      color: "#16a34a",
      glowColor: "rgba(22, 163, 74, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#16a34a" }}>
          <path d="M12 1L2 20h20L12 1zm0 4.5l6.5 12.5H5.5L12 5.5z" />
        </svg>
      ),
    },
    {
      id: "supabase",
      name: "Supabase",
      category: "database",
      categoryTitle: "DATABASE & STORAGE",
      color: "#3ecf8e",
      glowColor: "rgba(62, 207, 142, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#3ecf8e" }}>
          <path d="M13.4 2.1c-.6-.4-1.4.1-1.4.8v8.6H3.6c-.7 0-1.1.8-.7 1.3l8.6 11c.6.7 1.7.2 1.7-.6v-8.6h8.4c.7 0 1.1-.8.7-1.3l-8.9-11.2z" />
        </svg>
      ),
    },

    // DevOps & Tools
    {
      id: "docker",
      name: "Docker",
      category: "devops",
      categoryTitle: "DEVOPS & INFRASTRUCTURE",
      color: "#2496ed",
      glowColor: "rgba(36, 150, 237, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#2496ed" }}>
          <path d="M13 8h3v3h-3zm-4 0h3v3H9zm-4 0h3v3H5zm8-4h3v3h-3zm-4 0h3v3H9zm8 4h3v3h-3zM2 13.5C2 17 5 19 9.5 19c6 0 10.5-3 12-7-1 .5-2.5.5-3.5 0C17 11.5 15 11 13 11H2v2.5z" />
        </svg>
      ),
    },
    {
      id: "vercel",
      name: "Vercel",
      category: "devops",
      categoryTitle: "DEVOPS & INFRASTRUCTURE",
      color: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#ffffff" }}>
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      ),
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "devops",
      categoryTitle: "DEVOPS & INFRASTRUCTURE",
      color: "#f05032",
      glowColor: "rgba(240, 80, 50, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#f05032" }}>
          <path d="M23.5 10.9L13.1.5c-.7-.7-1.7-.7-2.3 0L8.4 2.9l3.1 3.1c.7-.2 1.6 0 2.1.6.6.6.7 1.5.3 2.2l3 3c.7-.4 1.6-.3 2.2.3.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.2l-2.8-2.8v7.2c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1.1.8-1.3V8.8c-.5-.2-.8-.7-.8-1.3 0-.6.3-1.1.8-1.3L8.1 3.2.5 10.9c-.7.7-.7 1.7 0 2.3l10.4 10.4c.7.7 1.7.7 2.3 0l10.3-10.4c.6-.6.6-1.7 0-2.3z" />
        </svg>
      ),
    },
    {
      id: "figma",
      name: "Figma",
      category: "devops",
      categoryTitle: "DEVOPS & INFRASTRUCTURE",
      color: "#f24e1e",
      glowColor: "rgba(242, 78, 30, 0.25)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#f24e1e" }}>
          <path d="M8 24a4 4 0 0 1-4-4 4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4zm0-16a4 4 0 0 1 0-8h4v8H8zm8 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
        </svg>
      ),
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? techList
      : techList.filter((item) => item.category === activeFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(`.${styles.techCard}`);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 20, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.04,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className={styles.techSection}>
      {/* Ambient background glows */}
      <div className={styles.bgGlowOrbLeft} />
      <div className={styles.bgGlowOrbRight} />

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.subTag}>
            <span className={styles.subTagDot} />
            <span>ENGINEERING TOOLBOX</span>
          </div>

          <h2 className={styles.title}>
            The <span className={styles.highlightStack}>stack</span> &{" "}
            <span className={styles.highlightAI}>AI systems</span> I build with
          </h2>

          <p className={styles.descriptionText}>
            Real production tools & cutting-edge AI models integrated into modern,
            scalable web applications.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className={styles.filterBar}>
          {[
            { id: "all", label: "ALL TOOLS", count: techList.length },
            {
              id: "ai",
              label: "AI & INTELLIGENCE",
              count: techList.filter((t) => t.category === "ai").length,
            },
            {
              id: "frontend",
              label: "FRONTEND",
              count: techList.filter((t) => t.category === "frontend").length,
            },
            {
              id: "backend",
              label: "BACKEND",
              count: techList.filter((t) => t.category === "backend").length,
            },
            {
              id: "database",
              label: "DATABASE",
              count: techList.filter((t) => t.category === "database").length,
            },
            {
              id: "devops",
              label: "DEVOPS & TOOLS",
              count: techList.filter((t) => t.category === "devops").length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.filterBtn} ${
                activeFilter === tab.id ? styles.activeFilterBtn : ""
              }`}
              onClick={() =>
                setActiveFilter(
                  tab.id as "all" | "ai" | "frontend" | "backend" | "database" | "devops"
                )
              }
              data-cursor-big="true"
            >
              <span>{tab.label}</span>
              <span className={styles.tabBadge}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Grid of Pill Badges (Image 2 style) */}
        <div ref={gridRef} className={styles.grid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={styles.techCard}
              style={
                {
                  "--card-accent": item.color,
                  "--card-accent-glow": item.glowColor,
                } as React.CSSProperties
              }
              data-cursor-big="true"
            >
              <div className={styles.techLeft}>
                <div className={styles.iconBox}>{item.iconSvg}</div>
                <span className={styles.techName}>{item.name}</span>
              </div>

              <span
                className={styles.glowingDot}
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0 0 8px ${item.color}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


