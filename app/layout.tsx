import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haseeb Rehman | Freelance Web Developer & Creative Technologist",
  description:
    "I build digital experiences through design, code, and technology. Premium interactive web applications and websites.",
  keywords: [
    "Haseeb Rehman",
    "Freelance Developer",
    "Creative Technologist",
    "Web Developer",
    "React",
    "Next.js",
    "GSAP",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Haseeb Rehman" }],
  openGraph: {
    title: "Haseeb Rehman | Freelance Web Developer & Creative Technologist",
    description:
      "I build digital experiences through design, code, and technology. Premium interactive web applications and websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

