"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Handle shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = navContainerRef.current;
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add(styles.scrolled);
        } else {
          nav.classList.remove(styles.scrolled);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar entrance animation when preloader finishes
  useEffect(() => {
    const nav = navContainerRef.current;
    if (!nav) return;

    const playNavEntrance = () => {
      gsap.fromTo(
        nav,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    };

    window.addEventListener("preloaderComplete", playNavEntrance);

    // Fallback if preloader finished or on page refresh
    const timer = setTimeout(() => {
      if (nav) {
        gsap.to(nav, { opacity: 1, y: 0, duration: 0.5 });
      }
    }, 2800);

    return () => {
      window.removeEventListener("preloaderComplete", playNavEntrance);
      clearTimeout(timer);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // GSAP animation for mobile menu
  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current?.querySelectorAll("a");

    if (isOpen) {
      // Open animation
      gsap.to(menu, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

      if (links) {
        gsap.fromTo(
          links,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            delay: 0.3,
            ease: "power3.out",
          }
        );
      }
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Close animation
      gsap.to(menu, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
      // Re-enable scrolling
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav ref={navContainerRef} className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink} data-cursor-big="true">
            <Image
              src="/images/HR-logo.png"
              alt="Haseeb Rehman Logo"
              width={160}
              height={50}
              priority
              className={styles.logoImg}
            />
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <button
            className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            data-cursor-big="true"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div ref={menuRef} className={styles.mobileMenu}>
        <div ref={linksRef} className={styles.mobileLinks}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={styles.menuFooter}>
          <p>© {new Date().getFullYear()} Haseeb Rehman. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
