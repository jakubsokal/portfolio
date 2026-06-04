"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader
        eyebrow="Academic Background"
        title="Education."
        subtitle="Formal training that grounded my approach to engineering."
      />

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.article
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border hover:border-amber/30 transition-colors duration-300"
            aria-label={`${edu.degree}, ${edu.institution}`}
          >
            <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2 md:w-24 shrink-0">
              <div className="p-3 rounded-xl bg-amber/10 border border-amber/20">
                <GraduationCap size={22} className="text-amber" aria-hidden="true" />
              </div>
              <div className="text-center">
                <p className="text-xs font-mono text-amber font-semibold">
                  {edu.startYear}
                </p>
                <div className="w-px h-3 bg-amber/30 mx-auto my-1 hidden md:block" aria-hidden="true" />
                <p className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text">
                  {edu.current ? "Present" : edu.endYear}
                </p>
              </div>
            </div>

            <div
              className="hidden md:block w-px bg-border-light dark:bg-night-border self-stretch"
              aria-hidden="true"
            />

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-display font-semibold text-xl text-ink dark:text-night-text">
                    {edu.degree}
                  </h3>
                  <p className="text-amber font-medium text-sm">{edu.field}</p>
                </div>
                {edu.current && (
                  <span className="px-2 py-0.5 text-xs bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-medium">
                    In progress
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-secondary dark:text-night-secondary-text mb-3">
                <span className="font-medium">{edu.institution}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} aria-hidden="true" />
                  {edu.location}
                </span>
              </div>

              {edu.description && (
                <p className="text-sm text-ink-secondary dark:text-night-secondary-text leading-relaxed mb-3">
                  {edu.description}
                </p>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <p className="text-xs font-mono text-amber uppercase tracking-wider mb-2">
                    Achievements
                  </p>
                  <ul className="space-y-1.5" aria-label="Academic achievements">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-ink-secondary dark:text-night-secondary-text"
                      >
                        <Award
                          size={13}
                          className="text-amber shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
