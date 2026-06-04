"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("section-padding max-w-6xl mx-auto", className)}
      aria-label={id.replace(/-/g, " ")}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      {eyebrow && (
        <p className="font-mono text-sm text-amber tracking-widest uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink dark:text-night-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-ink-secondary dark:text-night-secondary-text text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-0.5 bg-amber rounded-full" aria-hidden="true" />
    </div>
  );
}
