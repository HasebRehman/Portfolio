import Link from "next/link";
import Image from "next/image";
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
    image?: string;
  }
> = {
  veylohr: {
    title: "VEYLOHR",
    category: "Creative Digital Experience",
    year: "2025",
    role: "Lead Creative Developer",
    description:
      "A high-end visual showcase and interactive presentation platform developed for Veylohr. Built using immersive GSAP animations, customized canvas rendering, and dynamic transitions to deliver an unforgettable marketing and digital web experience.",
    tags: ["Next.js", "GSAP", "ScrollTrigger", "Canvas API", "WebGL"],
    accent: "#8b5cf6",
    image: "/images/veylohr.jpg",
  },
  ecommerce: {
    title: "ECOMMERCE",
    category: "Full-Stack Online Store",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "A sleek, modern e-commerce web application featuring high-performance product displays, interactive shopping carts, smooth checkout flows, responsive mobile views, and complete inventory management integrations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Node.js"],
    accent: "#3b82f6",
    image: "/images/ecommerce.jpg",
  },
  "attendance-system": {
    title: "ATTENDANCE SYSTEM",
    category: "Enterprise Web Application",
    year: "2024",
    role: "Full-Stack Developer",
    description:
      "A secure, real-time enterprise management system engineered for high employee volumes. Featuring detailed analytics dashboards, automated reporting engines, multi-role user configurations, and an optimized mobile-first layout.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    accent: "#06b6d4",
    image: "/images/attendance-system.jpg",
  },
  "attendance-management-system": {
    title: "ATTENDANCE SYSTEM",
    category: "Enterprise Web Application",
    year: "2024",
    role: "Full-Stack Developer",
    description:
      "A secure, real-time enterprise management system engineered for high employee volumes. Featuring detailed analytics dashboards, automated reporting engines, multi-role user configurations, and an optimized mobile-first layout.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "REST API"],
    accent: "#06b6d4",
    image: "/images/attendance-system.jpg",
  },
  curelogics: {
    title: "CURELOGICS",
    category: "Creative Digital Experience",
    year: "2025",
    role: "Lead Creative Developer",
    description:
      "A high-end visual showcase and interactive presentation platform developed to demonstrate the core features of Curelogics' products.",
    tags: ["Next.js", "GSAP", "ScrollTrigger", "Canvas API", "WebGL"],
    accent: "#6366f1",
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
          {project.image ? (
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "400px" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          ) : (
            <div className={styles.visualInner}>
              <span>VISUAL REPRESENTATION COMING SOON</span>
            </div>
          )}
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
