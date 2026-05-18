"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { siteConfig } from "@/data";
import { navLinks } from "@/components/Helper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/20 !pt-10 !pb-8 md:!pt-20 !md:pb-10 border-t border-border/50 mt-20 w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-8 md:px-16 lg:px-24">

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-8 mb-16">

          {/* Brand & Tagline */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <a href="#home" className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity w-fit">
              GB<span className="text-primary">.</span>
            </a>
            <p className="text-muted text-lg max-w-sm font-light leading-relaxed">
              Crafting modern, interactive, and award-winning web experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted hover:text-primary transition-colors w-fit text-sm font-medium flex items-center gap-1 group"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors w-fit text-sm font-medium flex items-center gap-3 group">
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors w-fit text-sm font-medium flex items-center gap-3 group">
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors w-fit text-sm font-medium flex items-center gap-3 group">
                <FaTwitter size={16} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold uppercase tracking-widest text-muted text-center md:text-left">
            © {currentYear} {siteConfig.name}. All Rights Reserved.
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-muted flex items-center gap-1">
            Built with <span className="text-primary animate-pulse mx-1">❤</span> using Next.js & Tailwind
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
