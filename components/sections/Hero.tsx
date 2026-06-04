"use client";

import { motion } from "framer-motion";
import { ArrowDown, Eye, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-label="Hero"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 dark:bg-amber/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0E1219 1px, transparent 1px), linear-gradient(90deg, #0E1219 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-amber/20 rounded-tl-lg" />
        <div className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-amber/20 rounded-br-lg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-border-light dark:border-night-border bg-canvas/80 dark:bg-night-secondary/80 backdrop-blur-sm text-xs font-mono text-ink-secondary dark:text-night-secondary-text"
        >
          {personalInfo.available && (
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
          )}
          <MapPin size={11} aria-hidden="true" />
          {personalInfo.location}
          <span className="text-border-light dark:text-night-border">·</span>
          <span className={personalInfo.available ? "text-green-500" : "text-red-400"}>
            {personalInfo.available ? "Available for hire" : "Not available"}
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-ink dark:text-night-text leading-[1.05] tracking-tight mb-4"
        >
          {personalInfo.name.split(" ").map((word, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-amber/50" aria-hidden="true" />
          <p className="font-mono text-sm sm:text-base text-amber tracking-widest uppercase">
            {personalInfo.title}
          </p>
          <div className="w-8 h-px bg-amber/50" aria-hidden="true" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.45}
          className="text-base sm:text-lg md:text-xl text-ink-secondary dark:text-night-secondary-text max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 bg-amber text-night font-medium rounded-lg hover:bg-amber/90 transition-all duration-200 shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5"
            aria-label="View my projects"
          >
            View Projects
            <ArrowDown size={16} aria-hidden="true" />
          </button>
          <a
            href={personalInfo.cvUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-border-light dark:border-night-border text-ink dark:text-night-text font-medium rounded-lg hover:border-amber/50 hover:text-amber transition-all duration-200 hover:-translate-y-0.5"
            aria-label="View CV as PDF"
          >
            View CV
            <Eye size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border-light dark:border-night-border text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:border-amber/50 transition-all duration-200"
            aria-label="GitHub profile"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border-light dark:border-night-border text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:border-amber/50 transition-all duration-200"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-lg border border-border-light dark:border-night-border text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:border-amber/50 transition-all duration-200"
            aria-label="Send email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
