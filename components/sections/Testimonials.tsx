"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" className="bg-canvas-secondary/30 dark:bg-night-secondary/20">
      <SectionHeader
        eyebrow="Recommendations"
        title="What colleagues say."
        subtitle="Honest words from people I've had the pleasure of working with."
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-10 rounded-2xl bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border"
              role="blockquote"
              aria-label={`Testimonial from ${t?.name ?? "colleague"}`}
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-amber/10 dark:text-amber/8"
                aria-hidden="true"
              />
              <p className="text-base md:text-lg text-ink dark:text-night-text leading-relaxed font-display italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-amber text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-ink dark:text-night-text">{t.name}</p>
                  <p className="text-xs text-ink-tertiary dark:text-night-secondary-text">
                    {t.role}
                    {t.company && <span>, {t.company}</span>}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    i === current
                      ? "w-6 h-2 bg-amber"
                      : "w-2 h-2 bg-border-light dark:bg-night-border hover:bg-amber/40"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-lg border border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/50 hover:text-amber transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-lg border border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/50 hover:text-amber transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
