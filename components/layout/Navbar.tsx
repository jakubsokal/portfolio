"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-canvas/90 dark:bg-night/90 backdrop-blur-md shadow-sm border-b border-border-light dark:border-night-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-semibold text-xl text-ink dark:text-night-text tracking-tight hover:text-amber transition-colors"
          aria-label="Back to top"
        >
          <span className="text-amber">{"{ "}</span>
          {personalInfo.name.split(" ")[0]}
          <span className="text-amber">{" }"}</span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md hover-underline",
                  isActive
                    ? "text-amber"
                    : "text-ink-secondary dark:text-night-secondary-text hover:text-ink dark:hover:text-night-text"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={personalInfo.cvUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-amber text-night rounded-md hover:bg-amber/90 transition-all duration-200 shadow-sm"
            aria-label="View CV"
          >
            CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-ink-secondary dark:text-night-secondary-text hover:bg-canvas-secondary dark:hover:bg-night-secondary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="px-4 pb-4 pt-2 flex flex-col gap-1 bg-canvas/95 dark:bg-night/95 backdrop-blur-md border-b border-border-light dark:border-night-border"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-3 py-2.5 text-sm font-medium text-ink-secondary dark:text-night-secondary-text hover:text-amber transition-colors rounded-md hover:bg-canvas-secondary dark:hover:bg-night-secondary"
            >
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.cvUrl}
            target="_blank"  
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-amber text-night rounded-md"
          >
            View CV
          </a>
        </nav>
      </div>
    </header>
  );
}
