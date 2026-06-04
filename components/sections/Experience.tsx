"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { workExperience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-canvas-secondary/30 dark:bg-night-secondary/20">
      <SectionHeader
        eyebrow="Work History"
        title="Experience."
        subtitle="Where I've worked and what I've shipped."
      />

      <div className="relative">
        <div
          className="absolute left-0 md:left-[140px] lg:left-[160px] top-0 bottom-0 w-px timeline-line hidden sm:block"
          aria-hidden="true"
        />

        <div className="space-y-10 sm:space-y-12">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-0"
            >
              <div className="sm:w-[140px] lg:w-[160px] sm:pr-8 shrink-0 pt-0 sm:pt-1.5 text-right hidden sm:block">
                <span className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text leading-relaxed">
                  {job.startDate}
                  <br />
                  <span className={job.current ? "text-green-500 font-medium" : ""}>
                    {job.current ? "Present" : job.endDate}
                  </span>
                </span>
              </div>

              <div
                className="absolute left-0 md:left-[140px] lg:left-[160px] -translate-x-1/2 mt-1.5 hidden sm:flex w-3 h-3 rounded-full border-2 border-amber bg-canvas dark:bg-night items-center justify-center"
                aria-hidden="true"
              >
                {job.current && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                )}
              </div>

              <div className="sm:pl-10 flex-1">
                <div className="flex items-center gap-2 mb-2 sm:hidden">
                  <Calendar size={12} className="text-amber" aria-hidden="true" />
                  <span className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text">
                    {job.startDate} to {job.current ? "Present" : job.endDate}
                  </span>
                  {job.current && (
                    <span className="px-1.5 py-0.5 text-[10px] bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink dark:text-night-text">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-ink-secondary dark:text-night-secondary-text">
                      <span className="font-medium text-amber">{job.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} aria-hidden="true" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  {job.current && (
                    <span className="hidden sm:inline-flex px-2 py-0.5 text-xs bg-green-500/10 text-green-500 border border-green-500/20 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>

                <ul className="mt-3 space-y-2" aria-label="Responsibilities">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink-secondary dark:text-night-secondary-text leading-relaxed">
                      <ChevronRight
                        size={14}
                        className="text-amber shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4" aria-label="Technologies used">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-canvas dark:bg-night border border-border-light dark:border-night-border text-ink-tertiary dark:text-night-secondary-text rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
