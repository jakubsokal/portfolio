"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Database } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
  database: Database,
};

function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const [idx, setIdx] = useState(0);

  const mappings: Record<string, string[]> = {
    springboot: ["springboot", "spring-boot", "spring"],
    nextdotjs: ["nextjs", "nextdotjs", "next-dotjs"],
    dotnet: ["dotnet", "dotnetcore", "csharp"],
    visualstudiocode: ["visualstudiocode", "vscode"],
    intellijidea: ["intellijidea", "intellij", "intellij-idea"],
    tailwindcss: ["tailwindcss", "tailwind"],
    postgresql: ["postgresql", "postgres"],
    huggingface: ["huggingface", "hugging-face"],
    csharp: ["csharp", "c#"],
  };

  const bases = mappings[icon] ?? [icon];

  const candidates = Array.from(
    new Set(bases.flatMap((base) => [
      `/icons/${icon}.svg`,
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${base}/${base}-original.svg`,
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${base}/${base}-plain.svg`,
    ]))
  );

  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  if (idx >= candidates.length) {
    return (
      <div
        className="w-5 h-5 shrink-0 rounded-full bg-amber/30 flex items-center justify-center text-xs font-medium text-night"
        aria-hidden="true"
        title={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="w-5 h-5 shrink-0 relative" aria-hidden="true" title={name}>
      <Image
        src={candidates[idx]}
        alt={name}
        width={20}
        height={20}
        className="object-contain w-5 h-5"
        onError={() => setIdx((i) => i + 1)}
      />
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayCategories =
    activeCategory === null
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="bg-canvas-secondary/50 dark:bg-night-secondary/30">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Skills & technologies."
        subtitle="The tools I have experience with."
      />

      <div
        className="flex flex-wrap gap-2 mb-10"
        role="tablist"
        aria-label="Filter skills by category"
      >
        <button
          role="tab"
          aria-selected={activeCategory === null}
          onClick={() => setActiveCategory(null)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
            activeCategory === null
              ? "bg-amber text-night border-amber"
              : "bg-transparent border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/50 hover:text-amber"
          )}
        >
          All
        </button>
        {skillCategories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.icon] ?? Code2;
          return (
            <button
              key={cat.category}
              role="tab"
              aria-selected={activeCategory === cat.category}
              onClick={() =>
                setActiveCategory(activeCategory === cat.category ? null : cat.category)
              }
              className={cn(
                "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                activeCategory === cat.category
                  ? "bg-amber text-night border-amber"
                  : "bg-transparent border-border-light dark:border-night-border text-ink-secondary dark:text-night-secondary-text hover:border-amber/50 hover:text-amber"
              )}
            >
              <Icon size={13} aria-hidden="true" />
              {cat.category}
            </button>
          );
        })}
      </div>

      <div className="space-y-10">
        {displayCategories.map((cat, catIndex) => {
          const Icon = CATEGORY_ICONS[cat.icon] ?? Code2;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon size={15} className="text-amber" aria-hidden="true" />
                <h3 className="text-sm font-mono font-medium text-ink-secondary dark:text-night-secondary-text uppercase tracking-wider">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="group flex items-center gap-2 px-3.5 py-2 bg-canvas dark:bg-night border border-border-light dark:border-night-border rounded-xl hover:border-amber/40 hover:shadow-sm transition-all duration-200 cursor-default"
                    role="listitem"
                    aria-label={skill.name}
                  >
                    <SkillIcon icon={skill.icon} name={skill.name} />
                    <span className="text-sm font-medium text-ink dark:text-night-text group-hover:text-amber transition-colors whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
