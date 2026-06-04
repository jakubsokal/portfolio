"use client";

import { ExternalLink, Github, Star, GitFork, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { GitHubRepo } from "@/types";
import { formatRepoName, timeAgo } from "@/lib/utils";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Go: "#00ADD8",
  Rust: "#CE422B",
  Java: "#B07219",
  "C++": "#F34B7D",
  Ruby: "#CC342D",
  Swift: "#FA7343",
  Kotlin: "#A97BFF",
  CSS: "#563D7C",
  HTML: "#E34C26",
  Shell: "#89E051",
  Dockerfile: "#2496ED",
  default: "#8892A4",
};

interface ProjectCardProps {
  repo: GitHubRepo;
  index: number;
}

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const langColor = repo.language
    ? (LANGUAGE_COLORS[repo.language] ?? LANGUAGE_COLORS.default)
    : LANGUAGE_COLORS.default;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border rounded-xl p-6 hover:border-amber/50 hover:shadow-lg hover:shadow-amber/5 transition-all duration-300"
      aria-label={`Project: ${formatRepoName(repo.name)}`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-display font-semibold text-lg text-ink dark:text-night-text group-hover:text-amber transition-colors line-clamp-1">
          {formatRepoName(repo.name)}
        </h3>
        <div className="flex items-center gap-1 shrink-0">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:bg-canvas-secondary dark:hover:bg-night transition-colors"
              aria-label={`Live demo: ${formatRepoName(repo.name)}`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-ink-tertiary dark:text-night-secondary-text hover:text-amber hover:bg-canvas-secondary dark:hover:bg-night transition-colors"
            aria-label={`GitHub repo: ${formatRepoName(repo.name)}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="text-sm md:text-[0.95rem] text-ink-secondary dark:text-night-secondary-text line-clamp-3 flex-1 mb-4 leading-relaxed">
        {repo.description || "No description provided."}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-xs font-mono bg-amber/10 text-amber dark:bg-amber/10 dark:text-amber border border-amber/20 rounded-full"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-mono bg-canvas-secondary dark:bg-night text-ink-tertiary dark:text-night-secondary-text rounded-full">
              +{repo.topics.length - 4}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-border-light dark:border-night-border">
        <div className="flex items-center gap-3 text-xs text-ink-tertiary dark:text-night-secondary-text">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: langColor }}
                aria-hidden="true"
              />
              <span>{repo.language}</span>
            </span>
          )}
          <span className="flex items-center gap-1" aria-label={`${repo.stargazers_count} stars`}>
            <Star size={11} aria-hidden="true" />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1" aria-label={`${repo.forks_count} forks`}>
            <GitFork size={11} aria-hidden="true" />
            {repo.forks_count}
          </span>
        </div>
        <span className="flex items-center gap-1 text-xs text-ink-tertiary dark:text-night-secondary-text" aria-label={`Updated ${timeAgo(repo.updated_at)}`}>
          <Clock size={11} aria-hidden="true" />
          {timeAgo(repo.updated_at)}
        </span>
      </div>
    </motion.article>
  );
}
