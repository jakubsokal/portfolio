"use client";

import { personalInfo, navLinks } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-border-light dark:border-night-border bg-canvas-secondary dark:bg-night-secondary"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-ink dark:text-night-text">
              <span className="text-amber">{"{ "}</span>
              { personalInfo.name.split(" ")[0] }
              <span className="text-amber">{" }"}</span>
            </p>
            <p className="text-xs text-ink-tertiary dark:text-night-secondary-text mt-1">
              © {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs text-ink-tertiary dark:text-night-secondary-text hover:text-amber transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-md text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:bg-canvas dark:hover:bg-night transition-colors"
            >
              <Github size={16} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-md text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:bg-canvas dark:hover:bg-night transition-colors"
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="p-2 rounded-md text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:bg-canvas dark:hover:bg-night transition-colors"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
