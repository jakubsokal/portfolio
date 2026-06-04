"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/lib/data";

const stats = [
  { value: "1", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Languages" },
  { value: "∞", label: "Cups of coffee" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        eyebrow="About me"
        title="The person behind the code."
        subtitle="A bit about who I am, where I've been, and what I care about."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
        >

          <div className="grid grid-cols-2 gap-3 w-full max-w-xs lg:max-w-none">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-canvas-secondary dark:bg-night-secondary border border-border-light dark:border-night-border rounded-xl p-4 text-center"
              >
                <p className="font-display text-2xl font-bold text-amber">{stat.value}</p>
                <p className="text-xs text-ink-tertiary dark:text-night-secondary-text mt-0.5 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber/5 dark:bg-amber/8 border border-amber/20">
            <div className="mt-0.5 p-1.5 rounded-lg bg-amber/10 shrink-0">
              <Zap size={14} className="text-amber" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-mono text-amber uppercase tracking-wider mb-1">
                Currently working on
              </p>
              <p className="text-sm text-ink-secondary dark:text-night-secondary-text">
                {personalInfo.currentlyWorkingOn}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          
          <div className="prose prose-base dark:prose-invert max-w-none">
            {personalInfo.bio.split("\n").filter(Boolean).map((para, i) => (
              <p
                key={i}
                className="text-ink-secondary dark:text-night-secondary-text leading-relaxed text-base md:text-lg"
              >
                {para.trim()}
              </p>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Location", value: personalInfo.location },
              { label: "Email", value: personalInfo.email },
              { label: "Status", value: personalInfo.available ? "Open to opportunities" : "Not available" },
              { label: "Focus", value: "Java, C#, JavaScript, Python" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline gap-2 text-sm"
              >
                <span className="font-mono text-xs text-amber shrink-0">{fact.label}:</span>
                <span className="text-ink-secondary dark:text-night-secondary-text truncate">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
