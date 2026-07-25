import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./project.module.css";

// Project data dictionary
const projectsData: Record<
  string,
  {
    title: string;
    category: string;
    year: string;
    role: string;
    description: string;
    tags: string[];
    accent: string;
  }
> = {
  curelogics: {
    title: "CURELOGICS",
    category: "Creative Digital Experience",
    year: "2025",
    role: "Lead Creative Developer",
    description:
      "A high-end visual showcase and interactive presentation platform developed to demonstrate the core features of Curelogics' products. Built using immersive GSAP animations, customized canvas rendering, and dynamic transitions to deliver an unforgettable marketing experience.",
    tags: ["Next.js", "GSAP", "ScrollTrigger", "Canvas API", "WebGL"],
    accent: "#6366f1",
  },
  "attendance-management-system": {
    title: "ATTENDANCE MANAGEMENT SYSTEM",
    category: "Enterprise Web Application",
    year: "2024",
    role: "Full-Stack Developer",
    description:
      "A secure, real-time enterprise management system engineered for high employee volumes. Featuring detailed analytics dashboards, automated reporting engines, multi-role user configurations, and a optimized mobile-first layout built with a highly responsive Laravel backend and Next.js frontend.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    accent: "#06b6d4",
  },
  "maude-natasha": {
    title: "MAUDE NATASHA",
    category: "Creative Personal Website",
    year: "2025",
    role: "Creative Technologist",
    description:
      "An award-winning digital showcase designed for Maude Natasha's photography and creative direction portfolio. Featuring smooth kinetic scrolling, elegant typography transitions, and modular grids designed to showcase visual art in its purest, distraction-free form.",
    tags: ["Next.js", "Lenis Scroll", "GSAP Motion", "CSS Modules", "WordPress CMS"],
    accent: "#ec4899",
  },
};

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Haseeb Rehman`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container} style={{ "--project-accent": project.accent } as React.CSSProperties}>
      <header className={styles.header}>
        <Link href="/work" className={styles.backLink}>
          ← BACK TO WORK
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>YEAR</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>SERVICES</span>
            <span className={styles.metaValue}>Development & Animation</span>
          </div>
        </div>

        <div className={styles.overview}>
          <h2>PROJECT OVERVIEW</h2>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.visualPlaceholder}>
          <div className={styles.visualInner}>
            <span>VISUAL REPRESENTATION COMING SOON</span>
          </div>
        </div>

        <div className={styles.tagsContainer}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <footer className={styles.footer}>
          <Link href="/work" className={styles.bottomBackLink}>
            VIEW OTHER WORK
          </Link>
          <Link href="/contact" className={styles.contactLink}>
            START A SIMILAR PROJECT →
          </Link>
        </footer>
      </main>
    </div>
  );
}
