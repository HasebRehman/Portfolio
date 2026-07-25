import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
