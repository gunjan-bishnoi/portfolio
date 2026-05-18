import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundParticles from "@/components/BackgroundParticles";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gunjan Bishnoi | Frontend Developer",
  description: "Creative Frontend Developer crafting modern interactive web experiences with React, Next.js, and Framer Motion.",
  keywords: ["Gunjan Bishnoi", "Frontend Developer", "Web Design", "React Developer", "Next.js Portfolio", "Framer Motion"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-background">
        <div className="noise" />
        <CustomCursor />
        <ScrollProgress />
        <BackgroundParticles />
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
